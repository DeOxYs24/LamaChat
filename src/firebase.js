import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQG1NGFStUoz8EkdEHpRqtlA8TOIbTQrA",
  authDomain: "chat-3d1bc.firebaseapp.com",
  projectId: "chat-3d1bc",
  storageBucket: "chat-3d1bc.appspot.com",
  messagingSenderId: "683586242797",
  appId: "1:683586242797:web:5ffa3d1fd3654ff497a4e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
