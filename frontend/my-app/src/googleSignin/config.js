// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzPORLUztkAfgDiDu0I3q_RxbWUmc-jGk",
  authDomain: "expense-tracker-b217a.firebaseapp.com",
  projectId: "expense-tracker-b217a",
  storageBucket: "expense-tracker-b217a.appspot.com",
  messagingSenderId: "273596062489",
  appId: "1:273596062489:web:7b6928071bf50561650388",
  measurementId: "G-DZ5JN9CK4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};