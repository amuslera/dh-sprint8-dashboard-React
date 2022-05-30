import React, { Component } from "react";
import './categoriesTable.css'

class ProdXCat extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/prodXCat")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.producto_categoria });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
        <div className="categoriesTable">
            <h1>Productos por Categoria</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Cantidad de productos asociados</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arrayDeP.map((producto_categoria) => (
                        <tr key={producto_categoria.categorias.id}>
                            <td>{producto_categoria.categorias.id}</td>
                            <td>{producto_categoria.categorias.descripcion}</td>
                            <td>{producto_categoria.sumaProductos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    }
}

export default ProdXCat;
