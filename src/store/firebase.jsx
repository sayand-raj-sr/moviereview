// firebase.js (Firebase Initialization)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB-9yKuXN2psvd0VLmcmPhKgJgso5dk-c",
  authDomain: "movie-36d07.firebaseapp.com",
  projectId: "movie-36d07",
  storageBucket: "movie-36d07.firebasestorage.app",
  messagingSenderId: "445373850602",
  appId: "1:445373850602:web:d01cfbb05a5ff66f1d4893",
  measurementId: "G-F0RY3EYQM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Get Firebase Authentication instance
const db = getFirestore(app); // Get Firestore instance

export { auth, db };
