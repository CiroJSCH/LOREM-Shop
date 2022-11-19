import { addDoc } from "firebase/firestore";
import { dbRef } from "./firebaseConfig.js";

import axios from "axios";

axios
  .get(`https://62ef11618d7bc7c2eb74befd.mockapi.io/products/`)
  .then((response) => {
    response.data.forEach((elem) => {
      elem["num"] = elem.id;
      // Elimino el id porque en firebase se le da uno por fuera
      delete elem.id;
      addDoc(dbRef, elem)
        .then((docRef) => {
          console.log("Producto cargado");
        })
        .catch((error) => console.log(error));
    });
  })
  .catch((error) => console.log(error));

// ! https://softauthor.com/firebase-firestore-add-document-data-using-adddoc/