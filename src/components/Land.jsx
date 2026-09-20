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

        {/* Right side: cart always visible + 2-bar hamburger */}
        <div className="header-right">
          <Link to="/cart" className="nav-cart-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              width="22" height="22">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && (
              <span className="nav-cart-badge">{totalItems}</span>
            )}
          </Link>

          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>

        {/* Dropdown nav */}
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ol>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
          </ol>
        </nav>
      </header>

      {/* Backdrop overlay — closes menu on tap outside */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      <main className="mainland">
        <div className='t1'>
          <div className='imgmain'><div className='imgw2'></div></div>

          {/* Tagline + CTA */}
          <p className="hero-tagline">Experience Premium Buffalo Meat</p>
          <Link to="/products" className="hero-cta">Browse Products</Link>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-down">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="16" height="16">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>

        <div className="overlay">
          <video className="video-fill" src={demoVideo} autoPlay muted loop playsInline />
        </div>
      </main>
    </div>
  );
}

export default Land;