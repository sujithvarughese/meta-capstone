import BookingForm from './BookingForm'
import { VStack } from '@chakra-ui/react'
import { useReducer, useState } from 'react'

const allTimes = [
  {value: "11:00", label: "11:00"},
  {value: "12:00", label: "12:00"},
  {value: "13:00", label: "13:00"},
  {value: "14:00", label: "14:00"},
  {value: "15:00", label: "15:00"},
  {value: "16:00", label: "16:00"},
  {value: "17:00", label: "17:00"},
  {value: "18:00", label: "18:00"},
  {value: "19:00", label: "19:00"},
  {value: "20:00", label: "20:00"},
  {value: "21:00", label: "21:00"},
  {value: "22:00", label: "22:00"},
]
const fetchAPI = () => {
  const results = []
  for (let i = 0; i < allTimes.length; i++) {
    const random = Math.random()
    if (random > 0.5) {
      results.push(allTimes[i])
    }
  }
  return results
}
const availableTimes = fetchAPI(allTimes)

const submitAPI = () => Math.random() > 0.25

const reducer = (state, action) => {
  if (action.type === "FETCH_API") {
    return {
      ...state,
      availableTimes: action.payload.availableTimes
    }
  }
}


const BookingPage = () => {

  const updateTimes = (state, action) => {
    const availableTimes = fetchAPI()
    dispatch({ type: "FETCH_API", payload: { availableTimes }})
  }

  const [state, dispatch] = useReducer(reducer, availableTimes)


  return (
    <VStack>
      <BookingForm submitAPI={submitAPI} availableTimes={state.availableTimes} updateTimes={updateTimes}/>
    </VStack>
  )
}

export default BookingPage