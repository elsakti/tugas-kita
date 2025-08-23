"use client";

export default function Timeline() {
  return (
    <>
      <section className="timeline-section section-padding" id="section_3">
        <div className="section-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white mb-4">Cara Kerja TugasKita</h2>
            </div>
            <div className="col-lg-10 col-12 mx-auto">
              <div className="timeline-container">
                <ul
                  className="vertical-scrollable-timeline"
                  id="vertical-scrollable-timeline"
                >
                  <div className="list-progress">
                    <div className="inner" />
                  </div>
                  <li>
                    <h4 className="text-white mb-3">
                      Upload & Scan CV Kamu
                    </h4>
                    <p className="text-white">
                      Upload CV yang sudah ada atau mulai dari nol. AI kami akan 
                      menganalisis ATS score, memberikan feedback spesifik, dan 
                      merekomendasikan template yang cocok untuk posisi impian kamu.
                    </p>
                    <div className="icon-holder">
                      <i className="bi-file-earmark-arrow-up" />
                    </div>
                  </li>
                  <li>
                    <h4 className="text-white mb-3">
                      Pilih Template & Customize
                    </h4>
                    <p className="text-white">
                      Pilih dari puluhan template gratis dan premium yang disesuaikan 
                      dengan profesi dan wilayah kamu. Edit dengan AI assistance untuk 
                      hasil yang optimal dan sesuai job description target.
                    </p>
                    <div className="icon-holder">
                      <i className="bi-palette" />
                    </div>
                  </li>
                  <li>
                    <h4 className="text-white mb-3">Download & Apply</h4>
                    <p className="text-white">
                      Export CV kamu ke PDF gratis atau DOC premium. Langsung apply 
                      ke job dengan confidence tinggi! Coming soon: job matching 
                      otomatis berdasarkan profile CV kamu.
                    </p>
                    <div className="icon-holder">
                      <i className="bi-download" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <p className="text-white">
                Siap membuat CV impian kamu?
                <a href="#" className="btn custom-btn custom-border-btn ms-3">
                  Mulai Gratis Sekarang
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
