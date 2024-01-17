import React, { createContext, useContext, useReducer, useState } from 'react'

const GlobalContext = createContext(undefined)

const initialState = {
  isOpen: false,
  type: "",
  heading: "",
  message: ""
}
const reducer = (state, action) => {
  if (action.type === "OPEN_ALERT") {
    return {
      ...state,
      isOpen: true,
      type: action.payload.type,
      heading: action.payload.heading,
      message: action.payload.message
    }
  }
  if (action.type === "CLOSE_ALERT") {
    return { initialState }
  }
}

const GlobalProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const onOpen = (type, heading, message) => dispatch({type: "OPEN_ALERT", payload: { type, heading, message } })
  const onClose = () => dispatch("CLOSE_ALERT")


  return (
    <GlobalContext.Provider value={{
      ...state,
      onOpen,
      onClose
    }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalProvider, useGlobalContext }