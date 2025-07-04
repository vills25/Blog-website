// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx_zS9g0RREQJz58GjmC-EYJcjJJ_MTqw",
  authDomain: "blog-website-b5319.firebaseapp.com",
  projectId: "blog-website-b5319",
  storageBucket: "blog-website-b5319.firebasestorage.app",
  messagingSenderId: "73594842284",
  appId: "1:73594842284:web:86a7c8abcb913685244309",
  measurementId: "G-MS8QN2YQ05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);