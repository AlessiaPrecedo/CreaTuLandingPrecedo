import { useState } from 'react';

function ItemDetail({ product }) {
  if (!product) return <p>Producto no encontrado</p>;

  const [cantidad, setCantidad] = useState(1);

  const agregarAlCarrito = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const itemExistente = cart.find((item) => item.id === product.id);

    if (itemExistente) {
      itemExistente.cantidad += cantidad;
    } else {
      cart.push({ ...product, cantidad });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Producto agregado al carrito');
  };

  return (
    <div className="detalle-producto">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>

      <div>
        <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>
          -
        </button>
        <span style={{ margin: '0 10px' }}>{cantidad}</span>
        <button onClick={() => setCantidad((c) => c + 1)}>+</button>
      </div>

      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
