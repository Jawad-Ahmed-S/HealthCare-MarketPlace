import Header from "./Components/header";
import Hero from "./Components/hero";
import ServiceTile from "./Components/mainPage/serviceTile";
import {serviceTilesData,productData} from "./Info"
import JoinClub from "./Components/joinclub";
import StartingIdea from "./Components/startedidea";
import ProductSlider from "./Components/ProductSlider"
import Footer from "./Components/footer";
import {CartProvider} from "./CartContext"

export default function Home() {
  return (


    <div className="bg-white h-full max-w-[1440px] sm:-w-[400px] m-auto">

    <Header/>
    <Hero/>
    
    <section className="flex flex-col items-center justify-center ">
      <h1 className="headline-three text-custom-purple-dark m-[3rem]">What make our brand different?</h1>
      <div className="flex flex-col gap-4 w-[90%] justify-evenly md:flex-row  md:justify-center items-center">

   {serviceTilesData.map((tile, index) => (
        <ServiceTile 
          key={index}
          Icon={tile.Icon}
          title={tile.title}
          description={tile.description}
        />
      ))} </div>
    </section>
    <ProductSlider/>
<JoinClub/>
<StartingIdea/>
<Footer/>
    </div>
     );
}
