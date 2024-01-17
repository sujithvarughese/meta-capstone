
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Specials from './Specials.jsx'
import BookingPage from './BookingPage.jsx'
import Footer from './Footer.jsx'
import Alert from './Alert.jsx'

const Layout = () => {
  return (
    <div>
      <Nav />
      <Alert />
      <Outlet />
      <Specials />
      <Footer />
    </div>
  )
}

export default Layout