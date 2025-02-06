"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/app/Components/header";
import CategoryListing from "@/app/Components/AllProducts";
import Footer from "@/app/Components/footer";

export default function ProductPage({ params }: { params: { Category: string } }) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <div>
      <Header onSearch={setSearchQuery} />
      <CategoryListing params={params} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}
