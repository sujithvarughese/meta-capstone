import React, { useRef } from 'react'
import { AlertDescription, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogHeader, AlertDialogOverlay, AlertIcon, AlertTitle, CloseButton } from '@chakra-ui/react'
import { useGlobalContext } from '../context/GlobalContext.jsx'

const Alert = () => {

  const { isOpen, onClose, type, heading, message } = useGlobalContext()
  const cancelRef = useRef()

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>

        <AlertDialogContent
          bgColor={type === "success" ? '#81C784' : '#FF8A65'}
          placeItems="center"
          paddingBottom="6"
        >
          <CloseButton alignSelf="flex-end" onClick={onClose}/>
          <AlertDialogHeader>{heading}</AlertDialogHeader>
          <AlertDialogBody textAlign="center" fontSize="14px">{message}</AlertDialogBody>
        </AlertDialogContent>

        </AlertDialogOverlay>

    </AlertDialog>
  )
}

export default Alert