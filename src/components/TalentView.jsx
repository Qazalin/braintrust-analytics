import {
    Box,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Button,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useState } from "react"

import { TalentChart as MobileChart } from "./mobile/charts/TopTalent"
import { TalentChart as DesktopChart } from "./desktop/charts/TopTalent"

export const TalentView = ({ data, isMobile }) => {
    const [range, setRange] = useState("Top 5")

    function handleChangeRange(selected) {
        setRange(selected)
    }

    return (
        <Box pl={30} pos="relative">
            <Box mr="20px" pos="absolute" top={-10} right={0}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {range}
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            textTransform={"capitalize"}
                            onClick={() => handleChangeRange("Top 5")}
                        >
                            Top 5
                        </MenuItem>
                        <MenuItem
                            textTransform={"capitalize"}
                            onClick={() => handleChangeRange("Top 10")}
                        >
                            Top 10
                        </MenuItem>
                        <MenuItem
                            textTransform={"capitalize"}
                            onClick={() => handleChangeRange("Top 20")}
                        >
                            Top 20
                        </MenuItem>
                        <MenuItem
                            textTransform={"capitalize"}
                            onClick={() => handleChangeRange("All")}
                        >
                            All
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box
                pt="4px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {isMobile ? (
                    <MobileChart
                        data={data}
                        dataKey="fees"
                        range={parseInt(range.substring(3, range.length))}
                        isAll={range === "All"}
                    />
                ) : (
                    <DesktopChart
                        data={data}
                        dataKey="fees"
                        range={parseInt(range.substring(3, range.length))}
                        isAll={range === "All"}
                    />
                )}
            </Box>
        </Box>
    )
}
