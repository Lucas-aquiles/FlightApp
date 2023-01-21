import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  APP_API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDERID,
  APP_ID
} from "@env";

export const firebaseConfig = {
  apiKey: APP_API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERID,
  appId: APP_ID
};

initializeApp(firebaseConfig);

// export const app = getFirestore(firebaseConfig)

export const database = getFirestore();
