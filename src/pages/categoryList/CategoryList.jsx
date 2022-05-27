import './categoryList.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nombre', width: 130 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon@email.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei',  email: 'cersei@email.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime',  email: 'jaimie@email.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya',  email: 'arya@email.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',  email: 'daenerys@email.com' },
  { id: 6, lastName: 'Melisandre', firstName: null,  email: 'melisandre@email.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara',  email: 'cliff@email.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini',  email: 'frances@email.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey',  email: 'roxie@email.com' },
];

export default function categoryist() {
  return (
    <div style={{ height: 400,flex: 4 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
