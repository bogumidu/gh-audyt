// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp5CA1-9S0vnrXOR0hWXFJuckUUbPxFxk",
  authDomain: "contact-test-bdgh.firebaseapp.com",
  projectId: "contact-test-bdgh",
  storageBucket: "contact-test-bdgh.appspot.com",
  messagingSenderId: "674652846438",
  appId: "1:674652846438:web:d2cd88eea12bf05d74b0a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
