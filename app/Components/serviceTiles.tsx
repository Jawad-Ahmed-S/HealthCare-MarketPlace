import { serviceTilesData } from "../Info"
import ServiceTile from "./mainPage/serviceTile"

export default function ServiceTiles(){
    return(
        <section className="flex flex-col items-center justify-center ">
      <h1 className="headline-three text-custom-purple-dark m-[3rem]">What make our brand different?</h1>
      <div className="flex flex-col font-custom-abeezee gap-4 w-[90%] h-[90%]  md:flex-row  md:justify-center items-center">

   {serviceTilesData.map((tile, index) => (
        <ServiceTile 
          key={index}
          Icon={tile.Icon}
          title={tile.title}
          description={tile.description}
        />
      ))} </div>
    </section>
    )
}