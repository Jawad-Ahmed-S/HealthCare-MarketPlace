"use client";
import { useState } from "react";
import Link from "next/link";
import { UserIcon, CartIcon, SearchIcon } from "./icons";
import { useSearchQuery } from "../SearchContext";
import { useRouter } from "next/navigation";

export default function Header({ onSearch }: { onSearch?: (query: string) => void }) {
  const { search, setSearch } = useSearchQuery();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearchClick = () => {
    router.push("/category/Tablets"); 
    if (onSearch) {
      onSearch(search); 
    }
  };

  const navLinks = [
    { href: "/category/Tablets", label: "Tablets" },
    { href: "/category/Syrups", label: "Syrups" },
    { href: "/category/Injections", label: "Injections" },
    { href: "/category/Equipment", label: "Equipment"},
    { href: "/category/Kits", label: "Kits" },
    { href: "/category/Ambulance", label: "Ambulance" },
  ];

  const renderLinks = (additionalClasses = "") =>
    navLinks.map((link) => (
      <Link key={link.href} href={link.href} className={`hover:text-custom-purple-light ${additionalClasses}`}>
        {link.label}
      </Link>
    ));

  return (
    <div className="bg-white">
      
      <div className="flex justify-between items-center px-4 lg:ml-8 lg:mr-8">
        <Link href="/">
          <h1 className="headline-two font-title text-custom-purple-dark mx-auto">Avion</h1>
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark"></div>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="search-bar pl-3 p-2 outline-none border-none focus:bg-custom-gray-medium"
          />
          <button onClick={handleSearchClick} className="hover:bg-custom-gray-medium p-2">
            <SearchIcon />
          </button>
          <Link href="/About" className="hover:bg-custom-gray-medium p-2">
            Admin
          </Link>
          <Link href="/About" className="hover:bg-custom-gray-medium p-2">
            <UserIcon />
          </Link>
          <Link href="/Cart" className="hover:bg-custom-gray-medium p-2">
            <CartIcon />
          </Link>
        </div>
      </div>

      <hr />

      
      {menuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col gap-4 p-4">
            {renderLinks("headline-six text-custom-purple-dark")}
            <li className="flex gap-4">
              <Link href="/Cart" className="hover:bg-custom-gray-medium p-2">
                <CartIcon />
              </Link>
              <Link href="/About" className="hover:bg-custom-gray-medium p-2">
                <UserIcon />
              </Link>
               <Link href="/About" className="hover:bg-custom-gray-medium p-2">
                Admin
              </Link>
            </li>
            <li>
               <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="search-bar pl-3"
          />
              <button onClick={handleSearchClick} className="hover:bg-custom-gray-medium p-2">
                <SearchIcon />
              </button>
             
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center items-center h-[3rem]">
        <div className="flex justify-between gap-8 headline-six text-custom-purple-dark">
          {renderLinks()}
        </div>
      </div>
    </div>
  );
}
