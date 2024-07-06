import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBJzsXHSN14NgsEKsciI3g9l-ieOviPZXU",
  authDomain: "project1-84a7d.firebaseapp.com",
  projectId: "project1-84a7d",
  storageBucket: "project1-84a7d.appspot.com",
  messagingSenderId: "871656420175",
  appId: "1:871656420175:web:fe91b3d4abf20c22930b3a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const functions = getFunctions(app);
if (!process.env.REACT_APP_ENV) {
  // 向き先をemulatorに向ける
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(functions, "localhost", 5001);
}
export { auth, provider, db };
