import React from 'react'


export default class allCategories extends React.Component {
  
    state = {
        loading: true,
        data: {},
        
    }

    async componentDidMount () {
        const url1 = 'http://localhost:3050/api/categorias';
        const response1 = await fetch(url1);
        const totals1 = await response1.json();
        const categorias = totals1.map(categoria => {
                return {
                    id: categoria.id,
                    description: categoria.descripcion,
                }
            })

        this.setState({
            loading: false,
            data: totals1,
            categorias: categorias,
        })
    
    }




    render() {
        


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
                        <img className='lastUserAvatarImg' src= {"http://localhost:3050/images/profileImages/" + this.state.lastUser.data.avatar} alt=""/>
                        </div>                        
                    </div>
                </div>
                </div>
        </div>
        )
        
    }
}
