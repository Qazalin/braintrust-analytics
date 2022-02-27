/* Area gradient chart showing total fees payed by Braintrust clients */
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { LineTooltip } from '../../tooltips/LineTooltip'
export const TotalFees = ({ data }) => {
  return (
    <ResponsiveContainer width={'100%'} height="80%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 30, left: 30, bottom: 20 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="15%" stopColor="#99e2b4" stopOpacity={0.8} />
            <stop offset="85%" stopColor="#171720" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tickLine={false} />
        <CartesianGrid vertical={false} opacity={0.15} />
        <Tooltip
          content={<LineTooltip />}
          cursor={{ stroke: '#88d4ab', strokeWidth: 1.5 }}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#99e2b4"
          strokeWidth={'2px'}
          fillOpacity={0.2}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
