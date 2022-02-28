import {
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    Button,
    useDisclosure,
    Link,
} from '@chakra-ui/react'
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons'

export const Options = ({ options, title }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
                as={Button}
                rightIcon={
                    isOpen ? (
                        <CloseIcon fontSize={'10px'} />
                    ) : (
                        <ChevronDownIcon fontSize={'20px'} />
                    )
                }
                onClick={onOpen}
            >
                {title}
            </MenuButton>
            <MenuList>
                {options.map((option, idx) => (
                    <Link key={idx} href={option.link} target="_blank">
                        <MenuItem textTransform={'capitalize'}>
                            {option.title}
                        </MenuItem>
                    </Link>
                ))}
            </MenuList>
        </Menu>
    )
}
