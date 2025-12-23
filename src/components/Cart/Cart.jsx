import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';

function Cart() {
  const { cart, removeItem, clearCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center' }}>El carrito está vacío 🛒</h2>;
  }

  const finalizarCompra = () => {
    alert('¡Compra realizada con éxito! 🎉');
    clearCart();
  };

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: ${item.price}</p>
            <p>Subtotal: ${item.price * item.cantidad}</p>
          </div>

          <button className="remove-item" onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${getTotal()}</h3>

        <div className="cart-buttons">
          <button className="clear-cart" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button className="finish-cart" onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
