import {
    Link as ChakraLink,
    useMediaQuery,
    Box,
    ChakraProvider,
    Flex,
    Button,
    Text,
    Center,
    HStack,
    Link,
} from '@chakra-ui/react'
import { DesktopLayout } from './components/desktop/Layout'
import { MobileLayout } from './components/mobile/Layout'
import theme from './theme'
import '@fontsource/roboto'

function App() {
    const [isMobile] = useMediaQuery('(max-width: 738px)')
    return (
        <ChakraProvider theme={theme}>
            <Flex
                px="20px"
                justify={'center'}
                py="10px"
                bgGradient={
                    'linear(to-r, rgb(216, 92, 121), rgb(221, 126, 118), rgb(224, 157, 115), rgb(226, 187, 110), rgb(226, 216, 103))'
                }
                color="white"
            >
                <Text fontWeight={'bold'} mr="10px" mt="4px">
                    Disclaimer: This website is a community effort
                </Text>
                <Link href="https://www.usebraintrust.com/" target="_blank">
                    <Button
                        size="sm"
                        bg="rgba(0,0, 0, 0.2)"
                        sx={{
                            ':hover': {
                                bg: 'rgba(0,0, 0, 0.2)',
                            },
                        }}
                    >
                        View The Official Website Here
                    </Button>
                </Link>
            </Flex>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </ChakraProvider>
    )
}

export default App
