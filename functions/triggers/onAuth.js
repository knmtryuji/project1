import * as functions from "firebase-functions";
import admin from "firebase-admin";
const { firestore } = admin;
admin.initializeApp();

export const onAuth = {
  createdAuthUser: functions.auth.user().onCreate(async (record) => {
    const uid = record.uid;
    const email = record.email;
    // userコレクションに追加
    console.log(`create user account: ${email}`);
    console.log(`uid: ${uid}`);
    console.log(`email: ${email}`);
    functions.logger.info(`create user account: ${email}`);
    functions.logger.info(`uid: ${uid}`);
    functions.logger.info(`email: ${email}`);
    firestore().collection("users").doc(uid).set({
      email: email,
      createAt: firestore.Timestamp.now(),
      updateAt: firestore.Timestamp.now(),
    });
  }),
};
