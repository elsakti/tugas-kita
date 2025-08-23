"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4 pb-2">
              <a className="navbar-brand mb-2" href="index.html">
                <Image
                  src="/images/logo/tugaskita-blue.png"
                  className="img-fluid"
                  alt="Topic Listing Logo"
                  width={150}
                  height={50}
                />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="site-footer-title mb-3">Resources</h6>
              <ul className="site-footer-links">
              <li className="site-footer-link-item">
              <a href="#section_1" className="site-footer-link">
              Home
              </a>
              </li>
              <li className="site-footer-link-item">
              <a href="#section_2" className="site-footer-link">
              Template CV
              </a>
              </li>
              <li className="site-footer-link-item">
              <a href="#section_3" className="site-footer-link">
              Cara Kerja
              </a>
              </li>
              <li className="site-footer-link-item">
              <a href="#section_4" className="site-footer-link">
              FAQs
              </a>
              </li>
                <li className="site-footer-link-item">
                    <a href="#section_5" className="site-footer-link">
                      Partnership
                    </a>
                  </li>
                </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h6 className="site-footer-title mb-3">Information</h6>
              <p className="text-white d-flex mb-1">
                <a href="https://wa.me/6281234567890" className="site-footer-link">
                  +62 812-3456-7890
                </a>
              </p>
              <p className="text-white d-flex">
                <a href="mailto:support@tugaskita.com" className="site-footer-link">
                  support@tugaskita.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Thai
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Myanmar
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Arabic
                    </button>
                  </li>
                </ul>
              </div>
              <p className="copyright-text mt-lg-5 mt-4">
                Copyright © 2025 TugasKita. All rights reserved.
                <br />
                <br />
                CV Builder Indonesia untuk Asia Tenggara
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
