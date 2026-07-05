import { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase/config';
import './admin.css';
import SEO from '../components/SEO';

function Admin() {
  const [messages, setMessages] = useState([]);
  const [onlyUnread, setOnlyUnread] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (id) => {
    await updateDoc(doc(db, 'messages', id), { read: true });
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, 'messages', id));
  };

  const filteredMessages = onlyUnread
    ? messages.filter((m) => !m.read)
    : messages;

  return (
    <>
      <SEO
        title="Panel Admin | Eleodora Pizarro Atelier"
        description="Panel de administración para gestionar mensajes."
        image="https://eleodorapizarroatelier.web.app/images/SEO/logo.png"
        url="https://eleodorapizarroatelier.web.app/admin"
      />
      <div className="admin-page">
        <h1>Panel Admin</h1>

        <label className="filter-box">
          <input
            type="checkbox"
            checked={onlyUnread}
            onChange={() => setOnlyUnread(!onlyUnread)}
          />
          Mostrar solo no leídos
        </label>

        <motion.div layout className="messages-grid">
          <AnimatePresence>
            {filteredMessages.map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className={`message-card ${msg.read ? 'read' : 'unread'}`}
              >
                <h3>{msg.name}</h3>
                <p>
                  <strong>Celular:</strong> {msg.celular}
                </p>
                <p>{msg.message}</p>

                <div className="admin-buttons">
                  {!msg.read && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => markAsRead(msg.id)}
                    >
                      ✅ Marcar leído
                    </motion.button>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => deleteMessage(msg.id)}
                  >
                    🗑️ Borrar
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}

export default Admin;
