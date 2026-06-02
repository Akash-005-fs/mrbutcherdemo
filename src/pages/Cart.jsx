import React, { useState } from "react";
import { useCart } from "../Cartcontext";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const WHATSAPP_NUMBER = "31637546423";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!customerName.trim()) e.name = "Please enter your name.";
    if (!customerPhone.trim()) e.phone = "Please enter your phone number.";
    return e;
  };

  const handleOrder = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    // Build message FIRST before clearing cart
    const lines = cartItems.map(
      (item) =>
        `• ${item.name} (${item.weight}) x${item.qty} — €${(item.price * item.qty).toFixed(2)}`
    );

    const messageParts = [
      "🥩 *New Order from MrButcher NL Website*",
      "",
      `👤 *Customer:* ${customerName}`,
      `📞 *Phone:* ${customerPhone}`,
      "",
      "🛒 *Order Details:*",
      ...lines,
      "",
      `💰 *Total: €${totalPrice.toFixed(2)}*`,
    ];

    if (note.trim()) {
      messageParts.push(`📝 *Note:* ${note}`);
    }

    messageParts.push("", "Please confirm availability and delivery details. Thank you!");

    const message = messageParts.join("\n");
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    // Open WhatsApp FIRST, then clear cart and navigate
    window.open(url, "_blank");

    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-inner">
          <span className="cart-empty-icon">🛒</span>
          <h2>Your cart is empty</h2>
          <p>Browse our premium cuts and add something delicious.</p>
          <button className="cart-back-btn" onClick={() => navigate("/")}>
            ← Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <button className="cart-back-btn" onClick={() => navigate("/")}>
          ← Continue Shopping
        </button>
        <h1>Your Order</h1>
        <button className="cart-clear-btn" onClick={clearCart}>
          Clear All
        </button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <div className="cart-item-img-wrap">
                <img src={item.image} alt={item.name} className="cart-item-img" />
              </div>

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-weight">{item.weight}</p>
                <p className="cart-item-unit-price">€{item.price.toFixed(2)} / unit</p>
              </div>

              <div className="cart-item-controls">
                <div className="qty-control">
                  <button onClick={() => updateQty(item.name, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.name, item.qty + 1)}>+</button>
                </div>
                <p className="cart-item-subtotal">
                  €{(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.name)}
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-lines">
            {cartItems.map((item) => (
              <div className="summary-line" key={item.name}>
                <span>{item.name} × {item.qty}</span>
                <span>€{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>

          <div className="checkout-form">
            <h3>Your Details</h3>

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                placeholder="e.g. Jan de Vries"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Phone / WhatsApp *</label>
              <input
                type="tel"
                placeholder="e.g. +31 6 12345678"
                value={customerPhone}
                onChange={(e) => {
                  setCustomerPhone(e.target.value);
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>Note (optional)</label>
              <textarea
                placeholder="Delivery preferences, special requests..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <button className="whatsapp-order-btn" onClick={handleOrder}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Order via WhatsApp
          </button>

          <p className="checkout-note">
            Clicking the button will open WhatsApp with your order pre-filled. The owner will confirm availability and delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;