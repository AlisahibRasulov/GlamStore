// import React from 'react'

import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const Shop = () => {
  const {products} = useContext(ProductContext)
  console.log(products)
  return (
    <section id="shop" className="madd-padd-container py-20 bg-[#f8f7f4]">
        {/* title */}
        <h3 className="h3">Our Products</h3>
        <hr className="h-[2px] md:w-1/2 max-w-96 bg-gradient-to-l from-transparent via-black to-black mb-24 border-none rounded"/>
        {/* shop container */}
        <div>
            shop items
        </div>
    </section>
  )
}

export default Shop