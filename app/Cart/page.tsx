"use client";
import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { ButtonDarkBlueLarge } from "../Components/button";
import { useCart } from "../CartContext";
import { CartProvider } from "../CartContext";
import FormCheckout from "../Components/formCheckout";

const Cart = () => {
  const { cartItems } = useCart();
  const [showForm, setShowForm] = useState(false); 
  const [CartQuantity,setCartQuantity]= useState(1)
  const subtotal = Array.isArray(cartItems)
    ? cartItems.reduce((total: number, item) => total + (item.Price * CartQuantity), 0)
    : 0;

  const handleCheckoutClick = () => {
    setShowForm(true); 
  };

  return (
    <section>
      <Header />
      <div className="bg-gray-50 p-8">
        <h1 className="headline-three ml-6 md:ml-[5rem]">Your shopping cart</h1>
        <div className="max-w-5xl text-custom-purple-dark mx-auto p-6">
          <div className="hidden md:grid grid-cols-12 body-medium border-b pb-4 mb-4">
            <div className="col-span-6 text-left font-semibold">Product</div>
            <div className="col-span-3 text-center font-semibold">Quantity</div>
            <div className="col-span-3 text-right font-semibold">Total</div>
          </div>

          {/* Map through cart items */}
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.index}
                className="grid md:grid-cols-12 items-center border-b py-4 gap-4"
              >
                <div className="col-span-6 flex items-center gap-4 md:gap-8">
                  <img
                    src={item.poster}
                    alt={item.productname}
                    className="w-16 h-16 md:w-24 md:h-24 object-cover"
                  />
                  <div>
                    <h2 className="headline-six">{item.productname}</h2>
                    <p className="body-small text-gray-500">{item.description}</p>
                    <p className="body-medium font-semibold text-gray-700">
                      £{item.Price}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-2">
                  <button className="w-8 h-8 border border-gray-300" onClick={()=>{setCartQuantity((CartQuantity>1)?CartQuantity-1:CartQuantity)}}>-</button>
                  <span>{CartQuantity}</span>
                  <button className="w-8 h-8 border border-gray-300" onClick={()=>{setCartQuantity(CartQuantity+1)}}>+</button>
                </div>

                <div className="col-span-3 text-right font-semibold">
                  £{item.Price * (CartQuantity || 1)}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Your cart is empty.</p>
          )}

          <div className="mt-6 flex flex-col gap-5 items-end text-right">
            <div>
              <p className="text-lg font-semibold">Subtotal: £{subtotal}</p>
              <p className="text-sm text-gray-500">
                Taxes and shipping are calculated at checkout.
              </p>
            </div>
            <ButtonDarkBlueLarge className="w-full md:w-auto text-white" event={handleCheckoutClick}>
              Proceed to Checkout
            </ButtonDarkBlueLarge>
          </div>
        </div>
      </div>
      
      {/* Conditionally render the FormCheckout component */}
      {showForm && <FormCheckout />}

      <Footer />
    </section>
  );
};

export default Cart;
