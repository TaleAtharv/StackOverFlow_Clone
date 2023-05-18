import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTJ4lrXdxi8uc6fC-xn5vJveRNLMrQtrs",
  authDomain: "stackoverflow-auth-82248.firebaseapp.com",
  projectId: "stackoverflow-auth-82248",
  storageBucket: "stackoverflow-auth-82248.appspot.com",
  messagingSenderId: "867413202689",
  appId: "1:867413202689:web:779648e70731639e9c6d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
