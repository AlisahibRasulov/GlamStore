import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
   <header>
    {/* {logo} */}
    <Link to={"/"}>
    <h4>Glam<span>Store</span></h4>
    </Link>
    {/* navbar */}
    <div>
        {/* navbar desktop */}
        <Navbar />
    </div>
   </header>
  )
}

export default Header