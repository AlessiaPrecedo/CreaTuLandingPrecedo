import Item from "./Item";

function ItemList({ products }) {
  return (
    <div className="lista-productos">
      {products.map(p => (
        <Item key={p.id} product={p}/>
      ))}
    </div>
  );
}

export default ItemList;
