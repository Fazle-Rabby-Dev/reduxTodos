// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjd828mTibd3sThkJ7wVYWcB2sPVm_yZY",
  authDomain: "todos-c5e52.firebaseapp.com",
  databaseURL: "https://todos-c5e52-default-rtdb.firebaseio.com",
  projectId: "todos-c5e52",
  storageBucket: "todos-c5e52.firebasestorage.app",
  messagingSenderId: "329195220678",
  appId: "1:329195220678:web:ba73aa3fc7be7c89ca31c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig
export const db = getDatabase(app);
