import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase/config';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Admin from './pages/Admin';
import LoginAdmin from './pages/LoginAdmin';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function AnimatedRoutes({ user }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />

        <Route path="/admin" element={user ? <Admin /> : <LoginAdmin />} />
      </Routes>
    </AnimatePresence>
  );
}

function Layout({ user }) {
  const location = useLocation();
  const hideWhatsApp = location.pathname === '/admin';

  return (
    <>
      <Navbar user={user} />
      <AnimatedRoutes user={user} />
      {!hideWhatsApp && <WhatsAppButton />}
      <Footer />
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <BrowserRouter>
      <Layout user={user} />
    </BrowserRouter>
  );
}

export default App;
