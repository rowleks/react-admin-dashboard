import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./datatable.scss"


function Datatable({columns}: {columns :GridColDef[]}) {

      const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
  return (
    <div className="datatable">
        <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        slots={{toolbar: GridToolbar}}
        slotProps={{
          toolbar: {
            showQuickFilter: true 
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        disableColumnResize

      />
      
    </div>
  )
}

export default Datatable
