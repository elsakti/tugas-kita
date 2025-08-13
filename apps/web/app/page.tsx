import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Featured from "../components/sections/Featured";
import Browse from "../components/sections/Browse";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Browse />
      </main>
    </>
  )
}