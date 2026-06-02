import React from "react";
import "../styles/parallax.css";

// ✅ Import your local images here
import beefImg from "../pictures/b1.png";
import steakImg from "../pictures/b2.png";
import ribsImg from "../pictures/b3.png";

const Parallax = () => {
  const parallaxImages = [
    { id: 1, image: beefImg, title: "Fresh Beef Cuts" },
    { id: 2, image: steakImg, title: "Steak Perfection" },
    { id: 3, image: ribsImg, title: "Tender Ribs" },
  ];

  return (
    <div className="parallax-wrapper">
      {parallaxImages.map((item) => (
        <section
          key={item.id}
          className="parallax"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="parallax-text">
            <h2>{item.title}</h2>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Parallax;
