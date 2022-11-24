// Libraries
import React, { useContext } from "react";

// Context
import { CartContext } from "../context/CartContext";

const Receipt = React.forwardRef((props, ref) => {

  const { calcTotal, cartList } = useContext(CartContext);

  return (
    <div className="mx-auto bg-dark min-vh-100" ref={ref}>
      <h1 className="text-primary fs-2 text-center py-3">LOREM SHOP</h1>
      <div className="container-sm my-3">
        <div className="container-sm my-3">
          {cartList.length > 0 && (
            <div className="row d-flex justify-content-center">
              <div className="col-8 bg-dark pt-3 pb-5 mb-5 border border-primary rounded">
                <h2 className="fs-2 text-center mx-auto text-white w-75 py-3 border-top border-primary">
                  RECEIPT
                </h2>
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
                        </div>
                      </div>
                    );
                  })}
                  <div className="px-2 py-3 mx-auto w-75 d-flex align-items-center justify-content-between mt-3 fs-3">
                    <p className="text-white">TOTAL:</p>
                    <p className="text-primary">US${calcTotal()}</p>
                  </div>
                </>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-2 py-3 mx-auto w-100 d-flex align-items-center justify-content-center mt-3 fs-4">
        <p className="text-white">Order ID: &nbsp;</p>
        <p className="text-primary">{props.idOrder}</p>
      </div>
    </div>
  );
});

export default Receipt;
