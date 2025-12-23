import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
  const { cart } = useContext(CartContext);

  const quantity = cart.reduce((acc, item) => acc + item.cantidad, 0);

  if (quantity === 0) {
    return (
      <div className="cart-widget">
        <span className="cart-icon">🛒</span>
        <span className="cart-badge">{quantity}</span>
      </div>
    );
  }

  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-badge">{quantity}</span>
    </div>
  );
}

export default CartWidget;
