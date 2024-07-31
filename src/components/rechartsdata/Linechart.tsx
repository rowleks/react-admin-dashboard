import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
  color: string;
  dataKey: string;
  chartData: object[]
}


function Linechart(props:Props) {  
  const {color, dataKey, chartData} = props


  return (
    <>
        <ResponsiveContainer width="99%" height="100%">
      <LineChart width={300} height={100} data={chartData}>
        <Tooltip 
        contentStyle={{ background: "transparent", border: "none"}}
        labelStyle={{display: "none"}}
        position={{ x: 0, y: 50}}
        />
        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
      
    </>
  )
}

export default Linechart
