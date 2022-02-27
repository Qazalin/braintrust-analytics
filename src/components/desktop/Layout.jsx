import { Box, Text, useColorMode, VStack } from '@chakra-ui/react'

// Layout
import { ChartContainer } from './ChartContainer'
import { Navbar } from '../Navbar'
import { SectionContainer } from './SectionContainer'

// First Chart
import { TotalFees } from './charts/TotalFees'
import { totalFees } from '../../data/totalFees'

// Second Chart
import { ClientChart } from './charts/ClientChart'
import clientTransactionData from '../../data/topClientsTransactions.json'
import clientValueData from '../../data/topClientsValue.json'

export const DesktopLayout = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: '#FFFFFF', dark: 'transparent' }
  const color = { light: 'black', dark: 'white' }
  const bgGradinet = {
    light: 'linear-gradient(to-r, #FCD9DF 20%, #CFE0F8 80%)',
    dark: 'linear-gradient(to-r, rgba(55,53,51,1) 15%, rgba(6,47,63,1) 69%, rgba(41,50,38,1) 93%)',
  }
  const mainBgColor = { light: '#F7F8FD', dark: '#292A33' }
  return (
    <Box height="100vh" width="100vw" p="10px">
      <Box
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        height={'100px'}
        width="100%"
      >
        <Navbar />
      </Box>
      <VStack spacing={2} width={'100%'} height="150%">
        <SectionContainer>
          <ChartContainer
            heading={'total fees'}
            desc={
              'The total fees payed by Braintrust clients through time in $USD'
            }
            chart={<TotalFees data={totalFees} />}
          />
          <ChartContainer
            heading={'Top Clients'}
            desc={'The top clients in USD amount of fees or transaction count'}
            chart={
              <ClientChart
                topClientsTransactions={clientTransactionData}
                topClientsValue={clientValueData}
              />
            }
          />
        </SectionContainer>
        <SectionContainer></SectionContainer>
        <Text align={'center'} mt="12px" fontFamily={'body'}>
          Built with ❤️ by qazal
        </Text>
      </VStack>
    </Box>
  )
}
