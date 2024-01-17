import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Select, VStack } from '@chakra-ui/react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { useGlobalContext } from '../context/GlobalContext.jsx'



const BookingForm = ({ submitAPI, updateTimes, availableTimes }) => {

  const { onOpen } = useGlobalContext()

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      numGuests: 1,
      occasion: "birthday"
    },
    onSubmit: async (values) => {
      try {
        const response = await submitAPI()
        if (response === true) {
          onOpen('success', "Reservation Booked!", `Table for ${values.numGuests} successfully reserved!`)
        } else {
          onOpen('failure', "Reservation failed.", `There was an error in processing your reservation.`)
        }
      } catch (error) {
        throw new Error(error)
      } finally {
        formik.resetForm()
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Required"),
      numGuests: Yup.number().required("Required"),
      occasion: Yup.string().required("Required")
    })
  })


  return (
    <VStack>
      <Heading>
        Reserve a Table
      </Heading>
      <form onSubmit={formik.handleSubmit}>

        <VStack>
          <FormControl isInvalid={formik.errors.date && formik.touched.date}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input id="date" type="date" name="date" onBlur={formik.handleBlur} value={formik.values.date}
                   onChange={(e) => {
                     formik.setFieldValue("date", e.target.value)
                     updateTimes()
                   }}
            />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.time && formik.touched.time}>
            <FormLabel htmlFor="time">Available Times</FormLabel>
            <Select
              id="time"
              name="time"
              onBlur={formik.handleBlur}
              value={formik.values.time}
              onChange={formik.handleChange}
            >
            {availableTimes?.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </Select>
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.numGuests && formik.touched.numGuests}>
            <FormLabel htmlFor="numGuests">Number of Guests</FormLabel>
            <Input id="name" type="number" name="numGuests" min="1" onBlur={formik.handleBlur} value={formik.values.numGuests} onChange={formik.handleChange} />
            <FormErrorMessage>{formik.errors.numGuests}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select id="occasion" type="text" name="occasion" onBlur={formik.handleBlur} value={formik.values.occasion} onChange={formik.handleChange}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </Select>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="yellow">Submit</Button>
        </VStack>

      </form>
    </VStack>

  )
}

export default BookingForm