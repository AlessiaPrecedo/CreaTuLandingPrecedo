import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    celular: '',
    message: '',
  });

  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success'); // success | error

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 👉 Solo números en celular
    if (name === 'celular') {
      if (!/^[0-9]*$/.test(value)) return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showToast = (msg, type) => {
    setToast(msg);
    setToastType(type);

    setTimeout(() => {
      setToast('');
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 👉 Validación celular mínimo 8 dígitos
    if (formData.celular.length < 8) {
      showToast('⚠️ El celular debe tener al menos 8 dígitos', 'error');
      return;
    }

    // Guardar en Firestore
    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        celular: formData.celular,
        message: formData.message,
        createdAt: serverTimestamp(),
      });

      showToast('✅ Mensaje enviado correctamente', 'success');
      setFormData({ name: '', celular: '', message: '' });
    } catch (error) {
      showToast('❌ Error al enviar mensaje', 'error');
    }
  };

  return (
    <motion.section
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Contacto</h1>
      <p>Escribinos y te respondemos a la brevedad</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="celular"
          placeholder="Celular"
          value={formData.celular}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar mensaje</button>
      </form>

      {/* TOAST */}
      {toast && <div className={`toast ${toastType}`}>{toast}</div>}
    </motion.section>
  );
}

export default Contact;
