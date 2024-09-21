import * as functions from "firebase-functions";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // firebase.jsで初期化したFirestoreインスタンスをインポート

export const onCall = {
  upsertMessage: functions.https.onCall((data, context) => {
    console.log(data);
    const text = data.text;
    console.log(text);
    //メッセージのコレクションにデータを追加していく

    async function addMessage(messageText, userId) {
      try {
        // コレクションにデータを追加
        const docRef = await addDoc(collection(db, "message"), {
          text: messageText,
          userId: userId,
          timestamp: new Date(), // 現在時刻を追加
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    // ...
  }),
};
