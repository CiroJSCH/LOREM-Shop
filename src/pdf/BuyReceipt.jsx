// Libraries
import React, { useRef, useContext } from "react";
import { useReactToPrint } from "react-to-print";

// Context
import { CartContext } from "../context/CartContext";

// Components
import Receipt from "../components/Receipt";

// Images
import buyDone from "../img/buy-done.png";

const BuyReceipt = React.forwardRef((props, ref) => {

  const { emptyCart } = useContext(CartContext);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Buy Receipt - ${props.idOrder}`,
    onAfterPrint: () => {
      emptyCart();
    }
  });

  return (
    <>
      <div style={{ display: "none" }}>
        <Receipt ref={componentRef} idOrder={props.idOrder} />
      </div>
      <div className="d-flex flex-column mx-auto align-items-center justify-content-center">
      <h2 className="fs-2 text-center mx-auto text-white w-75 py-3 border-top border-primary">
            THANKS!
          </h2>
        <img src={buyDone} alt="" className="w-50"/>
        <button onClick={handlePrint} className="checkout mt-5">
          Print Receipt
        </button>
      </div>
    </>
  );
});

export default BuyReceipt;
