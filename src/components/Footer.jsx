import React, { useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of meat products do you offer?",
      answer:
        "We offer fresh premium meats including chicken, mutton, beef, seafood, and custom cuts sourced from trusted suppliers.",
    },
    {
      question: "Do you provide home delivery?",
      answer:
        "Yes, we provide hygienic doorstep delivery. You can order online or contact us directly for custom meat cuts.",
    },
    {
      question: "Are your meats halal certified?",
      answer:
        "Yes, our meats are halal certified and processed with strict hygiene and quality standards.",
    },
    {
      question: "Do you have a return or refund policy?",
      answer:
        "If there is any quality issue, contact us within 24 hours and our team will assist you quickly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>Mr.Butcher</h2>
          <p>
            Premium quality meats, freshly cut and delivered right to your
            doorstep. Taste the difference with Mr.Butcher — where freshness
            meets trust.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Groningen, Netherlands</p>
          <p>+31 6 3754 6423</p>
          <p>support@mrbutcher.in</p>
        </div>
      </div>

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

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mr.Butcher. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;