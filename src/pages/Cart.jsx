import { useEffect, useState } from "react";


function Cart() {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Guardar cambios en localStorage
  const updateLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  // Eliminar un producto del carrito
  const eliminarItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    updateLocalStorage(newCart);
  };

  // Vaciar carrito completo
  const vaciarCarrito = () => {
    updateLocalStorage([]);
  };

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h2>Carrito de compras</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.cantidad}</p>
          <p>Subtotal: ${item.price * item.cantidad}</p>

          <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;