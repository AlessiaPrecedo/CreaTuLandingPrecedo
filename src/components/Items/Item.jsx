import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="producto-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/producto/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
