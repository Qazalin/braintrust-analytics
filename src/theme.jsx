import { extendTheme } from '@chakra-ui/react'

const fonts = { body: 'Roboto' }

const theme = extendTheme({
    body: {
        fontFamily: 'Roboto',
    },
    colors: {
        black: '#16161D',
    },
    fonts,
    components: {
        Text: {
            variants: {
                heading: {
                    fontSize: '1.5rem',
                    fontWeight: 'semibold',
                    textTransform: 'capitalize',
                },
            },
        },
        Button: {
            baseStyle: {
                ':focus': {
                    outline: 'none',
                    boxShadow: 'none',
                },
            },
            variants: {
                option: {
                    ':focus': {
                        outlineColor: 'green.500',
                    },
                },
            },
        },
        IconButton: {
            baseStyle: {
                ':focus': {
                    outline: 'none',
                    boxShadow: 'none',
                },
            },
        },
    },
})

export default theme
