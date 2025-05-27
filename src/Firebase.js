// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkbWrk4iZtqRuRbxt3En7d2GOPgbi-uhI",
  authDomain: "pelatihan-sintak-azira.firebaseapp.com",
  projectId: "pelatihan-sintak-azira",
  storageBucket: "pelatihan-sintak-azira.firebasestorage.app",
  messagingSenderId: "343756347106",
  appId: "1:343756347106:web:afb972178d6b0d211bb0bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {db};