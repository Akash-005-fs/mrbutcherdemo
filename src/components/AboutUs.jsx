import React from 'react';
import '../styles/aboutus.css';
import img1 from '../pictures/beefstrips.png';
import img2 from '../pictures/beeftail.png';
import img3 from '../pictures/AR.JPG';
import img4 from '../pictures/pichama.jpg';

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <span className="tagline">Our Story</span>
        <h2>Mr.Butcher</h2>
      <p>
          Founded by <strong>Arun Rajan</strong>, <strong>Mr. Butcher</strong> is a proudly established butcher shop based in the <strong>Netherlands</strong>. 
          What began as a small family-run business driven by passion for premium-quality meat has grown into a trusted name among meat lovers and culinary professionals alike.
        </p>

        <p>
          At Mr. Butcher, we believe in offering nothing but the best — from carefully selected cuts to ethically sourced and freshly prepared meat products. 
          Our goal is to blend traditional butchery craftsmanship with modern hygiene standards, ensuring every customer receives quality, freshness, and satisfaction in every bite.
        </p>
      </div>

      <div className="about-grid">
        <img src={img1} alt="about 1" />
        <img src={img2} alt="about 2" />
        <img src={img3} alt="about 3" />
        <img src={img4} alt="about 4" />
      </div>
    </section>
  );
};

export default AboutUs;
