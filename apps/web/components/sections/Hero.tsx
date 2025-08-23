"use client";
import Search from "../ui/Search";
import "../../public/css/hero-title.css";

export default function Hero() {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center"
      id="section_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h1
              className="hero-title text-center"
              data-text="Buat CV Profesional dalam Hitungan Detik dengan AI"
            >
              Buat CV Profesional dalam Hitungan Detik dengan AI
            </h1>
            <h6 className="text-center text-white">
              Platform AI terpintar untuk scan, build, dan optimize CV kamu. Gratis untuk fresh graduate, premium untuk profesional. Template khusus Asia Tenggara!
            </h6>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
}
