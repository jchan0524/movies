import { Card } from "react-bootstrap";
import {
  AreaChart,
  Legend,
  linearGradient,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AddChart(props) {
  return (
    <div  className= "d-flex">
    <Card className="pt-3">
        <p className="p-2 ml-3 fw-bold">Risk Chart</p>
    <AreaChart 
    
      width={650}
      height={300}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
       
      <defs>
        <linearGradient id="colorDefault" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4169e1" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#4169e1" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f08080" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#f08080" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis hide={true} axisLine={false} tickLine={false} dataKey="name" />
      <YAxis axisLine={false} tickLine={false} />
      <CartesianGrid vertical={false} />
      <Legend       
        verticalAlign="bottom"
        // align="left"
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        height={36}
      />
      <Tooltip />
      <Area
        name="Default Risk"
        type="monotone"
        dataKey="uv"
        stroke="#4169e1"
        fillOpacity={1}
        fill="url(#colorDefault)"
        legendType="square"
      />
      <Area
        name="Production Risk"
        type="monotone"
        dataKey="pv"
        stroke="#f08080"
        fillOpacity={1}
        fill="url(#colorPv)"
        legendType="square"
      />
      
    </AreaChart>
    </Card>
    </div>
  );
}
