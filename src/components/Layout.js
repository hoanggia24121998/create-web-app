import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Container, Box, HStack, Heading, Spacer } from '@chakra-ui/react'
import Logo from '../assets/logo.png'

function Layout() {
    return (
        <Container maxWidth='100%' p='0' >
            <Container maxWidth='100%' h='64px' bg='blue.100' p='0'>
                {/* Navbar */}
                <Container maxW='6xl' h='64px' p='0'>
                    <HStack h='100%'>
                        <Link to='/'>
                            <img src={Logo} style={{ height: '42px' }} />
                            {/* <Heading as='h2' size='lg'>Toshiba Blog</Heading> */}
                        </Link>
                        <Spacer />
                        <nav>
                            <HStack spacing='50px'>
                                <Link to='/about'>
                                    <Heading as='h5' size='sm'>
                                        About Toshiba
                                    </Heading>
                                </Link>
                                <Link to='/posts'>
                                    <Heading as='h5' size='sm'>
                                        List posts
                                    </Heading>
                                </Link>
                                <Link to='/contact'>
                                    <Heading as='h5' size='sm'>
                                        Contact Us
                                    </Heading>
                                </Link>
                            </HStack>
                        </nav>
                    </HStack>
                </Container>
            </Container>

            {/* Main Body */}
            <Container maxW='6xl' px='0' py='30px'>
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </Container >
    )
}

export default Layout