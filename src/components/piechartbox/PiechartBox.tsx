import Piechart from "../rechartsdata/Piechart";
import "./piechartbox.scss";

function PiechartBox() {
    const data = [
        { name: "Mobile", value: 400, color: "#0088FE" },
        { name: "Desktop", value: 300, color: "#00C49F" },
        { name: "Laptop", value: 300, color: "#FFBB28" },
        { name: "Tablet", value: 200, color: "#FF8042" },
      ];


  return (
    <div className="piechart">
        <h1>Leads by Source</h1>

        <div className="chart">
            <Piechart data={data}/>
             
        </div>

        <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

        
      
    </div>
  )
}

export default PiechartBox
