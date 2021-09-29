import firebase from "firebase";
import "firebase/storage";
import {
  NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
  apiKey: "AIzaSyC3W6c3-ssPK0ERDkSbsUh3mGLgrtp4Jl4",
  authDomain: "lescerveaux-b3d29.firebaseapp.com",
  projectId: "lescerveaux-b3d29",
  storageBucket: "lescerveaux-b3d29.appspot.com",
  messagingSenderId: "651023636951",
  appId: "1:651023636951:web:8fbea38c6b568b36641392",
  measurementId: "G-J9S1JNS1TG",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { db, auth, storage };
