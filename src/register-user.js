// // register-user.js
// import { auth, db } from "./firebase-config.js";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";

// // フォームの送信イベントをリッスン
// document
//   .getElementById("registration-form")
//   .addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     try {
//       // Firebase Authでユーザー作成
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Firestoreにユーザー情報を保存
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         username: username,
//         email: email,
//       });

//       console.log("User registered:", user);
//     } catch (error) {
//       console.error("Error registering user:", error);
//     }
//   });
