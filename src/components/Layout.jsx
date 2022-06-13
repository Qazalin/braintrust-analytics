import { Grid, GridItem } from "@chakra-ui/react"

export const Layout = () => {
    return (
        <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
            w="100%"
            h="100%"
        >
            <GridItem colSpan={2} bg="red"></GridItem>
        </Grid>
    )
}
