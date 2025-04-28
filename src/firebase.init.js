//ALERT : DANGER CODE NEVER SHARE PUBLICALLY - Just practice purpuse

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATS5hnZf_tTjClmCURuXeQ-asYHHCkVEU",
  authDomain: "auth-and-private-route-c405c.firebaseapp.com",
  projectId: "auth-and-private-route-c405c",
  storageBucket: "auth-and-private-route-c405c.firebasestorage.app",
  messagingSenderId: "827605962494",
  appId: "1:827605962494:web:e772113b9f2613e740dfaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
