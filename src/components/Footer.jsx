import React, { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of meat products do you offer?",
      answer:
        "We offer a wide range of fresh and high-quality meats — including chicken, mutton, beef, and seafood — all sourced from trusted farms.",
    },
    {
      question: "Do you provide home delivery?",
      answer:
        "Yes, we provide fast and hygienic doorstep delivery. You can order online or contact us directly for custom cuts.",
    },
    {
      question: "Are your meats halal certified?",
      answer:
        "Absolutely! All our meats are 100% halal certified and hygienically processed following strict standards.",
    },
    {
      question: "Do you have a return or refund policy?",
      answer:
        "We ensure the highest quality. However, in case of issues, you can reach out to us within 24 hours for assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      {/* --- TOP SECTION --- */}
      <div className="footer-top">
        <div className="footer-about">
          <h2 className="footer-logo">Mr.Butcher</h2>
          <p>
            Premium quality meats, freshly cut and delivered right to your
            doorstep. Taste the difference with Mr.Butcher — where freshness
            meets trust.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Gronigen,Netherlands</p>
          <p>📞 +31 6 3754 6423</p>
          <p>📧 support@mrbutcher.in</p>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mr.Butcher. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
