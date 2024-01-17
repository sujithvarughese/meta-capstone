import { Box, Button, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import bannerImg from "../assets/images/bruchetta.svg"
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <SimpleGrid bgColor="gray" gridTemplateColumns="1fr 1fr">
      <SimpleGrid placeItems="center" paddingTop="30px">
        <Heading color="goldenrod">Little Lemon</Heading>
        <Heading color="white" fontSize="24px">Chicago</Heading>
        <Text xolor="white">We are a family owned restaurant with some super dank food</Text>
        <NavLink to="booking"><Button colorScheme="yellow">Reserve Table</Button></NavLink>
      </SimpleGrid>

      <Box transform="translateY(50px)">
        <Image src={bannerImg} alt="banner" borderRadius="15px" ></Image>
      </Box>
    </SimpleGrid>
  )
}

export default Header