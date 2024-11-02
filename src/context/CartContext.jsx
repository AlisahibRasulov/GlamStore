import { createContext, useState } from "react";

// import React from 'react'
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ? add to cart function
  const addToCart = (product, id) => {
    console.log(`product ${id} ${product.title} added to cart`);
    const newItem = { ...product, quantity: 1 };
    // console.log("newitem",newItem)
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //? if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          // console.log("...item", item);
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          // console.log("item", item);
          return item;
        }
      });
      // console.log("cartitem",cartItem)
      setCart(newCart);
      console.log("newCart", newCart);
    } else {
      setCart([...cart, newItem]);
      console.log("Cart", cart, "newitem", newItem);
      // console.log("Cart",cart)
    }
  };

  // ? remove from cart 
  const removeFromCart = (id)=>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    })
    setCart(newCart)
  }

  // ? clear cart
  const clearCart = ()=>{
    setCart([])
  }

  // ? increase quantity
  const increaseQuantity = (id)=>{
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  // ? decrease quantity 
  const decreaseQuantity = (id) =>{
    const cartItem = cart.find((item)=>{
      return item.id == id
    })
    if(cartItem){
      const newCart = cart.map((item)=>{
        if(item.id == id){
          return{...item,quantity:cartItem.quantity -1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }
    if(cartItem.quantity < 2){
      removeFromCart(id)
    }
  }
  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
