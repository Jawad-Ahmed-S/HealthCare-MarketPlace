"use client"
import { useState,useEffect } from "react";
import Header from "@/app/Components/header";
import CategoryListing from "@/app/Components/AllProducts";
import Footer from "@/app/Components/footer";

export default function ProductPage({ params }: { params: { Category: string } }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
useEffect(() => {
    if (searchQuery) {
      console.log("Search query:", searchQuery);
    }
  }, [searchQuery]);
  return (
    <div>
      <Header onSearch={handleSearch} />
      <CategoryListing params={params} searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}
