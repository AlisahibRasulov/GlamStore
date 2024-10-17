import { createContext } from "react"

// import React from 'react'
export const CartContext = createContext()

const CartProvider = ({children}) => {
  return (
    <CartContext.Provider value={'This is the cart context'}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider