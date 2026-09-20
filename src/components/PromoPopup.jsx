import React, { useState, useEffect } from "react";
import "../styles/PromoPopup.css";
import { Link } from "react-router-dom";

const PromoPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 16000); // 16 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={() => setVisible(false)}>
      <div className="popup-modal" onClick={(e) => e.stopPropagation()}>

        {/* LEFT — meat photo */}
        <div className="popup-left">
          <div className="popup-img" />
        </div>

        {/* RIGHT — offer content */}
        <div className="popup-right">
          <button className="popup-close" onClick={() => setVisible(false)}>✕</button>

          {/* Logo */}
          <div className="popup-logo" />

          <h2 className="popup-headline">Get 10% Off</h2>
          <p className="popup-sub">On your first order</p>

          <p className="popup-body">
            Premium buffalo meat, ethically sourced and delivered fresh to your door.
            Use code at checkout and enjoy the finest cuts from Mr. Butcher.
          </p>
{/* 
          <div className="popup-code-box">
            <span className="popup-code-label">Use code</span>
            <span className="popup-code">FIRST10</span>
          </div> */}

          <Link to="/products" className="popup-btn" onClick={() => setVisible(false)}>
            Shop Now
          </Link>

          {/* <button className="popup-skip" onClick={() => setVisible(false)}>
            No thanks, I'll pay full price
          </button> */}
        </div>

      </div>
    </div>
  );
};

export default PromoPopup;