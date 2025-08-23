import Image from "next/image";

export default function Browse() {
  return (
    <>
      <section className="explore-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Template CV Berdasarkan Profesi</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="design-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#design-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="design-tab-pane"
                  aria-selected="true"
                >
                  Creative
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="marketing-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#marketing-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="marketing-tab-pane"
                  aria-selected="false"
                >
                  Professional
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="finance-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#finance-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="finance-tab-pane"
                  aria-selected="false"
                >
                  ATS-Friendly
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="music-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#music-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="music-tab-pane"
                  aria-selected="false"
                >
                  Tech
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="education-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#education-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="education-tab-pane"
                  aria-selected="false"
                >
                  Fresh Graduate
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="design-tab-pane"
                  role="tabpanel"
                  aria-labelledby="design-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Graphic Designer</h5>
                              <p className="mb-0">
                                Template kreatif untuk portfolio visual yang menawan
                              </p>
                            </div>
                            <span className="badge bg-design rounded-pill ms-auto">
                              12+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Remote_design_team_re_urdx.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">UI/UX Designer</h5>
                              <p className="mb-0">
                                Template modern untuk showcase product design
                              </p>
                            </div>
                            <span className="badge bg-design rounded-pill ms-auto">
                              8+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Redesign_feedback_re_jvm0.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Content Creator</h5>
                              <p className="mb-0">
                                Template eye-catching untuk social media creator
                              </p>
                            </div>
                            <span className="badge bg-design rounded-pill ms-auto">
                              6+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/colleagues-working-cozy-office-medium-shot.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="marketing-tab-pane"
                  role="tabpanel"
                  aria-labelledby="marketing-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Business Manager</h5>
                              <p className="mb-0">
                                Template profesional untuk eksekutif dan manajer
                              </p>
                            </div>
                            <span className="badge bg-advertising rounded-pill ms-auto">
                              15+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_online_ad_re_ol62.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Sales Executive</h5>
                              <p className="mb-0">
                                Template yang menonjolkan achievement dan results
                              </p>
                            </div>
                            <span className="badge bg-advertising rounded-pill ms-auto">
                              10+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Group_video_re_btu7.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">HR Specialist</h5>
                              <p className="mb-0">
                                Template clean untuk posisi human resources
                              </p>
                            </div>
                            <span className="badge bg-advertising rounded-pill ms-auto">
                              7+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_viral_tweet_gndb.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="finance-tab-pane"
                  role="tabpanel"
                  aria-labelledby="finance-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Corporate ATS</h5>
                              <p className="mb-0">
                                Template yang pass screening system perusahaan besar
                              </p>
                            </div>
                            <span className="badge bg-finance rounded-pill ms-auto">
                              20+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Finance_re_gnv2.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="custom-block custom-block-overlay">
                        <div className="d-flex flex-column h-100">
                          <Image
                            src="/images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={600}
                            height={400}
                          />
                          <div className="custom-block-overlay-text d-flex">
                            <div>
                              <h5 className="text-white mb-2">ATS Optimization</h5>
                              <p className="text-white">
                                Template yang dirancang khusus untuk lolos sistem ATS
                                dengan keyword optimization dan format yang tepat
                              </p>
                              <a
                                href="topics-detail.html"
                                className="btn custom-btn mt-2 mt-lg-3"
                              >
                                Scan CV Gratis
                              </a>
                            </div>
                            <span className="badge bg-finance rounded-pill ms-auto">
                              25
                            </span>
                          </div>
                          <div className="social-share d-flex">
                            <p className="text-white me-4">Share:</p>
                            <ul className="social-icon">
                              <li className="social-icon-item">
                                <a
                                  href="#"
                                  className="social-icon-link bi-twitter"
                                />
                              </li>
                              <li className="social-icon-item">
                                <a
                                  href="#"
                                  className="social-icon-link bi-facebook"
                                />
                              </li>
                              <li className="social-icon-item">
                                <a
                                  href="#"
                                  className="social-icon-link bi-pinterest"
                                />
                              </li>
                            </ul>
                            <a
                              href="#"
                              className="custom-icon bi-bookmark ms-auto"
                            />
                          </div>
                          <div className="section-overlay" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="music-tab-pane"
                  role="tabpanel"
                  aria-labelledby="music-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Software Engineer</h5>
                              <p className="mb-0">
                                Template teknis dengan section untuk projects & skills
                              </p>
                            </div>
                            <span className="badge bg-music rounded-pill ms-auto">
                              25+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Compose_music_re_wpiw.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Data Scientist</h5>
                              <p className="mb-0">
                                Template yang highlight analytical skills & portfolio
                              </p>
                            </div>
                            <span className="badge bg-music rounded-pill ms-auto">
                              12+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_happy_music_g6wc.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">DevOps Engineer</h5>
                              <p className="mb-0">
                                Template untuk tech infrastructure specialist
                              </p>
                            </div>
                            <span className="badge bg-music rounded-pill ms-auto">
                              8+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Podcast_audience_re_4i5q.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="education-tab-pane"
                  role="tabpanel"
                  aria-labelledby="education-tab"
                  tabIndex={0}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Fresh Graduate</h5>
                              <p className="mb-0">
                                Template entry-level untuk lulusan baru tanpa pengalaman
                              </p>
                            </div>
                            <span className="badge bg-education rounded-pill ms-auto">
                              15+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Graduation_re_gthn.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Career Changer</h5>
                              <p className="mb-0">
                                Template untuk transisi karir dengan transferable skills
                              </p>
                            </div>
                            <span className="badge bg-education rounded-pill ms-auto">
                              10+
                            </span>
                          </div>
                          <Image
                            src="/images/topics/undraw_Educator_re_ju47.png"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={400}
                            height={300}
                          />
                        </a>
                      </div>
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
