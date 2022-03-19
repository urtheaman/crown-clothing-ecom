import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./init.firebase";
import { addUserToFirestore } from "./user.firestore";

export const singnUpUsingPassword = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userData = {
        name: name,
        email: user.email,
        uid: user.uid,
      };
      addUserToFirestore(userData);
    })
    .catch((err) =>
      console.error("Error Code: ", err.code, "\nError message: ", err.message)
    );
};

export const signInUsingPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password).catch((err) => {
    console.error("Error Code: ", err.code, "\nError Message: ", err.message);
  });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => true)
    .catch((err) => console.error(err));
};
