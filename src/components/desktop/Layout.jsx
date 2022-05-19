import { Box, Text, useColorMode, VStack } from "@chakra-ui/react";

// Layout
import { ChartContainer } from "./ChartContainer";
import { Navbar } from "../Navbar";
import { SectionContainer } from "./SectionContainer";

// First Chart
import { TotalFees } from "./charts/TotalFees";
import { totalFees } from "../../data/totalFees";

// Second Chart
import { ClientChart } from "./charts/ClientChart";
import clientTransactionData from "../../data/topClientsTransactions.json";
import clientValueData from "../../data/topClientsValue.json";

// Third Chart
import { TopCategories } from "./charts/TopCategories";
import topCategoriesData from "../../data/categoryFrequency.json";

// Forth Chart
import { TalentView } from "../TalentView";
import talentViewData from "../../data/jobFees.json";

export const DesktopLayout = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "#FFFFFF", dark: "transparent" };
  const color = { light: "black", dark: "white" };
  const bgGradinet = {
    light: "linear-gradient(to-r, #FCD9DF 20%, #CFE0F8 80%)",
    dark: "linear-gradient(to-r, rgba(55,53,51,1) 15%, rgba(6,47,63,1) 69%, rgba(41,50,38,1) 93%)",
  };
  const mainBgColor = { light: "#F7F8FD", dark: "#292A33" };
  return (
    <Box height="100vh" width="100vw" p="10px">
      <Box
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        height={"100px"}
        width="100%"
      >
        <Navbar />
      </Box>
      <VStack spacing={2} width={"100%"} height="100%">
        <SectionContainer id="client">
          <ChartContainer
            heading={"total fees"}
            desc={
              "The total fees payed by Braintrust clients through time in $USD"
            }
            chart={<TotalFees data={totalFees} />}
          />
          <ChartContainer
            heading={"Top Clients"}
            desc={"The top clients in USD amount of fees or transaction count"}
            chart={
              <ClientChart
                topClientsTransactions={clientTransactionData}
                topClientsValue={clientValueData}
              />
            }
          />
        </SectionContainer>
        <SectionContainer id="talent">
          <ChartContainer
            heading={"Top categories"}
            desc={
              "The top job categories in Braintrust that have generated fees in $BTRST"
            }
            chart={<TopCategories data={topCategoriesData} />}
          />
          <ChartContainer
            heading={"Top Talent"}
            desc={
              "The top individuals that have created the most flow in $BTRST fees (in $USD)"
            }
            chart={<TalentView data={talentViewData} />}
          />
        </SectionContainer>
        <Text align={"center"} mt="12px" fontFamily={"body"}>
          Built with ❤️ by qazal
        </Text>
      </VStack>
    </Box>
  );
};
