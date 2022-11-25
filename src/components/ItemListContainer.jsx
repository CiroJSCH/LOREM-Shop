// Libraries
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { collection, getDocs } from "firebase/firestore";

// Util
import { categoriesTitle } from "../util/categoriesData";

// Firebase
import { db } from "../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category_id } = useParams();

  useEffect(() => {
    document.title = `Lorem Shop | ${categoriesTitle[category_id]}`;
    /**
     * Get all the items from products collection
     */
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));
      category_id
        ? setProducts(
            dataFromFirestore.filter(
              (product) => product.category_id === category_id
            )
          )
        : setProducts(dataFromFirestore);
    }
    fetchData();
  }, [category_id]);

  return (
    <>
      {
        <h1 className="text-primary fs-1 mt-5 text-center featureItem">
          {!category_id ? "All products" : categoriesTitle[category_id]}
        </h1>
      }
      <motion.div
        className="container d-flex justify-content-center align-items-center mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="products"
      >
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={`${product.name} image`}
                    style={{ height: "21rem" }}
                  ></img>
                  <div className="card-body bg-dark rounded-bottom border-bottom border-primary border-5">
                    <h5 className="card-title mb-3">{product.name}</h5>
                    <p className="card-text mb-4">
                      {product.description.substring(0, 70)}
                    </p>
                    <Link
                      to={`/item/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ItemListContainer;
