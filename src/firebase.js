// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPp_FDG4WgOlDvmmGgTsy5W4kK4MvPyDQ",
  authDomain: "dagagino-2d6bd.firebaseapp.com",
  projectId: "dagagino-2d6bd",
  storageBucket: "dagagino-2d6bd.appspot.com",
  messagingSenderId: "473018084705",
  appId: "1:473018084705:web:495b72974171b0fc1f6920",
  measurementId: "G-P9034SGZRB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()