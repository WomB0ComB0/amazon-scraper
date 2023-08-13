// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSgzPuT-4RbFDYKGDwCz_hybstWQwb_5M",
  authDomain: "brightdata-a27b3.firebaseapp.com",
  projectId: "brightdata-a27b3",
  storageBucket: "brightdata-a27b3.appspot.com",
  messagingSenderId: "691951373958",
  appId: "1:691951373958:web:bddccf26b07bd72eb24b07"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
export {db}