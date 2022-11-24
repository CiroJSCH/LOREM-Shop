// Libraries
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Context
import { CartContext } from "../context/CartContext";

// Components
import ConfirmationForm from "./ConfirmationForm";

// Icons
import { TfiTrash } from "react-icons/tfi";

// Img
import imgEmptyCart from "../img/carro-vacio.png";
import summary from "/summary.svg";

const Cart = () => {
  const [showForm, setShowForm] = useState(false);

  const { removeOfCart, calcTotal, cartList } = useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lorem Shop | Cart";
  }, []);

  return (
    <div>
      {cartList.length === 0 ? (
        <div className="d-flex flex-column align-items-center mt-5 gap-3">
          <img src={imgEmptyCart} alt="" className="img-fluid" />
          <h1 className="text-primary text-center font-monospace fs-1">
            YOU DON'T HAVE PRODUCTS YET
          </h1>
          <button onClick={() => navigate("/")} className="checkout my-5">
            Go Shopping
          </button>
        </div>
      ) : (
        <div className="container-sm my-3">
          {cartList.length > 0 && (
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-6 col-xl-5 bg-dark pt-3 pb-5 mb-5 border border-primary rounded">
                <img
                  className="img-fluid mx-auto d-block"
                  src={summary}
                  alt=""
                />
                {!showForm && (
                  <h2 className="fs-2 text-center mx-auto text-white w-75 py-3 border-top border-primary">
                    SUMMARY
                  </h2>
                )}
                {showForm ? (
                  <ConfirmationForm setShowForm={setShowForm} />
                ) : (
                  <>
                    {cartList?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="px-2 py-3 mx-auto w-100 d-flex align-items-center justify-content-between border-bottom"
                        >
                          <img
                            src={item.image}
                            alt=""
                            className="img-fluid"
                            style={{ width: "70px", maxHeight: "70px" }}
                          />
                          <div className="d-flex gap-1 text-end">
                            <div className="d-flex flex-column gap-1">
                              <p className="text-primary">{`${item.name} x${item.quantity}`}</p>
                              <p className="text-white">
                                US${" "}
                                {`${parseFloat(
                                  item.quantity * item.price
                                ).toFixed(2)}`}
                              </p>
                            </div>
                            <button
                              className="remove"
                              onClick={() => removeOfCart(item)}
                            >
                              <TfiTrash
                                style={{ color: "red", fontSize: "1.5rem" }}
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                    <div className="px-2 py-3 mx-auto w-75 d-flex align-items-center justify-content-between mt-3 fs-3">
                      <p className="text-white">TOTAL:</p>
                      <p className="text-primary">${calcTotal()}</p>
                    </div>
                    <button
                      className="checkout w-75 mx-auto d-block my-3"
                      onClick={() => setShowForm(true)}
                    >
                      CHECKOUT
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
