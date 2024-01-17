import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

const MenuItem = ({ title, description, image, price }) => {
  return (
    <Card width="30%">
      <Image src={image} alt="food-item" borderRadius="10px"/>
      <CardBody>
        <Box display="flex" justifyContent="space-between">
          <Heading fontSize="18px">{title}</Heading>
          <Text>{price}</Text>
        </Box>

        <Text color="grey">{description}</Text>
      </CardBody>
      <ButtonGroup p="4">
        <Button colorScheme="yellow">Order Now</Button>
      </ButtonGroup>

    </Card>
  )
}

export default MenuItem