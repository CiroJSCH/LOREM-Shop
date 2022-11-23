// Libraries
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { query, where, collection, getDocs } from "firebase/firestore";

// Firebase
import { db } from "../firebase/firebaseConfig";

const ItemDetailRelated = ({ category_id }) => {
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "products"),
      where("category_id", "==", `${category_id}`)
    );
    const fetchData = async () => {
      let related = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) =>
        related.push({
          id: doc.id,
          ...doc.data(),
        })
      );
      related = [...related]
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
        .slice(0, 4);
      setRelatedItems(related);
    };
    fetchData();
  }, [category_id]);

  return (
    <div className="container mt-5">
      <h1 className="text-primary fs-1 mb-2 text-sm-center text-md-start featureItem">
        Related Products
      </h1>
      <div className="row">
        {relatedItems.map((item) => {
          return (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center"
              key={item.id}
            >
              <div className="card mb-3 bg-dark" style={{ maxHeigth: "20rem" }}>
                <img
                  className="card-img-top bg-white"
                  src={item.image}
                  style={{ height: "20rem", minWidth: "14rem" }}
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
  );
};

export default ItemDetailRelated;
