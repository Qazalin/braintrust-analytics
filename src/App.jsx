import {
  Link as ChakraLink,
  useMediaQuery,
  ChakraProvider,
} from '@chakra-ui/react'
import { DesktopLayout } from './components/desktop/Layout'
import { MobileLayout } from './components/mobile/Layout'

function App() {
  const [isMobile] = useMediaQuery('(max-width: 738px)')
  return (
    <ChakraProvider>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </ChakraProvider>
  )
}

export default App
