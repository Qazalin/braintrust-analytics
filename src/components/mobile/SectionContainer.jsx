import { HStack, useColorMode, VStack } from '@chakra-ui/react'

export const SectionContainer = ({ children }) => {
  const { colorMode } = useColorMode()
  const bgGradinet = {
    light: 'linear-gradient(to-r, #FCD9DF 20%, #CFE0F8 80%)',
    dark: 'linear-gradient(to-r, rgba(55,53,51,1) 15%, rgba(6,47,63,1) 69%, rgba(41,50,38,1) 93%)',
  }

  return (
    <VStack
      width={'90%'}
      h="100%"
      borderRadius={'20'}
      p="20px"
      bgGradient={bgGradinet[colorMode]}
      mt="40px"
    >
      {children}
    </VStack>
  )
}
