// A general container for all the charts
import {
  Flex,
  Text,
  Tooltip,
  IconButton,
  Box,
  useColorMode,
} from '@chakra-ui/react'
import { BsInfoCircle } from 'react-icons/bs'
export const ChartContainer = ({ heading, desc, chart }) => {
  const { colorMode } = useColorMode()

  // Colors
  const bgColor = { light: '#FFFFFF', dark: 'black' }
  return (
    <Box bg={bgColor[colorMode]} borderRadius={'20px'} height="100%" w="50%">
      <Flex mt={['0', '2%']} pl="30px" w="100%" h="40px">
        <Text variant="heading" mt="7px">
          {heading}
        </Text>
        <Tooltip
          hasArrow
          label={desc}
          placement="right-start"
          fontFamily={'body'}
          borderRadius="5px"
        >
          <IconButton
            variant={'unstyled'}
            aria-label="info"
            icon={<BsInfoCircle />}
            ml="10px"
            sx={{
              ':focus': {
                border: 'none',
              },
            }}
          />
        </Tooltip>
      </Flex>
      <Box w="100%" h="calc(100% - 40px)" borderRadius={'inherit'}>
        {chart}
      </Box>
    </Box>
  )
}
