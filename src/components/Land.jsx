import React, { useState } from 'react';
import "../styles/land.css";
import demoVideo from '../videos/mrbutcherv1.mp4';
import { Link } from 'react-router-dom';
import { useCart } from '../Cartcontext';

function Land() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <div className='land'>
      <header className='header'>
        <div className='logo'>
          <div className='imgw'></div>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ol>
            <li><Link to="/products">PRODUCT'S</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li>
              <Link to="/cart" className="nav-cart-link">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="20"
                  height="20"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                {totalItems > 0 && (
                  <span className="nav-cart-badge">{totalItems}</span>
                )}
              </Link>
            </li>
          </ol>
        </nav>
      </header>

      <main className="mainland">
        <div className='t1'>
          <div className='imgmain'><div className='imgw2'></div></div>
        </div>

        <div className="overlay">
          <video
            className="video-fill"
            src={demoVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </main>
    </div>
  );
}

export default Land;