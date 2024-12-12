import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };
    return (
      <div className='w-full h-full relative'>
        <header className='flex justify-between items-center px-6 py-4 md:px-28 bg-[#ffb6c1] text-black drop-shadow-sm'>
          <a href="#">
            <h1 className='text-3xl font-serif font-bold text-white'><Link to="/#">KGN Bangles</Link></h1>
          </a>
          <ul className='hidden xl:flex items-center gap-12 text-base'>
            <li className='p-2 hover:bg-[#f87082] hover:text-white rounded-md transition-all hover:cursor-pointer hover:underline'><Link to="/">Home</Link></li>
            <li className='p-2 hover:bg-[#f87082] hover:text-white rounded-md transition-all hover:cursor-pointer hover:underline'><Link to="/about-us">About Us</Link></li>
            <li className='p-2 hover:bg-[#f87082] hover:text-white rounded-md transition-all hover:cursor-pointer hover:underline'><Link to="/products">Products</Link></li>
            <li className='p-2 hover:bg-[#f87082] hover:text-white rounded-md transition-all hover:cursor-pointer hover:underline'><Link to="/contact-us">Contact Us</Link></li>
          </ul>
  
          {/* <div className='relative hidden md:flex justify-between items-center gap-3'>
            <i className='bx bx-search absolute left-3 text-gray-500 text-2xl'></i>
            <input type="text"  placeholder='Search'
            className='py-2 pl-10 border-2 border-red-300 rounded-md focus:bg-slate-100 focus:outline-red-500'/>
          </div> */}
  
          {/* DropDown Menu */}
          <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
  
          <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 
            font-semibold text-lg transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
           <li className="list-none p-4 w-full text-center hover:bg-[#f87082] hover:text-white transition-all cursor-pointer">
            <Link to="/" onClick={handleMenuClick}>Home</Link>
          </li>
          <li className="list-none p-4 w-full text-center hover:bg-[#f87082] hover:text-white transition-all cursor-pointer">
            <Link to="/about-us" onClick={handleMenuClick}>About Us</Link>
          </li>
          <li className="list-none p-4 w-full text-center hover:bg-[#f87082] hover:text-white transition-all cursor-pointer">
            <Link to="/products" onClick={handleMenuClick}>Products</Link>
          </li>
          <li className="list-none p-4 w-full text-center hover:bg-[#f87082] hover:text-white transition-all cursor-pointer">
            <Link to="/contact-us" onClick={handleMenuClick}>Contact Us</Link>
          </li>
          </div>
        </header>
      </div>
    )
}

export default Navbar

