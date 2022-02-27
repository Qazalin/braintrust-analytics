// Bar chart of top talents
import { useMediaQuery } from '@chakra-ui/react'
import { Bar, BarChart, YAxis, CartesianGrid, Tooltip } from 'recharts'

import { TalentToolTip } from '../../tooltips/TalentToolTip'

export const TalentChart = ({ data, dataKey, range, isAll = false }) => {
  // Due to the overflow of the chart for tablet screens, use a media query
  const [isTablet] = useMediaQuery('(max-width: 770px)')
  return (
    <BarChart
      width={isTablet ? 240 : 390}
      height={isTablet ? 240 : 300}
      data={isAll ? data : data.slice(0, range)}
      style={{
        marginTop: 30,
        marginBottom: 20,
      }}
    >
      <Bar dataKey={dataKey} fill="#6DDEB2" radius={10} />
      <CartesianGrid vertical={false} opacity={0.15} />
      <YAxis />
      <Tooltip
        content={<TalentToolTip />}
        cursor={{ fill: '#155961', fillOpacity: '0.3', radius: 10 }}
      />
    </BarChart>
  )
}
