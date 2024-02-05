import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCJ9JHp6ll15hiczQp-J2s35d2sr0hqwSM",
    authDomain: "deber-f1fbb.firebaseapp.com",
    projectId: "deber-f1fbb",
    storageBucket: "deber-f1fbb.appspot.com",
    messagingSenderId: "748683996644",
    appId: "1:748683996644:web:d2a2765c770fc760b0ebf1"
  };
  

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)



