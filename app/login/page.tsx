"use client";

import { useState } from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import LoginForm from "../Components/login";

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
        <div className="p-8 w-full md:w-[50%] flex bg-white rounded-lg shadow-md">
          <LoginForm/>
        </div>
      </div>
      <Footer />
    </>
  );
}
