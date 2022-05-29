import './categoryList.css'
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Descripcion', width: 130 },
  { field: 'totalproducts', headerName: 'Cantidad de productos asociados', width: 250 },
  
];



const rows = [
  { id: 1, description: 'Mujeres', totalproducts: 10 },
  { id: 2, description: 'Varones', totalproducts: 3 },
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
