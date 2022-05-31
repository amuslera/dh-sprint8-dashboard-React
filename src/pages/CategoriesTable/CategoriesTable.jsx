import React, { Component } from "react";
import './categoriesTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProdXCat extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("https://dh-g9-clessidra.herokuapp.com/api/prodXCat")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.producto_categoria });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
        <div className="categoriesTable container-sm">
            <h1>Listado de categorias</h1>
            <table className="table table-striped">
                <thead className="table-dark">
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
