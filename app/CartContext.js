"use client";
import React, { createContext, useContext, useState } from "react";

// interface ProductDetails{
//   productname: string;
//   price: number;
//   quantity: number;
//   _id:String;
//   poster: string;
// }
const CartContext = createContext();
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

 const addToCart = (product,localQuantity) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.productname === product.productname);

    if (existingItem) {
      return prevItems.map((item) =>
        item.productname === product.productname
          ? { ...item, quantity: item.quantity + localQuantity }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: localQuantity }];
    }
  });
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
