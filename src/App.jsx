import { createBrowserRouter, createRoutesFromElements,  RouterProvider, Route } from "react-router-dom";
import Header from './components/Header.jsx'
import BookingPage from './components/BookingPage'
import Layout from './components/Layout'


const App = () =>{


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Header />} />
        <Route path="booking" element={<BookingPage />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
