import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Featured from "../components/sections/Featured";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
      </main>
    </>
  )
}