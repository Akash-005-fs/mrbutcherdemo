import React from "react";
import "../styles/parallax.css";

import beefImg from "../pictures/b1.png";
import steakImg from "../pictures/b2.png";
import ribsImg from "../pictures/b3.png";

const cuts = [
  {
    id: 1,
    image: beefImg,
    label: "01",
    heading: "Fresh Beef",
    sub: "Cuts",
    tag: "Daily sourced",
  },
  {
    id: 2,
    image: steakImg,
    label: "02",
    heading: "Steak",
    sub: "Perfection",
    tag: "Dry-aged selection",
  },
  {
    id: 3,
    image: ribsImg,
    label: "03",
    heading: "Tender",
    sub: "Ribs",
    tag: "Slow-cut craft",
  },
];

const Parallax = () => {
  return (
    <section className="showcase">
      {cuts.map((cut) => (
        <div className="showcase-row" key={cut.id}>
          <div className="showcase-img-wrap">
            <img src={cut.image} alt={cut.heading} className="showcase-img" />
          </div>
          <div className="showcase-content">
            <span className="showcase-label">{cut.label}</span>
            <h2 className="showcase-heading">
              {cut.heading}
              <span className="showcase-heading-outline">{cut.sub}</span>
            </h2>
            <span className="showcase-tag">{cut.tag}</span>
          </div>
          <div className="showcase-divider" />
        </div>
      ))}
    </section>
  );
};

export default Parallax;