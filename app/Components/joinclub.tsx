import { QualityIcon,CheckMarkIcon } from "./icons";
import { ButtonDarkBlue } from "./button";
import "./styles/hero.css"
export default function JoinClub() {
  return (
    <section className="joinClub-bg w-full text-white flex justify-center mt-[5rem] items-center">
      <div className="flex flex-col items-center m-[3rem] text-center gap-4 justify-evenly">
        <h1 className="headline-two">Join the club and get the benefits</h1>
        <p className="body-small">
          Sign up for our newsletter and receive exclusive offers on new
          <br /> ranges, sales, pop-up stores, and more
        </p>
        <div className="flex gap-5 mt-7 flex-col md:flex-row items-start md:items-center">
          <div className="flex  gap-2 items-center stroke-white">
            <CheckMarkIcon  />
            <p className="body-small">Exclusive Offers</p>
          </div>
          <div className="flex  gap-2 items-center stroke-white">
            <CheckMarkIcon  />
            <p className="body-small">Early Access</p>
          </div>
          <div className="flex  gap-2 items-center stroke-white">
            <CheckMarkIcon  />
            <p className="body-small">Member Discounts</p>
          </div>
        </div>

        <div className="flex items-center  mt-5 w-full md:w-auto">
          <input
            type="text"
            className="p-[0.8rem] w-full md:w-[60%] focus:outline-none"
            placeholder="you@mail.com"
          />
          <ButtonDarkBlue className="text-white">SignUp</ButtonDarkBlue>
        </div>
      </div>
    </section>
  );
}
