import React from 'react';
import { Box, Flex, HStack,  IconButton, useDisclosure, Stack } from '@chakra-ui/react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="blue.500" px={4} className="shadow-md">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box fontSize="xl" fontWeight="bold" color="white">
                    Financial Time Machine
                </Box>
                <IconButton
                    size="md"
                    icon={isOpen ? <IoCloseCircleOutline /> : <HiMenuAlt3 />}
                    aria-label="Open Menu"
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    color="white"
                />
                <HStack spacing={16} alignItems="center" display={{ base: 'none', md: 'flex' }}>
                    <Link to="/" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                        Home
                    </Link>
                    <Link to="/register" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                        register
                    </Link>
                    <Link  to={"/login"} color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                       login
                    </Link>
                    
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4}>
                        <Link href="#" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                            Home
                        </Link>
                        <Link href="#" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                            Features
                        </Link>
                        <Link href="#" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                            Pricing
                        </Link>
                        <Link href="#" color="white" _hover={{ textDecoration: 'none', color: 'gray.200' }}>
                            About
                        </Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;