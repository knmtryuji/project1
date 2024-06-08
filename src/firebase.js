import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

export { auth, provider, db };
