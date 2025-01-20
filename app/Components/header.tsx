"use client";
import { useState } from "react";
import Link from "next/link";
import { UserIcon, CartIcon, SearchIcon } from "./icons";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white">
      {/* Top Header Section */}
      <div className="flex justify-between items-center px-4 lg:ml-8 lg:mr-8">
        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark"></div>
        </div>

        {/* Search Icon */}
        {/* Logo (Centered for Desktop and Mobile) */}
        <Link href="/"><h1 className="headline-two font-title text-custom-purple-dark mx-auto">Avion</h1></Link>
        <div className="lg:hidden">
          <SearchIcon />
        </div>

      
        <div className="hidden lg:flex gap-4">
          <Link href="/Cart" className="hover:bg-custom-gray-medium p-2"><CartIcon /></Link>
          <Link href="/About" className="hover:bg-custom-gray-medium p-2"><UserIcon /></Link>
          <Link href="/About" className="hover:bg-custom-gray-medium p-2">Admin Login</Link>
        </div>
      </div>

      {/* Divider */}
      <hr />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute  left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link href="/AllProduct" className=" headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Plant Pots
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Tables
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Chairs
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Crockery
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Tableware
              </Link>
            </li>
            <li>
              <Link href=" /AllProduct" className="headline-six hover:text-custom-purple-light text-custom-purple-dark">
                Cutlery
              </Link>
            </li>
            <li>
              <div className="flex"><Link href="/Cart" className="hover:bg-custom-gray-medium p-2"><CartIcon /></Link>
          <Link href="/About" className="hover:bg-custom-gray-medium p-2"><UserIcon /></Link></div></li>
          <li><Link href="/About" className="hover:bg-custom-gray-medium p-2">Admin Login</Link>
        </li>
          </ul>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center items-center h-[3rem] list-none">
        <div className="flex justify-between gap-8 headline-six text-custom-purple-dark" style={{ color: " /AllProduct4E4D93" }}>
          <Link href=" /category/Plant" className="hover:text-custom-purple-light">Plant Pots</Link>
          <Link href=" /category/Ceramics" className="hover:text-custom-purple-light">Ceramics</Link>
          <Link href=" /category/Tables" className="hover:text-custom-purple-light">Tables</Link>
          <Link href=" /category/Chairs" className="hover:text-custom-purple-light">Chairs</Link>
          <Link href=" /category/Crockery" className="hover:text-custom-purple-light">Crockery</Link>
          <Link href=" /category/Tableware" className="hover:text-custom-purple-light">Tableware</Link>
          <Link href=" /category/Cutlery" className="hover:text-custom-purple-light">Cutlery</Link>
        </div>
      </div>
    </div>
  );
}
