import Services from "./(frontend)/services/page";
import Testimonials from "./(frontend)/testimonials/page";
import GallerySection from "./components/home/gallery";
import Hero from "./components/home/hero";
import HomeProductList from "./components/home/homeProducts";

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
