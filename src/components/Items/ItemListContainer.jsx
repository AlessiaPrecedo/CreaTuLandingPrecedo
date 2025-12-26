import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from './ItemList';
import './Items.css';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, 'products');

    const q =
      !categoryId || categoryId === 'productos'
        ? productsRef
        : query(productsRef, where('category', '==', categoryId));

    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFilteredProducts(items);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <h2 className="titulo-categoria">
        {categoryId ? categoryId : 'Todos los productos'}
      </h2>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <ItemList products={filteredProducts} />
      )}
    </div>
  );
}

export default ItemListContainer;
