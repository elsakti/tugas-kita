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
              data-text="Create Your Perfect CV and Get Hired Faster"
            >
              Create Your Perfect CV and Get Hired Faster
            </h1>
            <h6 className="text-center text-white">
              The smartest AI-powered platform to build, scan, and optimize your
              resume for top jobs
            </h6>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
}
