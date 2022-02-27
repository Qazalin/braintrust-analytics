// Bar chart of top talents
import { useMediaQuery } from '@chakra-ui/react'
import { Bar, BarChart, YAxis, CartesianGrid, Tooltip } from 'recharts'

import { TalentToolTip } from '../../tooltips/TalentToolTip'

export const TalentChart = ({ data, dataKey, range, isAll = false }) => {
  // Due to overflow in small mobiles, use a media query
  const [isSmallMobile] = useMediaQuery('(max-width: 330px)')
  return (
    <BarChart
      width={isSmallMobile ? 190 : 240}
      height={250}
      data={isAll ? data : data.slice(0, range)}
      style={{
        marginTop: 30,
        marginBottom: 30,
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
