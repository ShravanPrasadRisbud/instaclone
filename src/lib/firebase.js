// Later move it to the `lib` folder!
import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/auth"

const config = { 
  apiKey: "AIzaSyC08VcHq3nJd_KOzhIGc5UEtsXhoeAg5Wc",
  authDomain: "chatscape-5f0f0.firebaseapp.com",
  projectId: "chatscape-5f0f0",
  storageBucket: "chatscape-5f0f0.appspot.com",
  messagingSenderId: "1013342026862",
  appId: "1:1013342026862:web:fa3e849e0bae9634297a7f",
  measurementId: "G-DRW9YG8QM7"
}

const firebase = Firebase.initializeApp(config)
const FieldValue = Firebase.firestore;

export { firebase, FieldValue}