import { motion } from 'framer-motion';

function ServiceCard({ title, description }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}

export default ServiceCard;
