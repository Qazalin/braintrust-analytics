import { Box, Text, useColorMode } from '@chakra-ui/react'

export const LineTooltip = ({ active, value, payload }) => {
  const { colorMode } = useColorMode()
  if (active) {
    let dollars = payload[0].payload.value
    let year = payload[0].payload.date

    const bg = { light: 'white', dark: 'black' }
    return (
      <Box
        bg={bg[colorMode]}
        p="20px"
        borderRadius={'20px'}
        boxShadow="0px 0px 50px 5px rgba(86, 171, 145, 0.2)"
      >
        <Text fontWeight={'bold'}> ${dollars.toLocaleString()}</Text>
        <Text>{year}</Text>
      </Box>
    )
  }
  return null
}
