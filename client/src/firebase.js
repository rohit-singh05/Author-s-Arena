// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //as we are using VITE so we use import.meta instead of process
  authDomain: "mern-blog-bb14b.firebaseapp.com",
  projectId: "mern-blog-bb14b",
  storageBucket: "mern-blog-bb14b.appspot.com",
  messagingSenderId: "183353327257",
  appId: "1:183353327257:web:ac3258a7574984fba04208"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);