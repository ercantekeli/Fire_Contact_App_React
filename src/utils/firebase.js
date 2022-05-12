// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCUKB5C6TVl7GFH689gzFvjIiMau-PnwuE",
  // authDomain: "fire-contact-app-88123.firebaseapp.com",
  // databaseURL: "https://fire-contact-app-88123-default-rtdb.firebaseio.com",
  // projectId: "fire-contact-app-88123",
  // storageBucket: "fire-contact-app-88123.appspot.com",
  // messagingSenderId: "916802710221",
  // appId: "1:916802710221:web:ee22f28a6d3cdef8a09784"
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

