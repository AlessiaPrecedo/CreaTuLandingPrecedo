import React from "react";
import "./CartWidget.css";

function CartWidget({ cart }) {
  const quantity = cart ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0) : 0;

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-badge">{quantity}</span>
    </div>
  );
}

export default CartWidget;