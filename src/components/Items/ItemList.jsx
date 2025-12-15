import Item from './Item';
import './items.css';

const ItemList = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
};
export default ItemList;
