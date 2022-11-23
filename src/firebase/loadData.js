import { addDoc, setDoc } from "firebase/firestore";
import { dbRef } from "./firebaseConfig.js";

import axios from "axios";

axios
  .get(`https://62ef11618d7bc7c2eb74befd.mockapi.io/products/`)
  .then((response) => {
    response.data.forEach((elem) => {
      delete elem.id;
      elem.stock = parseInt(elem.stock);
      addDoc(dbRef, elem)
        .then((docRef) => {
          setDoc(docRef, { ...elem, id: docRef.id }).then(() =>
            console.log("Document updated")
          );
        })
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log(error));

// ! https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/
