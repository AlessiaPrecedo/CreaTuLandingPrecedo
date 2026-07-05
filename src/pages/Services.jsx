import { useContext } from 'react';
import { ServicesContext } from '../context/ServicesContext';
import ServiceCard from '../components/ServiceCard';
import './service.css';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

function Services() {
  const { services } = useContext(ServicesContext);

  return (
    <>
      <SEO
        title="Servicios"
        description="Arreglos de ropa, confección para el hogar, disfraces personalizados e indumentaria para institutos. Todo hecho a medida."
        url="https://eleodorapizarroatelier.web.app/servicios"
      />

      {/* ✅ Banner */}
      <div className="services-banner">
        <motion.div
          className="services-banner-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="services-banner-eyebrow">Lo que hacemos</span>
          <h1>Servicios</h1>
          <p>Cada prenda cuenta una historia — la tuya, hecha a medida.</p>
        </motion.div>
      </div>

      <section className="page">
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              images={service.images}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
