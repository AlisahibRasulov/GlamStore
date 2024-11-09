// import React from 'react'

import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Offer from "../components/Offer"
import Shop from "../components/Shop"

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* shop section */}
      <Shop/>
      {/* offer section */}
      <Offer/>
      {/* footer section */}
      <Footer/>
    </div>
  )
}

export default Home