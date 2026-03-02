import { createContext, useState } from 'react';
import servicesData from '../data/services';

// 1️⃣ Creamos el contexto
export const ServicesContext = createContext();

// 2️⃣ Creamos el Provider
export function ServicesProvider({ children }) {
  const [services] = useState(servicesData);

  return (
    <ServicesContext.Provider value={{ services }}>
      {children}
    </ServicesContext.Provider>
  );
}
