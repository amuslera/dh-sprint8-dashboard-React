import React from 'react'
import './fetchLastUser.css'
export default class FetchLastUser extends React.Component {
    
    state = {
        loading: true,
        lastUser: {}

    }
    
    async componentDidMount () {
        const url = 'http://localhost:3050/api/lastUser';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            lastUser: data.data,
        })
        
    }
        
    render() {
        
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.lastUser) {
            return <div>No hay usuarios</div>
        }

        return (
            
        <div className=''>
            <div>Nombre del ultimo usuario: {this.state.lastUser.nombre} {this.state.lastUser.apellido}</div>
            <div>Email del ultimo usuario: {this.state.lastUser.email}</div>
        </div>
        )
    }
}