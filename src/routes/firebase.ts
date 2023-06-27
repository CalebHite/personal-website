import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAt6cMgO8KW3nkog59X6NW3Gs34a9SHRLI",
    authDomain: "personal-site-30a38.firebaseapp.com",
    projectId: "personal-site-30a38",
    storageBucket: "personal-site-30a38.appspot.com",
    messagingSenderId: "332315156685",
    appId: "1:332315156685:web:37eb4c26b42cb494aec984"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);