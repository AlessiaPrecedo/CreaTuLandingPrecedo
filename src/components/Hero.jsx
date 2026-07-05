import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: 'easeOut' },
});

function Hero() {
  return (
    <>
      <section className="hero">
        <motion.div className="hero-content" {...fadeUp(0)}>
          <h1>Eleodora Pizarro Atelier</h1>
          <p>
            Confección y arreglos personalizados para tu hogar, disfraces y
            prendas únicas hechas a medida.
          </p>
          <motion.a
            href="https://wa.me/message/6SNFBHZHEHL7D1"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pedí tu presupuesto
          </motion.a>
        </motion.div>
      </section>

      <ul className="info-bar">
        <li>Arreglos y confecciones a medida</li>
        <li>Todos los medios de pago</li>
        <li>Entrega inmediata</li>
      </ul>

      {/* Quiénes somos */}
      <section className="about-section">
        <motion.div
          className="about-text-side"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="about-eyebrow">Quiénes somos</span>
          <h2>
            Hecho con dedicación,
            <br />
            entregado con cariño
          </h2>
          <p>
            Somos un taller familiar con más de 30 años de experiencia en
            confección y arreglos a medida. Cada prenda pasa por nuestras manos
            con atención al detalle y compromiso con la calidad.
          </p>
          <p>
            Trabajamos con particulares, institutos de danza y clientes que
            buscan algo único — desde un dobladillo hasta un disfraz
            personalizado.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">+15</span>
              <span className="highlight-label">Años de experiencia</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Hecho a medida</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">∞</span>
              <span className="highlight-label">
                Dedicación en cada costura
              </span>
            </div>
          </div>
        </motion.div>

        <div className="about-image-side" />
      </section>
    </>
  );
}

export default Hero;
