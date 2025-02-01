"use client";
import Image from "next/image"
import ProductSchemaType from "./Productinterface";

import { useCart } from "../CartContext";
import { useState } from "react";
import Swal from "sweetalert2";


export default function ProductSpecific(props:ProductSchemaType){
   const {addToCart} = useCart(); 
  const [localQuantity,setlocalQuantity]=useState(1)
  const handleAddToCart = () => {
    
      Swal.fire({
    title: "Good job!",
    text: "Added to Cart!",
    icon: "success"
  });
    addToCart(props,localQuantity); 
  };

return(
    <section className="  flex flex-col justify-between mb-[5rem] min-h-[100vh] items-center md:flex-row">
        <div className="  md:w-[50%] w-[100%] md:h-[100vh] min-h-[80vh] overflow-hidden">
            <Image className=" w-[100%] h-auto" src={props.poster} 
        width={600}
        height={900}                   
        quality={90}                   
         alt={`456`}/>
        </div>
    <div className="  flex flex-col md:w-[55%] w-[90%]  justify-center gap-10 p-8">

      <div className="  flex-1 flex flex-col gap-6">
        <h1 className="  headline-two text-custom-purple-dark">{props.productname}</h1>
        <p className="  headline-three font-semibold text-custom-purple-dark">£{props.Price}</p>
        <p className="  body-medium text-custom-purple-dark">
          {props.description}
        </p>

        <div>
          
          <ul className="  list-none flex gap-[2rem] mt-[2rem] text-custom-purple-dark">
            <li className="  flex flex-col">
              <span className="  font-semibold">Packet Size</span> <span>{props.packet_size}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="  flex flex-row justify-between items-center gap-4">

        <div className="  flex items-center ">
          <button onClick={()=>{setlocalQuantity(localQuantity-1)}} className=" p-2 bg-gray-300 hover:bg-gray-400 text-custom-purple-dark ">
            -
          </button>
          <input
            type="text"
            value={localQuantity}
            readOnly
            className=" p-2 w-10 text-center bg-gray-300  "
          />
          <button onClick={()=>{setlocalQuantity(localQuantity+1)}} className=" p-2 bg-gray-300 hover:bg-gray-400 text-custom-purple-dark  ">
            +
          </button>
        </div>

        <button onClick={handleAddToCart} className="  bg-custom-purple-dark text-white py-2 px-8   hover:bg-custom-purple">
          Add to cart
        </button>
      </div>
        </div>
    </section>
)
} 