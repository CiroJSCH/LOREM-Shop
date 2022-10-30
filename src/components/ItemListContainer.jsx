import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://62ef11618d7bc7c2eb74befd.mockapi.io/products")
      .then((response) => {
        // console.log(response.data)
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
              <div className="card mb-3">
                <img className="card-img-top" src={product.image} alt={`${product.name} image`}></img>
                <div className="card-body bg-dark rounded-bottom border-bottom border-primary border-5">
                  <h5 className="card-title mb-3">{product.name}</h5>
                  <p className="card-text mb-4">
                    {product.description.substring(0,70)}
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
    </div>
  );
};

export default ItemListContainer;
