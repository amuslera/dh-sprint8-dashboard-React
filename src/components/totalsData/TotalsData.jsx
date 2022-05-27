import React from 'react'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import './totalsData.css'

export default class totalsDataInfo extends React.Component {
  
    state = {
        loading: true,
        usersCount: 0,
        productsCount: 0,
        categoriesCount: 0
    
    }

    async componentDidMount () {
        const url1 = 'http://localhost:3050/api/usersCount';
        const response1 = await fetch(url1);
        const totals1 = await response1.json();
        this.setState({
            loading: false,
            usersCount: totals1
        })
        const url2 = 'http://localhost:3050/api/productsCount';
        const response2 = await fetch(url2);
        const totals2 = await response2.json();
        this.setState({
            loading: false,
            productsCount: totals2
        })
        const url3 = 'http://localhost:3050/api/categorias';
        const response3 = await fetch(url3);
        const totals3 = await response3.json();
        this.setState({
            loading: false,
            categoriesCount: totals3
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
        <div className='totalsData'>
            <div className='totalsDataMainContainer'>
                <div className='totalsDataItemsTitle'>
                    <span>Ultimas 24 horas</span>
                </div>
                <div className='totalsDataSubContainer'>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total Usuarios</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.usersCount.data}</span>
                            <span className='totalsDataItemGrowth'>+25% <ArrowUpward className='totalsDataIcon' /></span>
                        </div>
                    </div>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total Productos</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.productsCount.data}</span>
                            <span className='totalsDataItemGrowth'>-12% <ArrowDownward className='totalsDataIcon negative' /></span>
                        </div>
                    </div>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total Categorías</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.categoriesCount.count}</span>
                            <span className='totalsDataItemGrowth'>+31% <ArrowUpward className='totalsDataIcon' /></span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}
