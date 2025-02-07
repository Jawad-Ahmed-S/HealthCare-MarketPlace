"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productname === product.productname);

      if (existingItem) {
        return prevItems.map((item) =>
          item.productname === product.productname
            ? { ...item, quantity: item.quantity + quantity } // Adds new quantity to the existing one
            : item,
            // setQuantity(()=>{item.quantity+quantity})  
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, quantity, setQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
