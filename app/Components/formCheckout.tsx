import { useState } from "react";
import { ButtonDarkBlue } from "./button";
import "./styles/hero.css";

export default function FormCheckout() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Info Submitted:", billingData);
  };

  return (
    <section className="w-full text-blue-950 flex justify-center mt-[5rem] items-center">
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
          <ButtonDarkBlue className="w-full text-white">Submit Payment</ButtonDarkBlue>
        </form>
      </div>
    </section>
  );
}