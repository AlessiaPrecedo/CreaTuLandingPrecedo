import { useContext } from 'react';
import { ServicesContext } from '../context/ServicesContext';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

function Services() {
  const { services } = useContext(ServicesContext);

  console.log('services:', services); // 👈 acá sí

  return (
    <section className="page">
      <h1>Servicios</h1>

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
  );
}

export default Services;
