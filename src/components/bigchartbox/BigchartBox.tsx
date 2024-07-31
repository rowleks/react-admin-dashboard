
import Areachart from "../rechartsdata/Areachart"
import "./bigchartbox.scss"

function BigchartBox() {

  
  return (
    <div className="bigchart">
        <h1>Revenue Analytics</h1>
        <div className="chart">
          <Areachart />
            
        </div>
      
    </div>
  )
}

export default BigchartBox
