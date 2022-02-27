import { Box, Text, useColorMode } from '@chakra-ui/react'

export const PieTooltip = ({ payload, key, active }) => {
  const { colorMode } = useColorMode()
  const colors = { dark: 'gray.800', light: 'gray.50' }

  if (active) {
    const category = payload[0].payload.category
    const frequency = payload[0].payload.frequency

    return (
      <Box bg={colors[colorMode]} p="2px" borderRadius={'md'}>
        <Text variant="subtitle">{`${category} : ${frequency}`}</Text>
      </Box>
    )
  }

  return null
}
