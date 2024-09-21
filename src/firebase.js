import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  connectAuthEmulator,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

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
const functions = getFunctions(app);
const db = getFirestore(app);

export { auth, provider, functions };
connectAuthEmulator(auth, "http://localhost:9099");
connectFirestoreEmulator(db, "localhost", 8080);
connectFunctionsEmulator(functions, "localhost", 5001);
