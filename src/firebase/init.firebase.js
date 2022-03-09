import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(firebaseApp);

// const fireStoreDb = getFirestore();
// const data = async () => {
//   const res = await getDocs(collection(fireStoreDb, "users"));
//   console.log(res);
//   return res;
// }
