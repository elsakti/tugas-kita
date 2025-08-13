import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Featured from "../components/sections/Featured";
import Browse from "../components/sections/Browse";
import TImeline from "../components/sections/TImeline";
import FAQs from "../components/sections/FAQs";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Browse />
        <TImeline />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}