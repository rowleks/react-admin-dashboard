import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    dataKey: string;
    chartData: object[]
}



function Barchart(props:Props) {
    const {color, dataKey, chartData} = props

  return (

  <>

  <ResponsiveContainer width="99%" height="100%">
    <BarChart data={chartData}>
        <Tooltip contentStyle={{ background: "#2A3447" }} labelStyle={{display: "none"}} cursor={{fill: "none"}}
        />
        <Bar dataKey={dataKey} fill={color}/>
    </BarChart>

  </ResponsiveContainer>



  </>
  )
}

export default Barchart
