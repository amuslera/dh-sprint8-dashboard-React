import React from 'react'

export default class FetchUserCount extends React.Component {
    
    state = {
        loading: true,
        usersCount: 0,
        lastUser: {}

    }
    
    async componentDidMount () {
        const url = 'http://localhost:3050/api/usersCount';
        const response = await fetch(url);
        const totals = await response.json();
        this.setState({
            loading: false,
            usersCount: totals
        })
        
    }
        
    render() {    
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.usersCount) {
            return <div>No hay usuarios</div>
        }

        return (
            
        <div>
            <div>Total usuarios: {this.state.usersCount.data}</div>
        </div>
     )
    }
}