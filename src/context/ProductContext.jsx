import { createContext, useEffect, useState } from "react"

// import React from 'react'
export const ProductContext = createContext()

const ProductProvider = ({children}) => {

  const [products, setProducts] = useState([])
  // fetch product
  useEffect(()=>{
    const fethProducts = async()=>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      // console.log(data)
      setProducts(data)
    }
    fethProducts()
  },[])
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider