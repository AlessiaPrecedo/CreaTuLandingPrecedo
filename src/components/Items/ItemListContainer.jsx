import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ItemList from "./ItemList";

function ItemListContainer() {
  const { categoryId } = useParams();

  const filteredProducts = categoryId
    ? products.filter(p => p.category === categoryId)
    : products;

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
}

export default ItemListContainer;