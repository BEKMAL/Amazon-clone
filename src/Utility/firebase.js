// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUAbQsbMeiXX0Pp2yOg9GGTUYzViIdZcg",
  authDomain: "clone-4681f.firebaseapp.com",
  projectId: "clone-4681f",
  storageBucket: "clone-4681f.appspot.com",
  messagingSenderId: "109807130824",
  appId: "1:109807130824:web:5701647ee9c398b855adfd"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();