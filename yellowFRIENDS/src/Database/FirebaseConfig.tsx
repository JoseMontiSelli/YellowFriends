import firebase from 'firebase/app'
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAcDutgyaW6_5xEh7xrY_cUL-Q3igR0QVU",
    authDomain: "yellowfriends-7ed35.firebaseapp.com",
    projectId: "yellowfriends-7ed35",
    storageBucket: "yellowfriends-7ed35.appspot.com",
    messagingSenderId: "713455877843",
    appId: "1:713455877843:web:5d913279c863e6ca9f1e26",
    measurementId: "G-6CLYNL1HY4"
};

export const initialize = firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore();