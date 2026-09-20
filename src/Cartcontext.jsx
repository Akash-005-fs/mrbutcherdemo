import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("mrbutcher_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("mrbutcher_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.name === product.name && i.weight === product.weight
      );
      if (existing) {
        return prev.map((i) =>
          i.name === product.name && i.weight === product.weight
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (name, weight) => {
    setCartItems((prev) =>
      prev.filter((i) => !(i.name === name && i.weight === weight))
    );
  };

  const updateQty = (name, weight, qty) => {
    if (qty < 1) return removeFromCart(name, weight);
    setCartItems((prev) =>
      prev.map((i) =>
        i.name === name && i.weight === weight ? { ...i, qty } : i
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("mrbutcher_cart");
  };

  const totalItems = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);