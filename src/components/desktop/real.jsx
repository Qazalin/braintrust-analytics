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
export const Real = ({ heading, desc, chart }) => {
  const { colorMode } = useColorMode()

  // Colors
  const bgColor = { light: '#FFFFFF', dark: 'black' }
  return (
    <Box bg={bgColor[colorMode]} borderRadius={'20px'} height="100%" w="50%">
      <Flex mt={['0', '2%']} pl="30px" pt={['20px', '0px']}>
        <Text variant="heading">{heading}</Text>
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
      {chart}
    </Box>
  )
}
