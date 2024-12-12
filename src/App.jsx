import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Products from './components/Products'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'
import Details from './pages/DetailsPage'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Cart from './components/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/#" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/refund-policy" element={<RefundPolicy/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
