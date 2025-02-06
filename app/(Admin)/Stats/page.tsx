"use client";
import Footer from "@/app/Components/footer";
import AdminHeader from "../../Components/AdminHeader";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import deleteAllDocuments from "../../Components/deleteSanityData.mjs";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

interface Customer {
  id: string;
  total: number;
  cartItems: { productname: string; poster: string }[]; 
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Customer[]>([]);
  const [revenue, setRevenue] = useState(0);
const[profit, setProfit] = useState(0);
const[NoOfOrder, setNoOfOrder] = useState(0);
const[spent, setSpent] = useState(0);
  function urlFor(source: any) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == 'customer']{
          _id,
          total,
          cartItems[]
        }
      `);
      console.log("Fetched Orders:", data);
      setOrders(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let revenueLocal = 0;
    let NoOrders =0;
    orders.forEach((order) => {
      console.log(order.total);
      revenueLocal += order.total;
     NoOrders+= order.cartItems.length;
      setProfit(revenueLocal*0.2);
      setSpent(revenueLocal*0.05);
    });
    
    setNoOfOrder(NoOrders);
    setRevenue(revenueLocal);
  }, [orders]);

  return (
    <>
      <AdminHeader />
      <div className="m-6 flex">
        <div className="w-80 h-80 m-2 shadow-lg rounded flex flex-col items-center justify-between py-4">
          <h1 className="font-bold text-custom-purple-dark text-xl">Total Revenue</h1>
          <p className="text-[5rem] flex-grow flex items-center justify-center">{revenue}$</p>
        </div>

        <div className="w-80 h-80 m-2 shadow-lg rounded flex flex-col items-center justify-between py-4">
          <h1 className="font-bold text-custom-purple-dark text-xl">Total Orders</h1>
          <p className="text-[5rem] flex-grow flex items-center justify-center">{NoOfOrder}</p>
        </div>

        <div className="w-80 h-80 m-2 shadow-lg rounded flex flex-col items-center justify-between py-4">
          <h1 className="font-bold text-custom-purple-dark text-xl">Profit</h1>
          <p className="text-[5rem] flex-grow flex items-center justify-center">{profit}$</p>
        </div>

        <div className="w-80 h-80 m-2 shadow-lg rounded flex flex-col items-center justify-between py-4">
          <h1 className="font-bold text-custom-purple-dark text-xl">Spent</h1>
          <p className="text-[5rem] flex-grow flex items-center justify-center">{spent}$</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
