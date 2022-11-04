import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/itemDetailContainer.css";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`https://62ef11618d7bc7c2eb74befd.mockapi.io/products/${id}`)
      .then((response) => {
        setItem(response.data);
        // console.log(response.data.features)
      })
      .catch((error) => console.log(error));
  }, []);

  const AddCart = () => {
    return (
      <div className="d-flex flex-wrap gap-4">
        <div className="buttons">
          <button className="buttons-change button-minus"> <CgMathMinus /> </button>
          <span className="buttons-counter">0</span>
          <button className="buttons-change button-plus"> <CgMathPlus /> </button>
        </div>
        <button className="d-flex align-items-center justify-content-center gap-2 checkout">
        <RiShoppingCart2Line /> Checkout
        </button>
      </div>

    );
  };

  return (
    <div className="container mt-5 d-flex align-items-center detailContainer justify-content-center">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" style={{"maxHeight":"27rem"}}>
            <img
              src={item.image}
              className="img-fluid rounded-start"
              alt={`${item.name} image`}
              style={{"maxHeight":"100%"}}
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
                  Características
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
                <span className="badge bg-primary fs-4" style={{"fontFamily" : "Titillium Web, sans-serif"}}>U$D {item.price}</span>
                <AddCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
