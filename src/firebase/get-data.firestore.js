import { getDoc, doc } from "firebase/firestore";
import { fireStoreDb } from "./init.firebase";
// import SHOP_DATA from "../Pages/shop/shop-data";

export const getDataFromFirestore = async (collectionName, docName) => {
  const docRef = doc(fireStoreDb, collectionName, docName);
  const data = await getDoc(docRef)
    .then((res) => res.data())
    .then((res) => res)
    .catch((err) => console.error(err));
  console.log(data);
  return data;
};

// export const addDataToFirestore = async (collectionName, docName) => {
//   const colRef = collection(fireStoreDb, collectionName);
//   const keys = Object.keys(SHOP_DATA);
//   const values = Object.values(SHOP_DATA);
  
//   await setDoc(doc(colRef, docName), showMap);
// };