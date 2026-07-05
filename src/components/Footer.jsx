import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Marca */}
        <div className="footer-brand">
          <img src="../images/SEO/logo.png" alt="Eleodora Pizarro Atelier" />
          <h3>Eleodora Pizarro Atelier</h3>
          <p>Confección artesanal hecha con dedicación y cariño.</p>
          <div className="footer-socials">
            <a
              href="https://wa.me/message/6SNFBHZHEHL7D1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/eleodorapizarroatelier?igsh=MXQ1OHB1dzRkNnJzdw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Servicios */}
        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            <li>
              <Link to="/servicios">Arreglos de ropa</Link>
              <span>Rescatamos y renovamos cada costura</span>
            </li>
            <li>
              <Link to="/servicios">Confección para el hogar</Link>
              <span>Diseños para vestir tus espacios</span>
            </li>
            <li>
              <Link to="/servicios">Disfraces personalizados</Link>
              <span>Únicos para cada ocasión</span>
            </li>
            <li>
              <Link to="/servicios">Institutos</Link>
              <span>Vestimos equipos con dedicación</span>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-label">WhatsApp</span>
              <a
                href="https://wa.me/message/6SNFBHZHEHL7D1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribinos
              </a>
            </li>
            <li>
              <span className="contact-label">Instagram</span>
              <a
                href="https://www.instagram.com/eleodorapizarroatelier"
                target="_blank"
                rel="noopener noreferrer"
              >
                @eleodorapizarroatelier
              </a>
            </li>
            <li>
              <span className="contact-label">Página</span>
              <Link to="/contacto">Formulario de contacto</Link>
            </li>
          </ul>
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
