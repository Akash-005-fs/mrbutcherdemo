import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import Land from "../components/Land";
import Products from "../pages/Products.jsx";
import Footer from "../components/Footer.jsx";
import Parallax from "../components/Parallax.jsx";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = wrapperRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mainwrapper" ref={wrapperRef}>
      <Land />

      <div className="section1">
        <div className="m1"></div>

        <div className="m2">
          <div className="mleft reveal left">
            <h1 className="reveal">Mr. Butcher NL</h1>
            <p className="reveal">
              Premium cuts.<br />
              Dutch quality.<br />
              Delivered fresh, always.
            </p>
          </div>

          <div className="mright reveal right">
            <h1 className="reveal">Local & Honest</h1>
            <p className="reveal">
              Ethically sourced meat<br />
              from trusted farms<br />
              across the Netherlands.
            </p>
          </div>
        </div>
      </div>

      <div className="section2">
        <Products />
      </div>

      <Parallax />
      <Footer />

      {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/31637546423?text=Hello%20MrButcher!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default Home;
