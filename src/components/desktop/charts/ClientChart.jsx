import { Box, ButtonGroup, Button, Center } from '@chakra-ui/react'
import { useState } from 'react'

import { TopClients } from '../../TopClients'

export const ClientChart = ({ topClientsTransactions, topClientsValue }) => {
    const [mode, setMode] = useState({ type: 'value' })

    function handleValueType() {
        setMode({ type: 'value' })
    }
    function handleTransactionsType() {
        setMode({ type: 'transactions' })
    }
    return (
        <Box h="80%" pb="20px">
            <Center>
                <ButtonGroup variant="outline" spacing="5">
                    <Button
                        onClick={handleValueType}
                        variant="option"
                        outlineColor={
                            mode.type === 'value' ? 'green.500' : 'none'
                        }
                    >
                        Value
                    </Button>
                    <Button onClick={handleTransactionsType} variant="option">
                        Transactions
                    </Button>
                </ButtonGroup>
            </Center>
            <Box>
                <TopClients
                    type={mode.type}
                    clientData={
                        mode.type === 'transactions'
                            ? topClientsTransactions
                            : topClientsValue
                    }
                />
            </Box>
        </Box>
    )
}
