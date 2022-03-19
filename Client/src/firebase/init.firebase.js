import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import firebaseConfig from "./firebase.config";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const fireStoreDb = getFirestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        resolve(userAuth);
        unsubscribe();
      },
      reject
    );
  });
};

export const emailSigninHandler = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => resolve(true))
      .catch((err) => reject(err));
  });
};

export const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => resolve(true))
      .catch((err) => reject(err));
  });
};
