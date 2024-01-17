import { NavLink } from "react-router-dom"
import BookingPage from './BookingPage'
import { Box, Button, HStack, Image } from '@chakra-ui/react'
import logo from "../assets/images/Logo .svg"
const Nav = () => {
  return (
    <Box as="nav" display="flex" justifyContent="space-between" py="2" px="5">

      <Image src={logo} alt="logo" />

      <HStack>
        <NavLink to="/"><Button variant="link">Home</Button></NavLink>
        <Button variant="link">About</Button>
        <Button variant="link">Menu</Button>
        <NavLink to="booking"><Button variant="link">Reservations</Button></NavLink>
        <Button variant="link">Order Online</Button>
      </HStack>


    </Box>

  )
}

export default Nav