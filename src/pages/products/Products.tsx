import { GridColDef } from "@mui/x-data-grid";
import Datatable from "../../components/datatable/Datatable"
import "./products.scss";
import { products } from "../../data";
import AddData from "../../components/adddata/AddData";
import { useState } from "react";

function Products() {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "img",
      headerName: "Image",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 100,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 120,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 120,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 100,
      type: "boolean",
    },
  ];

  

  const [ open, setOpen ] = useState(false)
  const openModal = () => setOpen(true)
  return (
    <div className='products'>
      
      <div className="header">
      <h1>User</h1>
      <button onClick={openModal}>Add New User</button>
      </div>

        <Datatable columns={columns} rows={products} slug="user" />

        {open && <AddData slug="Products" columns={columns} setOpen={setOpen} />}
      
    </div>
  )
}

export default Products
