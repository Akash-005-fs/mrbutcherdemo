import React, { useState } from "react";
import "../styles/products.css";
import { useCart } from "../Cartcontext";

import Img1 from "../pictures/tenderloien.jpg";
import Img2 from "../pictures/pichama.jpg";
import Img3 from "../pictures/pillets.jpg";
import Img4 from "../pictures/saude.jpg";
import Img5 from "../pictures/Entrecote-de-boeuf.jpg";
import Img6 from "../pictures/thick sirolin.jpg";
import Img7 from "../pictures/flank.png";
import Img8 from "../pictures/sirolien strips.png";
import Img9 from "../pictures/ribstewmeat.jpg";
import Img10 from "../pictures/brianstocksoup.png";
import Img11 from "../pictures/roastbeef.jpg";
import Img12 from "../pictures/beefstrips.png";
import Img13 from "../pictures/beeftail.png";
import Img14 from "../pictures/buffaloburgers.png";

const availableMeat = [
  { name: "Tenderloin Steak", weight: "1.55 kg", price: 38.50, image: Img1 },
  { name: "Picanha", weight: "2.30 kg", price: 42.00, image: Img2 },
  { name: "Fillet Steak", weight: "3.10 kg", price: 55.00, image: Img3 },
  { name: "Suade", weight: "3.75 kg", price: 29.00, image: Img4 },
  { name: "Entrecôte", weight: "2.41 kg", price: 46.00, image: Img5 },
  { name: "Thick Sirloin", weight: "2.40 kg", price: 44.00, image: Img6 },
  { name: "Flank", weight: "1.40 kg", price: 22.00, image: Img7 },
  { name: "Sirloin Strips", weight: "3.25 kg", price: 48.00, image: Img8 },
  { name: "Rib Stew Meat", weight: "10.75 kg", price: 65.00, image: Img9 },
];

const otherProducts = [
  { name: "Braising Steak", weight: "6.10 kg", price: 35.00, image: Img10 },
  { name: "Roast Beef", weight: "3.60 kg", price: 40.00, image: Img11 },
  { name: "Beef Strips", weight: "15.00 kg", price: 72.00, image: Img12 },
  { name: "Tail", weight: "1.40 kg", price: 18.00, image: Img13 },
  { name: "Buffalo Burgers", weight: "In Stock", price: 14.50, image: Img14 },
];

const ProductCard = ({ item }) => {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = cartItems.find((i) => i.name === item.name);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-wrapper">
        <img src={item.image} alt={item.name} className="recipe-image" />
        {inCart && (
          <div className="card-in-cart-badge">
            {inCart.qty} in cart
          </div>
        )}
      </div>

      <div className="recipe-content">
        <span className="recipe-category">PREMIUM QUALITY</span>

        <h3 className="recipe-title">{item.name}</h3>

        <p className="recipe-description">
          Freshly processed premium meat, carefully selected and prepared to
          ensure the highest quality and taste.
        </p>

        <div className="recipe-footer">
          <div className="recipe-meta">
            <span className="recipe-weight">Available: {item.weight}</span>
            <span className="recipe-price">€{item.price.toFixed(2)}</span>
          </div>

          <button
            className={`add-to-cart-btn ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "+ Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Available Meat Products</h1>
        <p>
          Premium quality buffalo and beef products sourced and processed with
          care.
        </p>
      </div>

      <h2 className="section-title">Premium Cuts</h2>
      <div className="product-grid">
        {availableMeat.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

      <h2 className="section-title">Other Available Products</h2>
      <div className="product-grid">
        {otherProducts.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;