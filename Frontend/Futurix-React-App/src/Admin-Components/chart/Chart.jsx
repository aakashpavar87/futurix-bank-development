/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getPreviousFiveTransaction } from "../../apis/AdminApi";

const Chart = ({ aspect, title }) => {
  const [showChart, setShowChart] = useState(true);
  const [data, setData] = useState([
    { name: "26/04", Total: 0 },
    { name: "27/04", Total: 0 },
    { name: "28/04", Total: 0 },
    { name: "29/04", Total: 0 },
    { name: "30/04", Total: 0 },
    { name: "01/05", Total: 0 },
  ]);
  const [number, setNumber] = useState(0);
  const [lastFiveDays, setLastFiveDays] = useState([]);
  const refreshComponent = () => {
    setShowChart((prev) => !prev);
    setNumber((prev) => prev + 1);
  };
  useEffect(() => {
    async function getData() {
      const lastFiveDaysRes = await getPreviousFiveTransaction();
      setLastFiveDays(lastFiveDaysRes.data);

      setData(
        lastFiveDays.map((day) => {
          return {
            name: day.date,
            Total: day.amount,
          };
        })
      );
    }
    getData();
  }, [number]);

  return (
    <div className="chart">
      <div className="title">
        {title}
        {showChart && (
          <button className="mx-3 bg-white" onClick={refreshComponent}>
            Show Chart
          </button>
        )}
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
