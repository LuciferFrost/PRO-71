import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHW-yjLy8CruHFeNX-YYwblsAorXUoTSk",
  authDomain: "pro-71-cef54.firebaseapp.com",
  projectId: "pro-71-cef54",
  storageBucket: "pro-71-cef54.appspot.com",
  messagingSenderId: "432353846173",
  appId: "1:432353846173:web:22314fbc181391f2528574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
