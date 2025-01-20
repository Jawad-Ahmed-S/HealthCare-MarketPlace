import Header from "../Components/header";
import Hero from "../Components/hero";
import { ButtonGray,ButtonDarkBlue} from "../Components/button"
import ServiceTile from "../Components/mainPage/serviceTile";
import {serviceTilesData,productData} from "../Info"
import ProductCard from "../Components/Product";
import Image from "next/image";
import { QualityIcon } from "../Components/icons";
import JoinClub from "../Components/joinclub";
import StartingIdea from "../Components/startedidea";
import ProductSlider from "../Components/ProductSlider";
import Footer from "../Components/footer";
import ProductSpecific from "../Components/ProductSpecific";
import ServiceTiles from "../Components/serviceTiles";
import AboutCompany from "../Components/AboutCompany";

export default function About() {
  return (
    
    <div className=" max-w-[1440px] sm:-w-[400px] m-auto">

    <Header/>
         <AboutCompany/>
     <ServiceTiles/>
<JoinClub/>
<Footer/>
    </div>
     );
}
