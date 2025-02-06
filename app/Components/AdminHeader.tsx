"use client";
import Link from "next/link"
import { useState } from "react";
export default function AdminHeader(){
    const [menuOpen,setMenuOpen]= useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <>
    <div className="bg-white">
      <div className="flex justify-between items-center px-4 lg:ml-8 lg:mr-8">
        <Link href="/AdminDashboard">
          <h1 className="headline-two font-title text-custom-purple-dark mx-auto">Avion</h1>
        </Link>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark mb-1"></div>
          <div className="w-6 h-0.5 bg-custom-purple-dark"></div>
        </div>
        
        
          {!menuOpen &&( <div className="w-1/4 lg:flex justify-evenly hidden">
          <Link href="/About" className="hover:bg-custom-gray-medium p-2">
            
            Orders
          </Link>
          <Link href="/Cart" className="hover:bg-custom-gray-medium p-2">
            
            Inventory
          </Link>
         
          <Link href="/Cart" className="hover:bg-custom-gray-medium p-2">
            
            Stats
          </Link>
          
          </div>
          )}
          </div>

        </div>

      <hr />

      
      {menuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col gap-4 p-4">
            <li className="flex gap-4">
              <Link href="/Orders" className="hover:bg-custom-gray-medium p-2">
                Orders
              </Link>
              <Link href="/About" className="hover:bg-custom-gray-medium p-2">
                Inventory
              </Link>
               <Link href="/About" className="hover:bg-custom-gray-medium p-2">
                Stats
              </Link>
            </li>
            <li>
               
             
            </li>
          </ul>
        </div>
      )}
        </>
    )
}