import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { auth } from '../firebase/config';
import './Loginadmin.css';
import SEO from '../components/SEO';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <>
      <SEO
        title="Login Admin | Eleodora Pizarro Atelier"
        description="Panel de administración para gestionar mensajes."
        image="https://eleodorapizarroatelier.web.app/images/SEO/logo.png"
        url="https://eleodorapizarroatelier.web.app/login"
      />
      <motion.div
        className="login-admin-page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Panel Admin</h1>
        <p>Ingresar como administrador</p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Ingresar</button>
        </form>
      </motion.div>
    </>
  );
}

export default LoginAdmin;
