import React, {useEffect, useState} from 'react'
import DataTable from '../dataTable/DataTable'
import './categoriesTable.css'

const columns = [
    { field: 'id' , headerName: 'ID' , width: 300 , columnTypes: 'object'},
    { field: 'email', headerName: 'Descripcion', width: 200 },
    { field: 'username', headerName: 'Cantidad de productos asociados', width: 250, columnTypes : 'object'},
    
];

const CategoriesTable = () => {
    const [data, setData] = useState([]);

    useEffect (() => {
        fetch ('https:jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setData(json);
            }   
            )
    }, [])
    

    return (
        <div style={{ height: 400,flex: 4 }}>
    <DataTable 
        rows={data}
        columns={columns}
    />
    </div>

  )
}

export default CategoriesTable