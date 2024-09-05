import ProductRange from "../components/home/ProductRange";
// import ProductsContainer from "../components/home/ProductsContainer";
// import FuniroFurniture from "../components/home/FuniroFurniture";
// import SLickRoomSlider from "../components/home/SLickRoomSlider";
import { Reveal } from "../components/common/index";
import PrimaryHero from "../components/home/PrimaryHero";
import { FeaturesBar } from "../components/common/index";




const Home = () => {
  return (
    <>
      <PrimaryHero />
      <Reveal><ProductRange /></Reveal>
      {/* <ProductsContainer />
      <SLickRoomSlider />
      <Reveal><FuniroFurniture /></Reveal> */}
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Home;