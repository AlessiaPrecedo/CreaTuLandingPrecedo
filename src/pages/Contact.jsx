import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import SEO from '../components/SEO';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    celular: '',
    message: '',
  });
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'celular' && !/^[0-9]*$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const showToast = (msg, type) => {
    setToast(msg);
    setToastType(type);
    setTimeout(() => setToast(''), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.celular.length < 8) {
      showToast('⚠️ El celular debe tener al menos 8 dígitos', 'error');
      return;
    }
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      showToast('✅ Mensaje enviado correctamente', 'success');
      setFormData({ name: '', celular: '', message: '' });
    } catch {
      showToast('❌ Error al enviar mensaje', 'error');
    }
  };

  return (
    <>
      <SEO
        title="Contacto"
        description="Contactanos por WhatsApp o formulario para consultas personalizadas sobre arreglos, confección y disfraces personalizados."
        url="https://eleodorapizarroatelier.web.app/contacto"
      />

      {/* Banner */}
      <div className="contact-banner">
        <motion.div
          className="contact-banner-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="contact-eyebrow">Estamos para vos</span>
          <h1>Contacto</h1>
          <p>Escribinos y te respondemos a la brevedad</p>
        </motion.div>
      </div>

      {/* Formulario */}
      <motion.section
        className="contact-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              id="celular"
              type="text"
              name="celular"
              placeholder="Ej: 1122334455"
              value={formData.celular}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="¿En qué te podemos ayudar?"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Enviar mensaje</button>
        </form>
      </motion.section>

      {toast && <div className={`toast ${toastType}`}>{toast}</div>}
    </>
  );
}

export default Contact;
