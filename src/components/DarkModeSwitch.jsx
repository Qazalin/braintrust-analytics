import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = ({ isMobile }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position={isMobile ? 'initial' : 'fixed'}
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
      mt="20px"
    />
  )
}
