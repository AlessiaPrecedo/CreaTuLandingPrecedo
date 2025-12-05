import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import About from './pages/about';
import Contact from './pages/Contact';

import Cart from "./pages/Cart";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      {/* Pasamos cart al NavBar para que el CartWidget pueda mostrar la cantidad */}
      <NavBar cart={cart} />

      <Routes>

        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />

        {/* Pasamos addToCart como prop al container de detalle */}
        <Route
          path="/producto/:id"
          element={<ItemDetailContainer addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Pasamos el carrito al componente Cart para que muestre los items */}
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;