// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3db3b.firebaseapp.com",
  projectId: "mern-estate-3db3b",
  storageBucket: "mern-estate-3db3b.appspot.com",
  messagingSenderId: "155305692974",
  appId: "1:155305692974:web:f9463e4c789875d03834bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);