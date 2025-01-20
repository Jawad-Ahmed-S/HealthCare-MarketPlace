import { ButtonDarkBlue } from "./button"
export default function StartingIdea(){
    return(
        <section className="flex items-center mt-[5rem] w-full justify-center">
    <div className="w-[90%] flex flex-col md:flex-row overflow-hidden  items-center justify-between ">
    <div className="bg-custom-purple-dark  h-[25rem] ">
      <div className="flex flex-col   justify-between h-[85%] m-[2rem] ">
        <div className="flex flex-col justify-between">
          <h1 className="headline-two text-white">It started with a small idea</h1>
          <p className="headline-five text-white">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014
          </p>
        </div>
        <ButtonDarkBlue className="text-white w-[8rem] headline-six">
          View Collection
        </ButtonDarkBlue>
      </div>
    </div>
      <div className=" h-[25rem] mt-3 md:mt-0 md:ml-3 flex justify-end">
        <img  src="MainPageCollection.png" alt="collection" />
      </div>
    </div>
</section>
    )
}