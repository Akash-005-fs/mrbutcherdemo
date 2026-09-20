import React from "react";
import "../styles/brochure.css";
import mainLogo from "../pictures/mainlogo.png";

import collageImgOne from "../pictures/beefstrips.png";
import collageImgTwo from "../pictures/pichama.jpg";
import collageImgThree from "../pictures/tenderloien.jpg";

import collageImgFour from "../pictures/Entrecote-de-boeuf.jpg";
import Img3 from "../pictures/ribeye.png";
import Img4 from "../pictures/pillets.jpg";

import Img6 from "../pictures/thick sirolin.jpg";
import Img7 from "../pictures/flank.png";

import Img9 from "../pictures/saude.jpg";
import Img10 from "../pictures/sirolien strips.png";
import Img11 from "../pictures/beeftail.png";
import Img12 from "../pictures/roastbeef.jpg";
import Img13 from "../pictures/ribstewmeat.jpg";
import Img14 from "../pictures/beefribslappen.jpg";
import Img15 from "../pictures/Patty__1_.jpg";
import pdf from "../docs/Mr_Butcher_Print_Price_List_2026.pdf"
// Top row: first 8 photos
const topRowImages = [
  collageImgOne,
  collageImgTwo,
  collageImgThree,
  collageImgFour,
  Img3,
  Img4,
  Img6,
  Img7,
];

// Bottom row: remaining 7 photos
const bottomRowImages = [Img9, Img10, Img11, Img12, Img13, Img14, Img15];
function BrochureBanner({ 
  roleLine = "Premium Meats. Perfectly Cut.", 
  contactLine = "www.mrbutcher.eu", 
  priceListPdf = pdf 
}) {
  // Duplicate each row's sequence once — the animation runs 0% -> -50%,
  // so the duplicate lines up perfectly and the loop has no visible seam.
  const topTrack = [...topRowImages, ...topRowImages
   , ...topRowImages, ...topRowImages
  ];
  const bottomTrack = [...bottomRowImages, ...bottomRowImages,
    ...bottomRowImages, ...bottomRowImages
  ];

  return (
    <section className="mrb-banner">
      <div className="mrb-banner__carousel">
        <div className="mrb-banner__row">
          <div className="mrb-banner__track mrb-banner__track--left">
            {topTrack.map((src, i) => (
              <img
                className="mrb-banner__thumb"
                key={`top-${i}`}
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="mrb-banner__row">
          <div className="mrb-banner__track mrb-banner__track--right">
            {bottomTrack.map((src, i) => (
              <img
                className="mrb-banner__thumb"
                key={`bottom-${i}`}
                src={src}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mrb-banner__panel">
        <img className="mrb-banner__logo" src={mainLogo} alt="Mr. Butcher" />
        <p className="mrb-banner__eyebrow">The Full Collection, On Paper</p>
        <p className="mrb-banner__role">{roleLine}</p>
        <p className="mrb-banner__contact">{contactLine}</p>
        <a className="mrb-banner__cta" href={priceListPdf} download>
          Download Brochure
        </a>
      </div>
    </section>
  );
}

export default BrochureBanner;