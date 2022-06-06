import React from 'react'
import './lastProductData.css'

export default class lastProductData extends React.Component {
  
    state = {
        loading: true,
        lastProduct: {},
        imagenProducto: ""
    }

    async componentDidMount () {
        const url2 = 'https://dh-g9-clessidra.herokuapp.com/api/lastProduct';
        const response2 = await fetch(url2);
        const totals2 = await response2.json();
        this.setState({
            loading: false,
            lastProduct: totals2,
            imagenProducto: "https://dh-g9-clessidra.herokuapp.com/images/products/" + totals2.data.imagenes[0].nombreArchivo
    })                      
        if(!this.state.lastProduct.data.imagenes[0].nombreArchivo){
            return this.setState(
                {imagenProducto: "https://dh-g9-clessidra.herokuapp.com/images/noImage.png"}
            
            )
        }
        
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        if (!this.state.lastProduct) {
            return <div>No hay productos</div>
        }

        return (
            <div className='lastProductDataMainContainer'>
                <div className='lastProductDataItemsTitle'>
                    <h1>Ultimo producto registrado en BD</h1>
                </div>
                <div className='lastProductDataSubContainer'>
                    <div className='lastProductDataItem'>
                        <div className='lastProductDataItemContainer'>
                            <span className='lastProductDataItemTitle'>ID:</span>
                            <span className='lastProductDataItemValue'>{this.state.lastProduct.data.id}</span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                            <span className='lastProductDataItemTitle'>Nombre de producto:</span>
                            <span className='lastProductDataItemValue'>{this.state.lastProduct.data.nombre} {this.state.lastProduct.data.apellido} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Descripción:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.data.descripcion} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Precio:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.data.precio} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Fecha de creación:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.data.fecha_creacion} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Descripción:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.data.descripcion} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Imagen principal:</span>
                        <span className='lastProductDataItemValue'><img src= {this.state.imagenProducto} alt=""/></span>
                        </div>                        
                    </div>
                </div>
                </div>
        )
        
    }
}