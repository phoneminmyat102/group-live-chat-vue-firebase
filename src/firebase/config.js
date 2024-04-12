import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDGz7nMvE5_AKr_H51NolQCLddFKGaaWmo",
  authDomain: "vue-project-system.firebaseapp.com",
  projectId: "vue-project-system",
  storageBucket: "vue-project-system.appspot.com",
  messagingSenderId: "780609585355",
  appId: "1:780609585355:web:d4c75b0fabfc59ba72db4e",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp, auth };