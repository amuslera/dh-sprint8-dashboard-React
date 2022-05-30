import './userList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeU: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ arrayDeU: json.users });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="productList container-sm">
        <h1>Listado de usuarios</h1>
        <table className='table table-striped'>
          <thead className= 'table-dark'>
            <tr>
              <th>ID</th>
              <th>Creado el</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayDeU.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.fecha_creacion}</td>
                <td>{users.nombre}</td>
                <td>{users.apellido}</td>
                <td>{users.email}</td>
                <td>{<img className='lastUserAvatarImg' src= { !users.avatar ? "http://localhost:3050/images/noAvatar.png" : "http://localhost:3050/images/profileImages/" + users.avatar} alt=""/>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  }
}
export default UserList;
