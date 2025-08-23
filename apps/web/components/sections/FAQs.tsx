"use client";
import Image from "next/image";

export default function FAQs() {
  return (
    <>
      <section className="faq-section section-padding" id="section_4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="clearfix" />
            <div className="col-lg-5 col-12">
              <Image
                src="/images/faq_graphic.jpg"
                className="img-fluid"
                alt="FAQs"
                width={500}
                height={400}
              />
            </div>
            <div className="col-lg-6 col-12 m-auto">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Apakah TugasKita benar-benar gratis?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Ya! TugasKita menyediakan fitur dasar secara gratis termasuk AI scanner, 
                      beberapa template, dan export PDF. <strong>Versi premium</strong> memberikan 
                      akses ke semua template, export DOC, dan fitur AI advanced untuk optimasi 
                      maksimal CV kamu.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Bagaimana AI scanner bekerja?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      AI kami menganalisis format, keyword, struktur, dan ATS compatibility CV kamu. 
                      Memberikan <strong>feedback spesifik</strong> seperti saran penempatan keyword, 
                      perbaikan format, dan rekomendasi template yang cocok untuk industri target kamu.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Apakah ada kerjasama untuk recruiter?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Tentu! Kami terbuka untuk partnership dengan recruiter dan perusahaan 
                      yang membutuhkan talent dengan keahlian spesifik. Hubungi kami untuk 
                      diskusi kerjasama dalam talent acquisition dan CV database access.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
