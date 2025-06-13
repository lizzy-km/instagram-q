// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCZLEUwIUZT80gWc_ewGULCqVv621xu3k",
  authDomain: "look-vince.firebaseapp.com",
  databaseURL: "https://look-vince-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "look-vince",
  storageBucket: "look-vince.appspot.com",
  messagingSenderId: "1001354898081",
  appId: "1:1001354898081:web:ac3377240a7f66c22fdee0",
  measurementId: "G-Q7P5YBDGSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);