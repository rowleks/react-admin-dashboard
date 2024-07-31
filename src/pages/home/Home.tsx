import Chartbox from "../../components/chartbox/Chartbox"
import Topdeals from "../../components/topdeals/Topdeals"
import "./home.scss"
import { chartBoxUser, chartBoxConversion, chartBoxProduct, chartBoxRevenue } from "../../data"
import BarchartBox from "../../components/barchartbox/BarchartBox"
import { barChartBoxVisit, barChartBoxRevenue } from "../../data"
import PiechartBox from "../../components/piechartbox/PiechartBox"
import BigchartBox from "../../components/bigchartbox/BigchartBox"

function Home() {

  return (
    <div className="home">

      <div className="box box1">
        <Topdeals />
      </div>
      <div className="box box2"><Chartbox {...chartBoxUser} /></div>
      <div className="box box3"><Chartbox {...chartBoxRevenue} /></div>
      <div className="box box4"><PiechartBox /></div>
      <div className="box box5"><Chartbox {...chartBoxProduct}/></div>
      <div className="box box6"><Chartbox {...chartBoxConversion}/></div>
      <div className="box box7"><BigchartBox /></div>
      <div className="box box8"><BarchartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarchartBox {...barChartBoxRevenue}/></div>


    </div>
  )
}

export default Home
