import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzJEYf5MOXv6ZQRPkBbHmj3wVZww1vAYM",
  authDomain: "movies-vlad.firebaseapp.com",
  projectId: "movies-vlad",
  storageBucket: "movies-vlad.appspot.com",
  messagingSenderId: "649977065136",
  appId: "1:649977065136:web:9cdda3fa3edb1139b35575",
  measurementId: "G-W3V22EBSX8"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
