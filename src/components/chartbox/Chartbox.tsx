
import Linechart from "../rechartsdata/Linechart";
import "./chartbox.scss";

type Props = {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: object[]
}


function Chartbox(prop:Props) {



  const { color, icon, title, number, 
    dataKey, percentage, chartData
  } = prop



  return (
    <div className="chartbox">

        <div className="left">
          <div className="title">
            <img src={icon} alt="" />
            <span>{title}</span>
          </div>
          <h2>{number}</h2>
          <p style={{color: color}}>View all</p>
        </div>

        <div className="right"> <Linechart dataKey={dataKey} chartData={chartData} color={color} />
  
          <div className="gains">
            <h3 className="percentage" style={{color: percentage<0 ? "tomato" : "limegreen"}}>{percentage +"%"}</h3>
            <p>this month</p>
          </div>
        </div>

      
    </div>
  )
}

export default Chartbox
