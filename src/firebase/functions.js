import { getFunctions, httpsCallable } from "firebase/functions";
import { functions } from "../firebase";
export const upsertMessage = (text) =>
  httpsCallable(
    functions,
    "onCall-upsertMessage"
  )({ text }).then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    const data = result.data;
    const sanitizedMessage = data.text;
  });
