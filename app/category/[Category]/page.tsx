"use client";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import AllProducts from "../../Components/AllProducts";

export default function AllProduct({ params }: { params: { Category: string } }) {
  return (
    <section>
      <Header />
      <AllProducts params={params} /> 
      <Footer />
    </section>
  );
}
