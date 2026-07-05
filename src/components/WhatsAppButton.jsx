import { motion } from 'framer-motion';
import './WhatsAppButton.css';

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5491173639089?text=Hola!%20Quiero%20consultar%20por%20un%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.05 4.94A9.94 9.94 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.76.46 3.48 1.33 5L2 22l5.15-1.3A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.65-1.03-5.2-2.95-7.06ZM12 20a7.93 7.93 0 0 1-4.07-1.12l-.29-.17-3.06.77.82-2.98-.19-.3A7.9 7.9 0 0 1 4 12a8 8 0 1 1 8 8Zm4.34-5.77c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.2-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.79-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.52.09.46-.07 1.4-.57 1.6-1.13.2-.56.2-1.04.14-1.13-.06-.09-.22-.14-.46-.26Z"
        />
      </svg>
    </motion.a>
  );
}

export default WhatsAppButton;
