import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
      .then((resp) => {
        if (resp.exists()) {
          setProduct({ id: resp.id, ...resp.data() });
        } else {
          setProduct(null);
        }
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
