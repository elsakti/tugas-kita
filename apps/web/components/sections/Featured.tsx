"use client";

import Link from "next/link";
import "../../public/css/featured-card.css";

export default function Featured() {
  return (
    <>
      <section className="featured-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12 mb-4 mb-lg-0">
              <div
                className="custom-block bg-white shadow-lg"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
                  borderRadius: "20px",
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  const overlay = card.querySelector(
                    ".hover-overlay"
                  ) as HTMLElement;
                  const scanButton = card.querySelector(
                    ".scan-button"
                  ) as HTMLElement;
                  const particles = card.querySelectorAll(
                    ".particle"
                  ) as NodeListOf<HTMLElement>;
                  const scanLine = card.querySelector(
                    ".scan-line"
                  ) as HTMLElement;

                  // Card transform
                  card.style.transform =
                    "translateY(-20px) rotateX(8deg) rotateY(-5deg)";
                  card.style.boxShadow =
                  "0 40px 80px rgba(255, 255, 255, 0.3), 0 20px 40px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)";

                  // Show overlay with stagger
                  if (overlay) {
                    overlay.style.opacity = "1";
                    overlay.style.transform = "translateY(0)";
                  }

                  // Animate scan button
                  setTimeout(() => {
                    if (scanButton) {
                      scanButton.style.opacity = "1";
                      scanButton.style.transform = "translateY(0) scale(1)";
                      scanButton.style.filter = "blur(0px)";
                    }
                  }, 200);

                  // Activate particles
                  particles.forEach((particle, i) => {
                    setTimeout(() => {
                      if (particle) {
                        particle.style.opacity = "1";
                        particle.style.transform = `translateY(${-Math.random() * 50 - 20}px) translateX(${Math.random() * 40 - 20}px) scale(1)`;
                      }
                    }, i * 100);
                  });

                  // Scan line animation
                  if (scanLine) {
                    scanLine.style.animation =
                      "scanVertical 2s ease-in-out infinite";
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  const overlay = card.querySelector(
                    ".hover-overlay"
                  ) as HTMLElement;
                  const scanButton = card.querySelector(
                    ".scan-button"
                  ) as HTMLElement;
                  const particles = card.querySelectorAll(
                    ".particle"
                  ) as NodeListOf<HTMLElement>;
                  const scanLine = card.querySelector(
                    ".scan-line"
                  ) as HTMLElement;

                  // Reset card transform
                  card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
                  card.style.boxShadow = "0 10px 25px rgba(255, 255, 255, 0.15), 0 5px 15px rgba(255, 255, 255, 0.1)";

                  // Hide overlay
                  if (overlay) {
                    overlay.style.opacity = "0";
                    overlay.style.transform = "translateY(20px)";
                  }

                  // Reset scan button
                  if (scanButton) {
                    scanButton.style.opacity = "0";
                    scanButton.style.transform = "translateY(30px) scale(0.8)";
                    scanButton.style.filter = "blur(10px)";
                  }

                  // Reset particles
                  particles.forEach((particle) => {
                    if (particle) {
                      particle.style.opacity = "0";
                      particle.style.transform =
                        "translateY(20px) translateX(0) scale(0)";
                    }
                  });

                  // Stop scan line
                  if (scanLine) {
                    scanLine.style.animation = "none";
                  }
                }}
              >
                <Link href="/topics-detail">
                  <div
                    className="d-flex"
                    style={{ padding: "2rem", zIndex: 2, position: "relative" }}
                  >
                    <div>
                      <h5
                        className="mb-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #66d8eaff 0%, #764ba2 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "700",
                        }}
                      >
                        AI-Powered CV Analysis
                      </h5>
                      <p
                        className="mb-0"
                        style={{ color: "#64748b", lineHeight: "1.6" }}
                      >
                        Get instant feedback with our smart AI scanner, Boost
                        your ATS score.
                        <br />
                        <b>HOVER ME</b>
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Hover Overlay */}
                <div
                  className="hover-overlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(138, 207, 253, 0.95) 50%, rgba(56, 182, 255, 0.95) 100%)",
                    opacity: 0,
                    transform: "translateY(20px)",
                    transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    zIndex: 10,
                    borderRadius: "20px",
                  }}
                >
                  {/* Scan Line */}
                  <div
                    className="scan-line"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                      boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                    }}
                  />

                  {/* Animated Particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="particle"
                      style={{
                        position: "absolute",
                        width: "4px",
                        height: "4px",
                        background: "rgba(255,255,255,0.8)",
                        borderRadius: "50%",
                        opacity: 0,
                        transform: "translateY(20px) scale(0)",
                        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1) ${i * 0.1}s`,
                        left: `${20 + i * 10}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        boxShadow: "0 0 15px rgba(255,255,255,0.6)",
                      }}
                    />
                  ))}

                  {/* CTA Button */}
                  <button
                    className="scan-button"
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(20px)",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "60px",
                      padding: "20px 40px",
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "600",
                      cursor: "pointer",
                      opacity: 0,
                      transform: "translateY(30px) scale(0.8)",
                      filter: "blur(10px)",
                      transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
                      position: "relative",
                      overflow: "hidden",
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      boxShadow:
                        "0 15px 35px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = "translateY(0) scale(1.05)";
                      target.style.background = "rgba(255, 255, 255, 0.3)";
                      target.style.boxShadow =
                        "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.transform = "translateY(0) scale(1)";
                      target.style.background = "rgba(255, 255, 255, 0.2)";
                      target.style.boxShadow =
                        "0 15px 35px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)";
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Add your CV scan logic here
                      alert(
                        "CV Scanner activated! Upload your CV to get started."
                      );
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 2 }}>
                      📄 Scan Your CV Now
                    </span>
                    {/* Button glow effect */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "0",
                        height: "0",
                        background:
                          "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                        borderRadius: "50%",
                        transition: "all 0.6s ease",
                        pointerEvents: "none",
                      }}
                    />
                  </button>

                  {/* Subtitle */}
                  <p
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "15px",
                      fontSize: "14px",
                      textAlign: "center",
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                      opacity: 0,
                      animation: "fadeInUp 0.8s ease 0.5s forwards",
                    }}
                  >
                    AI analysis in seconds ✨
                  </p>
                </div>

                {/* Decorative Elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))",
                    borderRadius: "50%",
                    transition: "all 0.6s ease",
                    zIndex: 1,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    left: "20px",
                    width: "40px",
                    height: "40px",
                    background:
                      "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
                    borderRadius: "50%",
                    transition: "all 0.6s ease",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="custom-block custom-block-overlay">
                <div className="d-flex flex-column h-100">
                  <div className="custom-block-overlay-text d-flex">
                    <div>
                      <h5 className="text-white mb-2">
                        Build Your Professional CV
                      </h5>

                      <p className="text-white">
                        Choose from a variety of ATS-friendly templates and
                        create a stunning CV tailored to your career goals in
                        minutes, powered by AI assistance.
                      </p>

                      <Link
                        href="/topics-detail"
                        className="btn custom-btn mt-2 mt-lg-3"
                      >
                        Start Building Your CV
                      </Link>
                    </div>
                  </div>

                  <div className="section-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
