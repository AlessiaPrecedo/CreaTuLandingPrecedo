import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import './Navbar.css';

function Navbar({ user }) {
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* LOGO */}
      <img className="logo1" src="/images/SEO/logo.png" alt="" />
      <h2 className="logo">Eleodora Pizarro Atelier</h2>

      {/* HAMBURGUESA */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* LINKS */}
      <AnimatePresence>
        {(open || window.innerWidth > 768) && (
          <motion.ul
            className={`nav-links ${open ? 'open' : ''}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/servicios" onClick={() => setOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setOpen(false)}>
                Contacto
              </Link>
            </li>

            {user ? (
              <>
                <li>
                  <Link to="/admin" onClick={() => setOpen(false)}>
                    Admin
                  </Link>
                </li>
                <li>
                  <motion.button
                    className="logout-btn"
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Cerrar sesión
                  </motion.button>
                </li>
              </>
            ) : (
              <li className="secret-login">
                <Link to="/Admin" onClick={() => setOpen(false)} title="Acceso">
                  🔒
                </Link>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
