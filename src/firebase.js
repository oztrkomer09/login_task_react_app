// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVY90J8wSBhkpnEja3gyMyo2C2fztXh2Q",
  authDomain: "login-app-mayzor.firebaseapp.com",
  projectId: "login-app-mayzor",
  storageBucket: "login-app-mayzor.appspot.com",
  messagingSenderId: "816562691022",
  appId: "1:816562691022:web:46faea5a62c71fe0a4e99f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
