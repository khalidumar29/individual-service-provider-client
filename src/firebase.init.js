// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvDC86Gp6wB5L-9dCnZ-jk-lehRt9a7cE",
  authDomain: "tutor-com.firebaseapp.com",
  projectId: "tutor-com",
  storageBucket: "tutor-com.appspot.com",
  messagingSenderId: "1000434827765",
  appId: "1:1000434827765:web:4dedcf306f446682a660bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
