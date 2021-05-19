import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCs6LITd2AdW7Ahg1qvCxxej5xBTOzv2YA",
  authDomain: "boccia-general-store.firebaseapp.com",
  projectId: "boccia-general-store",
  storageBucket: "boccia-general-store.appspot.com",
  messagingSenderId: "169348671908",
  appId: "1:169348671908:web:9c1b4ba73f970833dc3931",
  measurementId: "G-PZWY626DZ5"
});

export const getFirebase = () =>  app


export const getFireStore = () => firebase.firestore(app)