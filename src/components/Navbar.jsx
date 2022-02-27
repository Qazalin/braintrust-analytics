import { Flex, Box, Avatar, Text, VStack } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Options } from './Options'

export const Navbar = () => {
  return (
    <Box width={'100%'} height="100%">
      <Text fontSize={'1.5rem'} fontWeight={'bold'} ml="20px" mt="15px">
        Braintrust Fee Convertor | Overview
      </Text>
      <Flex justifyContent="space-between" px="30px">
        <Box mt="15px">
          <Options
            title="options"
            options={[
              'view source',
              'about creator',
              'Braintrust official website',
            ]}
          />
        </Box>
        <Box>
          <DarkModeSwitch isMobile={true} />
        </Box>
      </Flex>
    </Box>
  )
}
