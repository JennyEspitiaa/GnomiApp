import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDeQmMSeVmjqLj1BG4U3OaUuWkLdL5M-YY",
  authDomain: "gnomai.firebaseapp.com",
  projectId: "gnomai",
  storageBucket: "gnomai.appspot.com",
  messagingSenderId: "493109088174",
  appId: "1:493109088174:web:991712f4e24e4b8362023f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const DatosBase = getFirestore()

export default app