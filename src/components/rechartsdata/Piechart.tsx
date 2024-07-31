
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

type DataItem = {
  name: string;
  value: number;
  color: string;
};

interface PiechartProps {
  data: DataItem[];
}

function Piechart({ data }:PiechartProps) {
      
  return (
    <>
    <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#DDD", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      
    </>
  )
}

export default Piechart
