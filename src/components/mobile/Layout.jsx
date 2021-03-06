import { Box, Text, useColorMode, VStack } from '@chakra-ui/react'
import { ChartContainer } from './ChartContainer'
import { Navbar } from '../Navbar'
import { SectionContainer } from './SectionContainer'

// First Chart
import { TotalFees } from './charts/TotalFees'
import { totalFees } from '../../data/totalFees'

// Second Chart
import { ClientChart } from '../desktop/charts/ClientChart'
import clientTransactionData from '../../data/topClientsTransactions.json'
import clientValueData from '../../data/topClientsValue.json'

// Third Chart
import { TopCategories } from './charts/TopCategories'
import topCategoriesData from '../../data/categoryFrequency.json'

// Forth Chart
import { TalentView } from '../TalentView'
import talentViewData from '../../data/jobFees.json'

const charts = ['fees', 'clients', 'categories', 'talent']
export const MobileLayout = ({ client, talent }) => {
  const { colorMode } = useColorMode()
  const bgGradient = {
    light: 'linear-gradient(to-r, #FCD9DF 20%, #CFE0F8 80%)',
    dark: 'linear-gradient(to-r, rgba(55,53,51,1) 15%, rgba(6,47,63,1) 69%, rgba(41,50,38,1) 93%)',
  }
  return (
    <Box width={'100vw'} h="100vh">
      <Box width={'100%'} h="150px">
        <Navbar />
      </Box>
      <Box width={'100%'} height="150%">
        <VStack spacing={2} h={'100%'}>
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
              desc={
                'The top clients in USD amount of fees or transaction count'
              }
              chart={
                <ClientChart
                  topClientsTransactions={clientTransactionData}
                  topClientsValue={clientValueData}
                />
              }
            />
          </SectionContainer>
          <SectionContainer>
            <ChartContainer
              heading={'Top categories'}
              desc={
                'The top job categories in Braintrust that have generated fees in $BTRST'
              }
              chart={<TopCategories data={topCategoriesData} />}
              boxProps={{ height: '80%', pb: '20%' }}
            />
            <ChartContainer
              heading={'Top Talent'}
              desc={
                'The top individuals that have created the most flow in $BTRST fees (in $USD)'
              }
              chart={<TalentView data={talentViewData} isMobile={true} />}
            />
          </SectionContainer>
        </VStack>
      </Box>
    </Box>
  )
}
