"use client";
import Link from "next/link";
import IconDefault from "../ui/IconDefault";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <IconDefault />
        </Link>
        <div className="d-lg-none ms-auto me-4">
          <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_1">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_2">
                Scan CV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_3">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_4">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link click-scroll" href="#section_5">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-none d-lg-block position-absolute end-0" style={{ marginRight: "10%" }}>
            <a href="#top" className="navbar-icon bi-person smoothscroll"></a>
          </div>
        </div>
      </div>
    </nav>
  );
}