import { Box, Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/react'

export const TalentToolTip = ({ active, payload }) => {
  const { colorMode } = useColorMode()
  if (active) {
    const bg = { light: 'white', dark: 'black' }

    const title = payload[0].payload.title
    const fees = payload[0].payload.fees.toLocaleString()

    return (
      <Box
        bg={bg[colorMode]}
        p="20px"
        borderRadius={'20px'}
        boxShadow="0px 0px 50px 5px rgba(146, 202, 21, 0.2)"
      >
        <Text fontWeight={'bold'}> {title}</Text>
        <Text>${fees}</Text>
      </Box>
    )
  }
  return null
}
