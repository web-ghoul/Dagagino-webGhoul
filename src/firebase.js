// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAVzmCyvM1r002rmqwEg-_itvWZPcvyLSY",
  authDomain: "dagagino-a40dd.firebaseapp.com",
  projectId: "dagagino-a40dd",
  storageBucket: "dagagino-a40dd.appspot.com",
  messagingSenderId: "516477251405",
  appId: "1:516477251405:web:6030d447be4b5f00e15104",
  measurementId: "G-8H2248WWDN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()