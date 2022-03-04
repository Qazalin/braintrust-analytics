import { Flex, Box, Avatar, Text, VStack } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Options } from './Options'

export const Navbar = () => {
    return (
        <Box width={'100%'} height="100%">
            <Text fontSize={'1.5rem'} fontWeight={'bold'} ml="20px" mt="15px">
                Braintrust Fee Converter | Overview
            </Text>
            <Flex justifyContent="space-between" px="30px">
                <Box mt="15px">
                    <Options
                        title="options"
                        options={[
                            {
                                title: 'Braintrust Official Website',
                                link: 'https://www.usebraintrust.com/',
                            },
                            {
                                title: 'View Source',
                                link: 'https://github.com/Qazalin/braintrust-analytics',
                            },
                            {
                                title: 'Fee Converter Contract',
                                link: 'https://etherscan.io/address/0x438e6416fe63863c434e4d6ee0c39d8f96880186#code',
                            },
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
