import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './cart.css';

function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  const finalizarCompra = () => {
    if (cart.length === 0) return;

    alert('🎉 ¡Compra realizada con éxito!');
    clearCart();
  };

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío 🛒</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h4>{item.name}</h4>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio: ${item.price}</p>
            </div>
          ))}

          <button onClick={finalizarCompra}>Finalizar compra</button>
        </>
      )}
    </div>
  );
}

export default Cart;
