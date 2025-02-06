"use client";
import React, { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { ButtonDarkBlueLarge ,ButtonDarkBlue } from "../Components/button";
import { useCart } from "../CartContext";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";
const Cart = () => {
  const { cartItems } = useCart();
  const [showForm, setShowForm] = useState(false); 
  const [CartQuantity,setCartQuantity]= useState(1)
  const subtotal = Array.isArray(cartItems)
  ? cartItems.reduce((total: number, item) => total + (item.price * CartQuantity), 0)
  : 0;
  
  const [billingData, setBillingData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    COD: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  
  
  // console.log("Cart Items before mapping:", cartItems);
  const orderData = {
    _type: 'customer',
    fullName: billingData.fullName,
    email: billingData.email,
    country: billingData.country,
    city: billingData.city,
    address: billingData.address,
    postalCode: billingData.postalCode,
    COD: billingData.COD,
     cartItems: cartItems.map((item) => {
      // console.log("Processing item:", item);
      console.log("Processing item:", item._id);
      return {
        _ref: item._id, 
        _type: 'reference',
      };
    }),
    total: subtotal,
    orderDate: new Date().toISOString(), 
  };
  console.log("Processing item:", cartItems._ref);
  // console.log("Billing Info Submitted:", billingData);
  // console.log("Billing Info Submitted:", cartItems);

  try {
    await client.create(orderData); 
    Swal.fire({
    title: "Good job!",
    text: "Added to Cart!",
    icon: "success"
  });
    console.log("Order placed successfully!");
  } catch (error) {
    Swal.fire({
    title: "Failed!",
    text: `${error}`,
    icon: "error"
  });
    console.error("Error in placing order", error);
  }
};




  const handleCheckoutClick = () => {
    setShowForm(true); 
  };

  return (
    <>
    <section>
      <Header />
      <div className="p-8">
        <h1 className="headline-three ml-6 md:ml-[5rem]">Your shopping cart</h1>
        <div className="max-w-5xl text-custom-purple-dark mx-auto p-6">
          <div className="hidden md:grid grid-cols-12 body-medium border-b pb-4 mb-4">
            <div className="col-span-6 text-left font-semibold">Product</div>
            <div className="col-span-3 text-center font-semibold">Quantity</div>
            <div className="col-span-3 text-right font-semibold">Total</div>
          </div>

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
                      £{item.price}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-2">
                  <button className="w-8 h-8 border border-gray-300" onClick={()=>{setCartQuantity((CartQuantity>1)?CartQuantity-1:CartQuantity)}}>-</button>
                  <span>{CartQuantity}</span>
                  <button className="w-8 h-8 border border-gray-300" onClick={()=>{setCartQuantity(CartQuantity+1)}}>+</button>
                </div>

                <div className="col-span-3 text-right font-semibold">
                  £{item.price * (CartQuantity || 1)}
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
      

    </section>
      {showForm && cartItems.length > 0 &&
<section  className="w-full  text-blue-950 flex justify-center mt-[5rem] items-center">
      <div className="flex flex-col items-center m-[3rem] text-center gap-6 justify-evenly">
        <h1 className="headline-two">Billing Information</h1>


        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          <div className="w-full flex flex-col gap-6">
            <div>
              <label className="block text-lg font-medium text-custom-purple-dark mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={billingData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-custom-purple-dark mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={billingData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-custom-purple-dark mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={billingData.address}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter your address"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-lg font-medium text-custom-purple-dark mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={billingData.city}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  placeholder="City"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-lg font-medium text-custom-purple-dark mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={billingData.country}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Country"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-medium text-custom-purple-dark mb-2">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={billingData.postalCode}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Enter postal code"
              />
            </div>
          </div>
          
              <div >
              <label className="block text-lg font-medium text-custom-purple-dark mb-2">Cash on Delivery</label>
  <div className="flex gap-4">
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="COD"
        value="Yes"
        checked={billingData.COD === "Yes"}
        onChange={handleChange}
        required
        className="accent-custom-purple-dark"
      />
      Yes
    </label>
    <label className="flex items-center gap-2">
      <input
        type="radio"
        name="COD"
        value="No"
        checked={billingData.COD === "No"}
        onChange={handleChange}
        required
        className="accent-custom-purple-dark"
      />
      No
    </label>
  </div>
</div>
          <button className="bg-blue-900 p-2 w-full text-white">Submit Payment</button>
        </form>
      </div>
    </section>}
<Footer />
        </>
  );
};


  export default Cart;



  //skN3wwBQWjDfRowT9TOR7AtMjeoY6dZhJc5bSt4p6em7i11mlFbgSix4eDJpj7jD93NI8tRjGIXv36SujgoTP2hQj5ouU5kGHZkPGgNwqogEn0tzp9mMIBFTOxzlLG3KsuteMX575tjpD0QvijI8ydUrF1kvbq1BW7MwOqtlYnkyYGRECsDp