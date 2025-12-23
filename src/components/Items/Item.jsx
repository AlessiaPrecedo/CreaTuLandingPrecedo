import { NavLink } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.title}</h3>
      <p className="product-price">${product.price}</p>

      <NavLink to={`/item/${product.id}`} className="product-btn">
        Ver detalle
      </NavLink>
    </div>
  );
};

export default Item;
