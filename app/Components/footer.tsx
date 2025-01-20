import Link from "next/link";
import { ButtonGray } from "./button";
export default function Footer() {
  return (
    <footer className="bg-custom-purple-dark text-white py-8 mt-[5rem]">
      <div className="container mx-auto px-8">

        <div className="flex justify-between items-start md:space-y-8 lg:space-y-0 flex-wrap">
          {/* Menu Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Menu</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/new">New arrivals</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/new">Best sellers</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/new">Recently viewed</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/new">Popular this week</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct">All products</Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Categories</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct">Crockery</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct">Furniture</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct">Homeware</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct-pots">Plant pots</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/AllProduct">Chairs</Link>
              </li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h2 className="mb-4 font-medium headline-five">Our company</h2>
            <ul className="space-y-2">
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/About">About us</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/About">Vacancies</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/About">Contact us</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/About">Privacy</Link>
              </li>
              <li className="body-small">
                <Link className="hover:text-custom-gray" href="/About">Returns policy</Link>
              </li>
            </ul>
          </div>

          {/* Mailing List Section */}
          <div className="w-full lg:w-auto">
            <h2 className="mb-4 mt-4 font-medium headline-five">Join our mailing list</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="body-small bg-custom-purple-light text-white border-none   p-2 w-full lg:w-auto placeholder-gray-400"
              />
              <ButtonGray className="w-10">SignUp</ButtonGray>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex justify-between items-center border-t border-white pt-4">
          <p className="body-small text-gray-400">
            &copy; Copyright 2022 Avion LTD
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <a href="https://linkedin.com" className="body-small">LinkedIn</a>
            <a href="https://facebook.com" className="body-small">Facebook</a>
            <a href="https://instagram.com" className="body-small">Instagram</a>
            <a href="https://skype.com" className="body-small">Skype</a>
            <a href="https://pinterest.com" className="body-small">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
