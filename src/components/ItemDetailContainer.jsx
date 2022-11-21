// Libraries
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getDoc,
  doc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

// Components
import DetailCartButton from "./DetailCartButton";

// Firebasee
import { db } from "../firebase/firebaseConfig";

// Styles
import "../styles/itemDetailContainer.css";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const docRef = doc(db, "products", id);
    const fetchData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        setItem(docSnap.data());
        const q = query(
          collection(db, "products"),
          where("category_id", "==", `${docSnap.data().category_id}`)
        );
        const fetchRelatedData = async () => {
          let related = []
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => (related.push(
            {
              id: doc.id,
              ...doc.data(),
            }
          )));
          related = [...related].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 4)
          setRelatedItems(related)
        };
        fetchRelatedData();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div className="container d-flex align-items-center detailContainer justify-content-center h-auto mt-5">
        <div className="card mb-3">
          <div className="row g-0">
            <div
              className="col-md-4 d-flex align-items-center justify-content-center"
              style={{ maxHeight: "27rem" }}
            >
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={`${item.name} image`}
                style={{ maxHeight: "100%" }}
              ></img>
            </div>
            <div className="col-md-8 bg-dark">
              <div className="card-body">
                <p className="card-text mb-3">
                  <small className="text-primary">{item.brand}</small>
                </p>
                <h5 className="card-title fs-2">{item.name}</h5>
                <p className="card-text fs-5 mt-3">{item.description}</p>
                <ul>
                  <p className="text-primary card-text fs-5 my-3">
                    Features
                  </p>
                  {item.features &&
                    Object.keys(item.features).map((feature, index) => {
                      return (
                        <li
                          key={index}
                          className="d-flex gap-1 text-white featureItem mb-2"
                        >
                          <span className="fw-semibold">
                            - {feature[0].toUpperCase() + feature.substring(1)}:
                          </span>
                          <span>{item.features[feature]}</span>
                        </li>
                      );
                    })}
                </ul>
                <div className="d-flex flex-wrap justify-content-between mt-4 gap-5">
                  <span
                    className="badge bg-primary fs-4 align-self-center"
                    style={{ fontFamily: "Titillium Web, sans-serif" }}
                  >
                    U$D {item.price}
                  </span>
                  <DetailCartButton item={item} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="container mt-5">
        <h1 className="text-primary fs-1 mb-2 text-sm-center text-md-start featureItem">
          Related Products
        </h1>
        <div className="row">
          {relatedItems.map((item) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center" key={item.id}>
                <div
                  className="card mb-3 bg-dark"
                  style={{ maxHeigth: "20rem" }}
                >
                  <img
                    className="card-img-top bg-white"
                    src={item.image}
                    style={{maxHeight: "20rem", minWidth: "18rem"}}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
