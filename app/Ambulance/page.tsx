"use client";

import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

export default function AmbulanceBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    ambulanceType: "",
    oxygen: "",
    paramedicStaff: "",
    otherRequirements: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Your ambulance booking has been submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
        ambulanceType: "",
        oxygen: "",
        paramedicStaff: "",
        otherRequirements: "",
      });
    }, 2000);
  };

  return (
    <>
      <Header />
      <h1 className="headline-three flex justify-center text-custom-purple-dark capitalize mt-6">
        Ambulance Booking
      </h1>
      <div className="flex  w-full justify-center mt-6 p-6">
        <div className="p-8 w-full flex    bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="flex flex-col  w-full md:flex-row  gap-6">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex   flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-custom-purple-dark mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-custom-purple-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-lg font-medium text-custom-purple-dark mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
                  placeholder="Enter your address"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-lg font-medium text-custom-purple-dark mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-custom-purple-dark focus:border-custom-purple-dark"
                  placeholder="Any special instructions?"
                ></textarea>
              </div>
            </div>
                    <div className="border border-custom-purple-dark h-full"></div>
            <div className="w-full md:w-1/2 flex  flex-col gap-6">
              <div>
                <h2 className="text-lg font-medium text-custom-purple-dark mb-2">Ambulance Type</h2>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ambulanceType"
                      value="AC"
                      onChange={handleChange}
                      required
                      className="focus:ring-custom-purple-dark"
                    />
                    AC
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ambulanceType"
                      value="Non-AC"
                      onChange={handleChange}
                      className="focus:ring-custom-purple-dark"
                    />
                    Non-AC
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-custom-purple-dark mb-2">Oxygen Requirement</h2>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="oxygen"
                      value="Yes"
                      onChange={handleChange}
                      required
                      className="focus:ring-custom-purple-dark"
                    />
                    Required
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="oxygen"
                      value="No"
                      onChange={handleChange}
                      className="focus:ring-custom-purple-dark"
                    />
                    Not Required
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-custom-purple-dark mb-2">Paramedic Staff</h2>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paramedicStaff"
                      value="Yes"
                      onChange={handleChange}
                      required
                      className="focus:ring-custom-purple-dark"
                    />
                    Needed
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paramedicStaff"
                      value="No"
                      onChange={handleChange}
                      className="focus:ring-custom-purple-dark"
                    />
                    Not Needed
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-custom-purple-dark mb-2">Other Requirements</h2>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="otherRequirements"
                      value="Wheelchair"
                      onChange={handleChange}
                      className="focus:ring-custom-purple-dark"
                    />
                    Wheelchair
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="otherRequirements"
                      value="Stretcher"
                      onChange={handleChange}
                      className="focus:ring-custom-purple-dark"
                    />
                    Stretcher
                  </label>
                </div>
              </div>
            <div className=" w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-custom-purple-dark text-white py-3 px-6 rounded-md hover:bg-custom-purple-light disabled:bg-gray-400 w-full"
              >
                {isSubmitting ? "Submitting..." : "Book Ambulance"}
              </button>
            {successMessage && (
              <p className="mt-4 text-green-600 font-medium text-center">{successMessage}</p>
            )}


            </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
