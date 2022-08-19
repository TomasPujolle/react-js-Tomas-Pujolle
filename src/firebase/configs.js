
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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