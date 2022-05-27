import './usersData.css'
import React, { Component } from "react";

class UsersData extends Component {
  constructor() {
    super();
    this.state = {
      users: 0,
      lastUser: {},
    };
  }

  componentDidMount() {
    fetch("http://localhost:3050/api/usersCount")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ users: json.data });
      })
      .catch((error) => console.log(error));
    fetch("http://localhost:3050/api/lastUser")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ lastUser: json.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    console.log(this.state.users);
    console.log(this.state.lastUser);
    return (
      <div className='widgetSm'>
      <div className='widgetSmItem'></div>
        <span className='widgetSmItemTitle'>Datos Usuarios</span>
        <div className='widgetSmItemContainer'>
        <span className='widgetSmItemValue'>Tenemos {this.state.users} Usuarios</span>
        <span className='widgetSmItemValue'>El último usuario registrado es: {this.state.lastUser.nombre} {this.state.lastUser.apellido}</span>
        <span className='widgetSmItemValue'>Su correo electronico es: {this.state.lastUser.email}</span>
      </div>
      </div>
    );
  }
}
export default UsersData;
