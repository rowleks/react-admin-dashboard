import { GridColDef } from "@mui/x-data-grid"
import "./add-data.scss"

type Props = {
  columns: GridColDef[],
  slug: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function AddData(props:Props) {
  const {columns, slug, setOpen } = props
  const closeModal = () => setOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={closeModal}>X</span>
        <h1>Add New {slug}</h1>
        <form action="" onSubmit={handleSubmit}>{
          columns.filter((item) => (item.field !== "id" && item.field !== "img")).map((column) => (<div className="item">
            <label>{column.headerName}</label>
            <input type={column.type} placeholder={column.field} />

          </div>))
          }

          <button>Send</button>

        </form>

      </div>
      
    </div>
  )
}

export default AddData
