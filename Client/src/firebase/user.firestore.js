import { addDoc, collection } from "firebase/firestore";
import { fireStoreDb } from "./init.firebase";

export const addUserToFirestore = (user) => {
  try {
    (async () => {
      const documentReference = await addDoc(collection(fireStoreDb, "users"), {
        ...user,
      });
      console.log("document added", documentReference.id);
    })();
  } catch (err) {
    console.error("Error Code: ", err.code, "\nError message: ", err.message);
  }
};
