import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";

import {
  collection,
  doc,
  setDoc,
  getFirestore,
  Timestamp
} from "firebase/firestore";
import { app } from "./firebase-config";
// import { useNavigation } from "@react-navigation/native";
// firebase

// const navigation = useNavigation()
export const auth = getAuth(app);
export const db = getFirestore(app);

export function handleCreateAcount(email, password, name) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("Acount create");

      updateProfile(result.user, {
        displayName: name
      });
      setDoc(doc(db, "users", result.user.uid), {
        email: email
      });
      return {
        id: result.user.uid
      };
    })
    .catch((error) => {
      console.log(error);
    });
}

export function signInAcount(email, password, setLoginState) {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      if (user.email) {
        setLoginState(true);
      }
      return {
        email_user: user.email
      };
    })

    .catch((error) => {
      console.log(error);
    });
}

export function Logout() {
  signOut(auth);
}
