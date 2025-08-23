export default function Contact() {
  return (
    <>
      <section
        className="contact-section section-padding section-bg"
        id="section_5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-5">Kontak & Partnership</h2>
            </div>

            <div className="col-lg-5 col-12 mb-4 mb-lg-0">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
              <h4 className="mb-3">General Support</h4>

              <p>
                Bantu pengguna dengan pertanyaan seputar CV building dan platform
              </p>

              <hr />

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">WhatsApp</span>

                <a href="https://wa.me/6281234567890" className="site-footer-link">
                  +62 812-3456-7890
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:support@tugaskita.com" className="site-footer-link">
                  support@tugaskita.com
                </a>
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mx-auto">
              <h4 className="mb-3">Recruiter Partnership</h4>

              <p>Cari talent terbaik? Kerjasama dengan kami untuk akses database CV berkualitas</p>

              <hr />

              <p className="d-flex align-items-center mb-1">
                <span className="me-2">Business</span>

                <a href="https://wa.me/6281234567891" className="site-footer-link">
                  +62 812-3456-7891
                </a>
              </p>

              <p className="d-flex align-items-center">
                <span className="me-2">Email</span>

                <a href="mailto:partnership@tugaskita.com" className="site-footer-link">
                  partnership@tugaskita.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
