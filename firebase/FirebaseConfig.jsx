// src/firebase/FirebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Ensure your environment variable is correctly set in .env file
const firebaseConfig = {
    apiKey: import.meta.env.VITE_SPACE_VENTURE_API,  // Ensure this env variable is correctly set
    authDomain: "space-venture-client.firebaseapp.com",
    projectId: "space-venture-client",
    storageBucket: "space-venture-client.appspot.com",
    messagingSenderId: "130320403780",
    appId: "1:130320403780:web:b58ca95a9cfb69fdaa9b11",
    measurementId: "G-4SN96K7GJ3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const fireDB = getFirestore(app);

export { auth, fireDB };
