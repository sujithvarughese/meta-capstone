import { Box, Button, Heading, SimpleGrid } from '@chakra-ui/react'
import greekSaladImg from "../assets/images/greek salad.jpg"
import bruchettaImg from "../assets/images/bruchetta.svg"
import lemonDessertImg from "../assets/images/desert.jpg"
import MenuItem from './MenuItem.jsx'
const Specials = () => {
  return (
    <Box m="70px">
      <Box display="flex" justifyContent="space-between">
        <Heading>This Weeks Specials</Heading>
        <Button>Online Menu</Button>
      </Box>

      <Box display="flex"  justifyContent="space-between">
        {recipes.map(recipie => {
          return <MenuItem key={recipie.id} title={recipie.title} price={recipie.price} image={recipie.image} description={recipie.description}/>
        })}
      </Box>

    </Box>
  )
}
const recipes = [
  {
    id: 1,
    title: "Greek salad",
    price: 12.99,
    image: greekSaladImg,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
  },
  {
    id: 2,
    title: "Bruchetta",
    price: 5.99,
    image: bruchettaImg,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: 4.78,
    image: lemonDessertImg,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },

];
export default Specials