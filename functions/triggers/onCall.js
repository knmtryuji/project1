import * as functions from "firebase-functions";

export const onCall = {
  upsertMessage: functions.https.onCall((data, context) => {
    console.log(data);
    // ...
  }),
};
