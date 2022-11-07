import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVlVCOzbWfCML0ozqZLwvv2idJAXMK2KI",
  authDomain: "vacation-spots.firebaseapp.com",
  projectId: "vacation-spots",
  storageBucket: "vacation-spots.appspot.com",
  messagingSenderId: "310437509567",
  appId: "1:310437509567:web:8ed14eff3de161132bc90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

