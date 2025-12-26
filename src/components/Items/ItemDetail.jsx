import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Items.css';

function ItemDetail({ product }) {
  if (!product) return <p>Producto no encontrado</p>;

  const { addToCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const agregarAlCarrito = () => {
    addToCart({ ...product, cantidad });
  };

  return (
    <div className="detalle-producto">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>
        <span>Precio:</span> ${product.price}
      </p>

      <p>
        <span>Categoría:</span> {product.category}
      </p>

      <div className="detalle-cantidad">
        <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>
          -
        </button>
        <span>{cantidad}</span>
        <button onClick={() => setCantidad((c) => c + 1)}>+</button>
      </div>

      <button className="agregar" onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;
