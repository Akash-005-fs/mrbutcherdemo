import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import Land from "../components/Land";
import Products from "../pages/Products.jsx";
import Footer from "../components/Footer.jsx";
import Brochure from "../components/Brochure.jsx";
import Parallax from "../components/Parallax.jsx";
import PromoPopup from "../components/PromoPopup";
import { FaWhatsapp } from "react-icons/fa";
import Why from "../components/Why.jsx";
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
      <PromoPopup />
<div className="section1">
  <div className="m1"></div>
  <div className="text-block">
    <p className="big-text reveal right">
      Ethically sourced meat from trusted farms across the{" "}
      <span className="flag-inline">
        <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands flag" className="nl-flag" />
      </span>
      Netherlands.
    </p>
  </div>
</div>

<Why />

      <div className="section2">
        <Products />
      </div>



<Brochure/>



      {/* <Parallax /> */}
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
