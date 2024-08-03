import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from "@mui/x-data-grid"
import "./datatable.scss"
import { Link } from "react-router-dom"

type Props = {
  columns: GridColDef[],
  rows:object[]
  slug: string
}



function Datatable(props:Props) {

  const { columns, rows, slug} = props

  const handleDelete = (id:number) => {
    return console.log(id + " has been deleted")
  }

  const actionCol: GridColDef = 
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params:GridRenderCellParams) => {
        return (
          <div className="action">
            <Link to={`/${slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>

            <div className="delete">
              <img  onClick={()=>handleDelete(params.row.id)} src="/delete.svg" alt="" />
            </div>
          </div>
        )
      }
    }

  return (
    <div className="datatable">
        <DataGrid
        className="datagrid"
        rows={rows}
        columns={[...columns, actionCol] }
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
