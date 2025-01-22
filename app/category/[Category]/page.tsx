"use client"
import { useState } from "react";
import Header from "@/app/Components/header";
import CategoryListing from "@/app/Components/AllProducts";
import Footer from "@/app/Components/footer";

export default function ProductPage({ params }: { params: { Category: string } }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <CategoryListing params={params} searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}
