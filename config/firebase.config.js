// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "edgestack-11cf6.firebaseapp.com",
  projectId: "edgestack-11cf6",
  storageBucket: "edgestack-11cf6.firebasestorage.app",
  messagingSenderId: "413535001344",
  appId: "1:413535001344:web:8c963dfaa361feece2f1e5"
};

// Initialize Firebase
const app =getApps().length == 0? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage =getStorage(app);

export {db, storage};