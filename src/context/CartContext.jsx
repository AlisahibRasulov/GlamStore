import { createContext, useState } from "react"

// import React from 'react'
export const CartContext = createContext()

const CartProvider = ({children}) => {
const [cart, setCart] = useState([])
const addToCart = (product,id)=>{
  const newItem = {...product, quantity:1}
  const cartItem = cart.find((item)=>{
    return item.id === id;
  })
  if(cartItem){
    const newCart = [...cart].map((item)=>{
      if(item.id === id){
        return {...item, quantity:cartItem.quantity + 1}

      }else{
        return item
      }
    })
    setCart(newCart)
  }else{
    setCart([...cart, newItem])
  }
  console.log(newItem)
  console.log(`product ${id} ${product.title} added to cart`)
}
console.log(cart)

  return (
    <CartContext.Provider value={{addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider