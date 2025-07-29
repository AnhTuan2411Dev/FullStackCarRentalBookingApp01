import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import MyBookings from './pages/MyBookings'
import Cars from './pages/Cars'
import CarDetails from './pages/CarDetails'
import Footer from './components/Footer'
import { DateProvider } from './context/DateContext'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <DateProvider>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </DateProvider>
  )
}

export default App
