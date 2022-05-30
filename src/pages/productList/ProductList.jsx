import './productList.css'
import React, { Component } from "react";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/products")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeP: json.products });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="productList">
        <h1>Productos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
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
                <td>{products.id}</td>
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
