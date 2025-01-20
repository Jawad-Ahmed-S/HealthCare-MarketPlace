import { ButtonDarkBlue } from "./button";
import "./styles/hero.css"
export default function FormCheckout() {
  return (
   <section className=" w-full text-blue-950 flex justify-center mt-[5rem] items-center">
  <div className="flex flex-col items-center m-[3rem] text-center gap-6 justify-evenly">
    <h1 className="headline-two ">Customer Information</h1>
    <form className="flex flex-col gap-4 w-full max-w-md">
      
      <input
        type="text"
        placeholder="Customer Name"
        className="w-full p-3 text-black rounded-md border border-blue-900"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 text-black rounded-md border border-blue-900"
      />

      
      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full p-3 text-black rounded-md border border-blue-900"
      />

      
      <ButtonDarkBlue className="text-white">Proceed</ButtonDarkBlue>
    </form>
  </div>
</section>

  );
}
