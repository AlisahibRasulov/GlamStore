import { createContext, useState } from "react"

// import React from 'react'
export const CartContext = createContext()

const CartProvider = ({children}) => {
  
const [cart, setCart] = useState([])
const addToCart = (product,id)=>{
  console.log(`product ${id} ${product.title} added to cart`)
  const newItem = {...product, quantity:1};
  // console.log("newitem",newItem)
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
    // console.log("cartitem",cartItem)
    setCart(newCart)
    console.log("newCart",newCart)
  }else{
    setCart([...cart, newItem])
    console.log("Cart",cart,"newitem",newItem)
    // console.log("Cart",cart)
  }
}

  return (
    <CartContext.Provider value={{addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider