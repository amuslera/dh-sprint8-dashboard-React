import React from 'react'
import './lastUserData.css'

export default class lastUserData extends React.Component {
  
    state = {
        loading: true,
        lastUser: {},
        avatar: "",
    }

    async componentDidMount () {
        const url1 = 'https://dh-g9-clessidra.herokuapp.com/api/lastUser';
        const response1 = await fetch(url1);
        const totals1 = await response1.json();
        this.setState({
            loading: false,
            lastUser: totals1,
            avatar: "https://dh-g9-clessidra.herokuapp.com/images/profileImages/" + totals1.data.avatar,
            
        })
        if(!this.state.lastUser.data.avatar) {
            return this.setState(
                {avatar: "https://dh-g9-clessidra.herokuapp.com/images/noAvatar.png"}
            
            )
        }
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        if (!this.state.lastUser) {
            return <div>No hay usuarios</div>
        }
        
        return (
        <div className='lastUserData'>
            <div className='lastUserDataMainContainer'>
                <div className='lastUserDataItemsTitle'>
                    <span>Ultimo usuario registrado en BD</span>
                </div>
                <div className='lastUserDataSubContainer'>
                    <div className='lastUserDataItem'>
                        <div className='lastUserDataItemContainer'>
                            <span className='lastUserDataItemTitle'>ID:</span>
                            <span className='lastUserDataItemValue'>{this.state.lastUser.data.id}</span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                            <span className='lastUserDataItemTitle'>Nombre:</span>
                            <span className='lastUserDataItemValue'>{this.state.lastUser.data.nombre} {this.state.lastUser.data.apellido} </span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                        <span className='lastUserDataItemTitle'>Email:</span>
                        <span className='lastUserDataItemValue'>{this.state.lastUser.data.email} </span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                        <span className='lastUserDataItemTitle'>Avatar:</span>
                        <span className='lastUserDataItemValue'><img className='lastUserAvatarImg' src= {this.state.avatar} alt=""/></span>
                        </div>                        
                    </div>
                </div>
                </div>
        </div>
        )
        
    }
}
