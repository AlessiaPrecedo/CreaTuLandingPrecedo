import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-container">
        {/* Marca */}
        <div className="footer-section">
          <h3>Eleodora Pizarro Atelier</h3>
          <p>Arreglos y confecciones a medida</p>
        </div>

        {/* Servicios */}
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Arreglos de ropa</li>
            <li>Confección para el hogar</li>
            <li>Disfraces personalizados</li>
            <li>Delantales</li>
          </ul>
        </div>

        {/* Redes */}
        <div className="footer-section">
          <h4>Seguinos</h4>
          <div className="footer-socials">
            <a
              href="https://wa.me/549XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eleodora Pizarro Atelier — Todos los
          derechos reservados
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
