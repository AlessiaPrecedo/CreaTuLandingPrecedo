import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSv7SMM5PwEi1S0c9_32wwUh-jlg-yyoo',
  authDomain: 'eleodora-ecommerce.firebaseapp.com',
  projectId: 'eleodora-ecommerce',
  storageBucket: 'eleodora-ecommerce.firebasestorage.app',
  messagingSenderId: '10663746470',
  appId: '1:10663746470:web:5a127272aed9ef3984cd67',
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
