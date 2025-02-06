"use client";
import Footer from "@/app/Components/footer";
import AdminHeader from "../../Components/AdminHeader";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import deleteAllDocuments from "../../Components/deleteSanityData.mjs"
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
interface Customer {
  id: string;
  fullName: string;
  email: string;
  adress: string;
  city: string;
  country: string;
  zipCode: number;
  status: string;
  cartItems: { productname: string; poster: string }[]; 
}
export default function AdminDashboard() {
  const [orders, setOrders] = useState<Customer[]>([]);

function urlFor(source: any) {
  return builder.image(source);
}

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == 'customer']{
          _id,
          fullName,
          email,
          adress,
          city,
          country,
          zipCode,
          status,
          cartItems[]->{
            productname,
            poster
          }
        }
      `);
      //delete all existing orders and then place again
      console.log("Fetched Orders:", data); // Debugging
      setOrders(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader />
      <div className="p-6 flex justify-center flex-col items-center">
        <h1 className="headline-three text-custom-purple-dark capitalize mt-6">Admin Dashboard</h1>
        <div className="overflow-x-auto">
  <table className="min-w-full my-4 bg-white border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border px-4 py-2 whitespace-nowrap">Full Name</th>
        <th className="border px-4 py-2 whitespace-nowrap">Email</th>
        <th className="border px-4 py-2 whitespace-nowrap">City</th>
        <th className="border px-4 py-2 whitespace-nowrap">Country</th>
        <th className="border px-4 py-2 whitespace-nowrap">Status</th>
        <th className="border px-4 py-2 whitespace-nowrap">Cart Items</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id} className="border">
          <td className="border px-4 py-2">{order.fullName}</td>
          <td className="border px-4 py-2">{order.email}</td>
          <td className="border px-4 py-2">{order.city}</td>
          <td className="border px-4 py-2">{order.country}</td>
          <td className="border px-4 py-2">{order.status}</td>
          <td className="border px-4 py-2">
            {Array.isArray(order.cartItems) && order.cartItems.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {order.cartItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <p className="text-sm">{item.productname}</p>
                    <img src={urlFor(item.poster).url()} alt={item.productname} className="w-10 h-10" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm">No items</p>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            <button onClick={deleteAllDocuments} className="bg-blue-900 m-2 p-2 text-white">Delete all Products</button>
      </div>
      <Footer />
    </>
  );
}
