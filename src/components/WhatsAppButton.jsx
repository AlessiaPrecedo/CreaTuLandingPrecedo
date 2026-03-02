import { motion } from 'framer-motion';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491123456789?text=Hola!%20Quiero%20consultar%20por%20un%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      💬
    </motion.a>
  );
}

export default WhatsAppButton;
