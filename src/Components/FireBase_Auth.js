import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9EOZJKu9CghFLEfWcGIklIegFXAS8ZM0",
    authDomain: "linkedin-clone-30af5.firebaseapp.com",
    projectId: "linkedin-clone-30af5",
    storageBucket: "linkedin-clone-30af5.appspot.com",
    messagingSenderId: "23410603198",
    appId: "1:23410603198:web:adb88563015a2b6b5a9aef",
    measurementId: "G-WYHVM53HL4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}