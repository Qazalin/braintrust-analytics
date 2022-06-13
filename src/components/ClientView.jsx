import { Text, Avatar, Box, Flex, Progress } from "@chakra-ui/react"

export const ClientView = ({
    type,
    client,
    progressBarValue,
    progressBarColor,
}) => {
    return (
        <Box key={client.name}>
            <Flex my="5%" justifyContent={"space-between"} mx="10%">
                <Flex>
                    <Avatar src={client.icon[0]} size="md" />
                    <Text mt="10px" ml="15px">
                        {client.name.split("(")[0]}
                    </Text>
                </Flex>
                <Text>
                    {type === "transactions"
                        ? client.transactions[0]
                        : `$${client.value[0].toLocaleString()}`}
                </Text>
            </Flex>
            <Progress
                colorScheme={progressBarColor}
                size="xs"
                value={progressBarValue}
                mx="40px"
            />
        </Box>
    )
}
