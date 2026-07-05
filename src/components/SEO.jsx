// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Eleodora Pizarro Atelier';
const SITE_URL = 'https://eleodorapizarroatelier.web.app';
const DEFAULT_IMAGE = `${SITE_URL}/images/SEO/logo.png`;
const DEFAULT_DESCRIPTION =
  'Atelier de costura artesanal en Argentina. Arreglos de ropa, confección para el hogar, disfraces personalizados e indumentaria para institutos.';

function SEO({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url = SITE_URL,
  type = 'website',
}) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;

  return (
    <Helmet>
      {/* ── Básico ── */}
      <html lang="es" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* ── Autoría y región ── */}
      <meta name="author" content={SITE_NAME} />
      <meta name="geo.region" content="AR" />
      <meta name="geo.placename" content="Argentina" />
      <meta name="language" content="Spanish" />

      {/* ── Open Graph (Facebook / WhatsApp) ── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="es_AR" />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          url: SITE_URL,
          logo: DEFAULT_IMAGE,
          image: DEFAULT_IMAGE,
          telephone: '+54 9 11 73639089', // 👈 tu número real de WhatsApp
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Lanus Oeste', // 👈 ciudad real
            addressRegion: 'Buenos Aires',
            addressCountry: 'AR',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+54 9 11 73639089', // 👈 mismo número
            contactType: 'customer service',
            availableLanguage: 'Spanish',
          },
          sameAs: [
            'https://www.instagram.com/eleodorapizarroatelier',
            'https://wa.me/message/6SNFBHZHEHL7D1',
          ],
        })}
      </script>
    </Helmet>
  );
}

export default SEO;
