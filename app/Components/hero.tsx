import Image from "next/image";
import { ButtonGray } from "./button";
import "./styles/hero.css"
export default function Hero() {
  return (
    <div className="h-auto">
      {/* Desktop Version */}
      <div className="hidden hero-bg  lg:flex h-[43rem]">
        <div className="bg-white h-[30rem] flex w-[35rem] float-right m-[5rem]">
          <div className="m-[3rem] flex flex-col justify-between">
            <div>
              <h1 className="headline-two text-custom-purple-dark">
                Luxury homeware for people who love timeless design quality
              </h1>
              <p
                style={{ color: "#4E4D93" }}
                className="headline-six text-custom-purple-dark mt-2"
              >
                Shop the new Spring 2022 collection today
              </p>
            </div>
            <ButtonGray className="">Button</ButtonGray>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex flex-col items-center p-6 lg:hidden">
        <div className="bg-white w-full p-6 rounded-lg text-center">
          <h1 className="headline-five text-custom-purple-dark">
            Luxury homeware for people who love timeless design quality
          </h1>
          <p
            className="headline-six text-custom-purple-dark mt-4"
            style={{ color: "#4E4D93" }}
          >
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today.
          </p>
          <ButtonGray className="mt-6">View Collection</ButtonGray>
        </div>
        <div className="mt-8">
          <Image
            src="/HeroBlocks.png"
            alt="Furniture collection"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
