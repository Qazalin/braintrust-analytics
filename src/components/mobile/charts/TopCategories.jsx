// A pie chart of categories distribution
import { Center } from '@chakra-ui/react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { PieTooltip } from '../../tooltips/PieTooltip'

export const TopCategories = ({ data }) => {
  const colors = ['#f0f3bd', '#02c39a', '#05668d', '#66B19C', '#80ffdb']
  return (
    <Center h="100%" w="100%" borderRadius={'inherit'}>
      <PieChart width={300} height={200}>
        <Pie
          paddingAngle={5}
          data={data}
          outerRadius={65}
          innerRadius={45}
          dataKey="frequency"
          nameKey="category"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<PieTooltip />} />
        <Legend />
      </PieChart>
    </Center>
  )
}
