import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGh88wns1JITE5l1E_--XQ6uEt2R_tfzc",
  authDomain: "lorem-shop.firebaseapp.com",
  projectId: "lorem-shop",
  storageBucket: "lorem-shop.appspot.com",
  messagingSenderId: "827428959496",
  appId: "1:827428959496:web:3daa1ea962d08b3b4e68bd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Para crear la colección de los productos
export const dbRef = collection(db, "products");
