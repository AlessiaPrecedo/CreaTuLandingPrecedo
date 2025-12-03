import { useParams } from "react-router-dom";
import products from "../../data/products.json";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
