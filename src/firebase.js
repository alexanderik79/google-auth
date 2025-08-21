import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBnMyFYm0rXfXYcgpaylN86qpj9EkygceQ",
  authDomain: "auth-fb356.firebaseapp.com",
  projectId: "auth-fb356",
  storageBucket: "auth-fb356.firebasestorage.app",
  messagingSenderId: "631600953137",
  appId: "1:631600953137:web:f5df8342710b940936a210"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();