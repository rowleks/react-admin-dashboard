import { GridColDef } from "@mui/x-data-grid";
import Datatable from "../../components/datatable/Datatable"
import "./users.scss"
import { userRows } from "../../data";
import AddData from "../../components/adddata/AddData";
import { useState } from "react";

function Users() {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (param) => {
        return <img src={param.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 100,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];

  const [ open, setOpen ] = useState(false)
  const openModal = () => setOpen(true)
  return (
    <div className='users'>
      
      <div className="header">
      <h1>User</h1>
      <button onClick={openModal}>Add New User</button>
      </div>

        <Datatable columns={columns} rows={userRows} slug="user" />

        {open && <AddData slug="User" columns={columns} setOpen={setOpen} />}
      
    </div>
  )
}

export default Users
