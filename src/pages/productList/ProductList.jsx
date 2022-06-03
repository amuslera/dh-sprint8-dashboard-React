import './productList.css'
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("https://dh-g9-clessidra.herokuapp.com/api/products")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.products });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="productList container-sm">
        <h1>Listado de productos</h1>
        <table className='table table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>ID/Link</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Talle</th>
              <th>Color</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayDeP.map((products) => (
              <tr key={products.id}>
                <td><a href={`https://dh-g9-clessidra.herokuapp.com/products/detail/${products.id}` } target= "_blank" rel='noreferrer'>{products.id}</a></td> 
                <td>{products.nombre}</td>
                <td>{products.descripcion}</td>
                <td>{products.talle.descripcion}</td>
                <td>{products.color.descripcion}</td>
                <td>{products.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  }
}
export default ProductList;
