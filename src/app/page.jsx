import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductViewer from "@/components/ProductViewer";
import Showcase from "@/components/Showcase";
import Performance from "@/components/Performance";
import Features from "@/components/Features";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer /> 
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
