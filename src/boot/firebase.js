// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj6Rb99XLmrzsL0Edmx7Tk14pL9GYyZBc",
  authDomain: "lorena-foundation.firebaseapp.com",
  projectId: "lorena-foundation",
  storageBucket: "lorena-foundation.firebasestorage.app",
  messagingSenderId: "671393157562",
  appId: "1:671393157562:web:d9265ba0cc7d0be99d0d83",
  measurementId: "G-D05C7EV8QV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
export { app };
