import React, {useEffect, useState} from 'react'
import DataTable from '../dataTable/DataTable'
import './categoriesTable.css'

const columns = [
    { field: 'id' , headerName: 'ID' , width: 30 },
    { field: 'email', headerName: 'email', width: 200 },
    { field: 'username', headerName: 'Nombre de usuario', width: 200},
    { field: 'address', headerName: 'Direccion (NO ANDA)', width: 250},
    { field: '[{address.city}]' , headerName: 'Ciudad (NO ANDA)', width: 250},
    { field: 'address.city', headerName: 'Ciudad (NO ANDA)', width: 250, },
    { field: 'users.address.city', headerName: 'Ciudad (NO ANDA)', width: 250, },
    { field: ['users.address.city'], headerName: 'Ciudad (NO ANDA)', width: 250, },
    
    
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