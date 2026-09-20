import React, { useEffect, useRef } from "react";
import "../styles/aboutus.css";

import img1 from "../pictures/beefstrips.png";
import img2 from "../pictures/beeftail.png";
import img3 from "../pictures/AR.JPG";
import img4 from "../pictures/pichama.jpg";

import { Link } from "react-router-dom";

const AboutUs = () => {
  const fadeRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const els = fadeRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => el && observer.observe(el));

    return () => {
      els.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <main className="about-page">
      <Link to="/" className="about-back-btn">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back
      </Link>

      <section
        className="about-hero fade-in"
        ref={(el) => (fadeRefs.current[0] = el)}
      >
        <img src={img4} alt="Premium buffalo meat" className="about-hero-img" />

        <div className="about-hero-overlay">
          <p className="about-eyebrow">Our Story</p>

          <h1 className="about-hero-title">
            Born from Kerala taste.
            <br />
            Crafted in the Netherlands.
          </h1>

          <p className="about-hero-subtitle">
            Mr. Butcher brings carefully selected premium buffalo meat to people
            who value real flavour, freshness, and honest food culture.
          </p>
        </div>
      </section>

      <section className="about-story-section">
        <div
          className="about-story-text fade-in"
          ref={(el) => (fadeRefs.current[1] = el)}
        >
          <span className="about-label">01 — Why we started</span>

          <h2>
            A search for the buffalo meat taste Arun Rajan grew up with.
          </h2>

          <p>
            Founded by <strong>Arun Rajan</strong>,{" "}
            <strong>Mr. Butcher</strong> was inspired by the flavors of{" "}
            <strong>Kerala, India</strong>, where porotta and buffalo meat is a
            cherished culinary tradition.
          </p>

          <p>
            After moving to the <strong>Netherlands</strong>, Arun searched for
            the authentic taste of buffalo meat he grew up with but found it
            difficult to source. As a passionate home cook and food enthusiast,
            he explored farms across the country until he discovered a premium
            buffalo farm that met his standards for quality, taste, and
            sustainability.
          </p>

          <p>
            That journey led to the creation of <strong>Mr. Butcher</strong> —
            bringing carefully selected, premium buffalo meat to customers who
            appreciate exceptional flavor and quality.
          </p>
        </div>

        <div
          className="about-story-image fade-in"
          ref={(el) => (fadeRefs.current[2] = el)}
        >
          <img src={img3} alt="Arun Rajan" />
          <span>Founder / Arun Rajan</span>
        </div>
      </section>

      <section
        className="about-wide-message fade-in"
        ref={(el) => (fadeRefs.current[3] = el)}
      >
        <h2>
          From Kerala’s rich food culture to the Netherlands, Mr. Butcher is
          dedicated to delivering the authentic buffalo meat experience.
        </h2>
      </section>

      <section className="about-image-strip">
        <div
          className="about-strip-card fade-in"
          ref={(el) => (fadeRefs.current[4] = el)}
        >
          <img src={img1} alt="Buffalo meat strips" />
          <div>
            <span>Premium Cuts</span>
            <h3>Selected with care</h3>
          </div>
        </div>

        <div
          className="about-strip-card fade-in"
          ref={(el) => (fadeRefs.current[5] = el)}
        >
          <img src={img2} alt="Buffalo tail" />
          <div>
            <span>Slow Cooking</span>
            <h3>Deep traditional flavour</h3>
          </div>
        </div>
      </section>

      <section
        className="about-values fade-in"
        ref={(el) => (fadeRefs.current[6] = el)}
      >
        <span className="about-label">02 — What we stand for</span>

        <div className="about-values-grid">
          {[
            {
              title: "Authentic Taste",
              desc: "Inspired by Kerala’s love for porotta and buffalo meat.",
            },
            {
              title: "Premium Selection",
              desc: "Carefully sourced buffalo meat selected for taste and quality.",
            },
            {
              title: "Fresh Craft",
              desc: "Prepared with care, hygiene, and respect for real flavour.",
            },
          ].map((item) => (
            <div className="about-value-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutUs;