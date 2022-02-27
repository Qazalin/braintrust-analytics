import { Box } from '@chakra-ui/react'
import { ClientView } from './ClientView'

//  A wrapper component for the two views of top clients: Value and Transactions
export const TopClients = ({ clientData, type }) => {
  // The max value is by default the first one
  // This has been taken care of in the back-end code
  const maxValue =
    type == 'transactions'
      ? clientData[0].transactions[0]
      : clientData[0].value[0]

  return (
    <Box mb="10%" w="100%" h="40%">
      {clientData.map((c, index) => {
        const value = type == 'transactions' ? c.transactions[0] : c.value[0]
        const percentage = (value / maxValue) * 100
        let color
        if (percentage > 50) {
          color = 'green'
        } else if (percentage == 50) {
          color = 'orange'
        } else {
          color = 'red'
        }
        return (
          <ClientView
            key={index}
            type={type}
            client={c}
            progressBarValue={percentage}
            progressBarColor={color}
          />
        )
      })}
    </Box>
  )
}
