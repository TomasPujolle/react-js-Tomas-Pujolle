// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdYnKkGlEVDAFGTlZRmVve1S_pKDrzmhg",
  authDomain: "weapon-shop-c15ab.firebaseapp.com",
  projectId: "weapon-shop-c15ab",
  storageBucket: "weapon-shop-c15ab.appspot.com",
  messagingSenderId: "175349641114",
  appId: "1:175349641114:web:83c0ac3785bdba002ad423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;