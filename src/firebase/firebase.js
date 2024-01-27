// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCODBhciTdzOgmkfI1oX6F_rpOTkhfDYMY",
    authDomain: "palette-pro.firebaseapp.com",
    projectId: "palette-pro",
    storageBucket: "palette-pro.appspot.com",
    messagingSenderId: "446288570845",
    appId: "1:446288570845:web:1221a09dee30e17867ee34",
    measurementId: "G-Y294SNGKSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app);
