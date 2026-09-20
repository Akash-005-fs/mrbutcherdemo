import React from 'react'
import "../styles/why.css"

const features = [
  { icon: "ti-meat", label: "High in protein" },
  { icon: "ti-droplet-off", label: "Lower fat than beef" },
  { icon: "ti-pill", label: "Rich in iron & vitamins" },
  { icon: "ti-leaf", label: "Sustainably sourced" },
  { icon: "ti-rosette-discount-check", label: "Unique premium taste" },
];

function Why() {
  return (
    <div className="why-bar">
      {features.map((f, i) => (
        <div className="why-item" key={i}>
          <i className={`ti ${f.icon} why-icon`} aria-hidden="true"></i>
          <span className="why-label">{f.label}</span>
        </div>
      ))}
    </div>
  )
}

export default Why