import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Eleodora Pizarro Atelier</h1>
        <p>
          Confección y arreglos personalizados para tu hogar, disfraces y
          prendas únicas hechas a medida.
        </p>

        <motion.a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💬 Pedí tu presupuesto
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
