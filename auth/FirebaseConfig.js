// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0DX5pz_uaGvaYP1tprAAy2_holYOXJMk",
    authDomain: "asm-react-native-fb77b.firebaseapp.com",
    projectId: "asm-react-native-fb77b",
    storageBucket: "asm-react-native-fb77b.appspot.com",
    messagingSenderId: "815359529192",
    appId: "1:815359529192:web:76057c069c19ee55d9795d",
    measurementId: "G-0Z3B0HQM9X"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);