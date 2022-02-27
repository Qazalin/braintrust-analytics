// A general container for all the charts
import {
    Flex,
    Text,
    Popover,
    PopoverArrow,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverBody,
    IconButton,
    Box,
    useColorMode,
} from '@chakra-ui/react'
import { BsInfoCircle } from 'react-icons/bs'

export const ChartContainer = ({ heading, desc, chart, boxProps }) => {
    const { colorMode } = useColorMode()

    // Colors
    const bgColor = { light: '#FFFFFF', dark: 'black' }
    return (
        <Box
            bg={bgColor[colorMode]}
            borderRadius={'20'}
            height="50%"
            w="100%"
            {...boxProps}
        >
            <Flex mt={['0', '2%']} pl="30px" pt={['20px', '0px']}>
                <Text variant="heading" mb="10px">
                    {heading}
                </Text>
                <Popover>
                    <PopoverTrigger>
                        <IconButton
                            bg="transparent"
                            aria-label="info"
                            icon={<BsInfoCircle />}
                            ml="10px"
                        />
                    </PopoverTrigger>
                    <PopoverContent
                        label={desc}
                        placement="right-start"
                        fontFamily={'body'}
                        borderRadius="5px"
                        sx={{
                            ':focus': {
                                outline: 'none',
                            },
                        }}
                    >
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody mr="20px">{desc}</PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
            <Box w="100%" h="calc(100% - 10px)" borderRadius={'inherit'}>
                {chart}
            </Box>
        </Box>
    )
}
