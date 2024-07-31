import Barchart from "../rechartsdata/Barchart"
import "./barchartbox.scss"

interface Props {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

function BarchartBox(props:Props) {

    const {color, title, dataKey, chartData} = props
  return (
    <div className="barchartbox">
        <h1>{title}</h1>
        <div className="chart">
          <Barchart color={color} dataKey={dataKey} chartData={chartData}  />

    </div>
      
    </div>
  )
}

export default BarchartBox
