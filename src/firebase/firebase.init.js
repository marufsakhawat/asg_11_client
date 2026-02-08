// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYzuZMAaZstR7FQ71iP49beUHSZo_Et8o",
  authDomain: "asg-11-ca248.firebaseapp.com",
  projectId: "asg-11-ca248",
  storageBucket: "asg-11-ca248.firebasestorage.app",
  messagingSenderId: "522153298285",
  appId: "1:522153298285:web:2508eb8a5938d69b077264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);