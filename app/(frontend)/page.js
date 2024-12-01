
import GallerySection from "../components/home/gallery";
import Hero from "../components/home/hero";
import HomeProductList from "../components/home/homeProducts";
import Services from "./services/page";
import Testimonials from "./testimonials/page";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProductList />
      <Services />
      <GallerySection />
      <Testimonials />
    </>
  );
}
