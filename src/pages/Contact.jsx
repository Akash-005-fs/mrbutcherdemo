import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact.css";
import contactBanner from "../pictures/beefdemopic.png"; // Replace with your actual image

function Contact() {
  const navigate = useNavigate();

  return (
    <div className="contact-page">
      {/* --- BACK BUTTON --- */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>

      {/* --- BACKGROUND --- */}
      <div className="contact-bg">
        <img src={contactBanner} alt="Contact Banner" />
        <div className="overlay"></div>
      </div>

      {/* --- CONTACT CONTENT --- */}
      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p>
            📞 Call us now at <a href="tel:+31637546423">+31 6 3754 6423</a>
          </p>
          <p>
            📧 Email:{" "}
            <a href="mailto:demalabarkitchen@gmail.com">
              demalabarkitchen@gmail.com
            </a>
          </p>
          <p>📍 Gronigen , Netherlands</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
