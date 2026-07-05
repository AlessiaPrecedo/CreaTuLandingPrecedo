import Hero from '../components/Hero';
import SEO from '../components/SEO';

function Home() {
  return (
    <>
      <Hero />
      <SEO
        title="Costura artesanal hecha a medida"
        description="Taller familiar con más de 30 años de experiencia en arreglos de ropa, confección para el hogar, disfraces personalizados e indumentaria para institutos. Ubicado en Argentina."
        url="https://eleodorapizarroatelier.web.app/"
      />
    </>
  );
}

export default Home;
