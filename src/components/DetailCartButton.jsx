/// Hooks
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../context/CartContext";

// Icons
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";

const DetailCartButton = ({ item }) => {
  const [items, setItems] = useState(0);
  const [inCart, setInCart] = useState(false);

  const removeItem = () => {
    items > 0 ? setItems(items - 1) : setItems(0);
  };

  const addItem = () => {
    items < item.stock ? setItems(items + 1) : setItems(item.stock);
  };

  const { addToCart } = useContext(CartContext);

  return (
    <>
      {!inCart ? (
        <div className="d-flex flex-wrap gap-4 mb-2">
          <div className="buttons">
            <button
              className="buttons-change button-minus"
              onClick={removeItem}
            >
              <CgMathMinus />
            </button>
            <span className="buttons-counter">{items}</span>
            <button className="buttons-change button-plus" onClick={addItem}>
              <CgMathPlus />
            </button>
          </div>
          <button
            className="d-flex align-items-center justify-content-center gap-2 checkout"
            disabled={items === 0}
            onClick={() => {
              setInCart(true);
              addToCart(item, items);
            }}
          >
            <RiShoppingCart2Line /> Add to cart
          </button>
          <span
            className="badge bg-secondary fs-4 d-flex align-items-center justify-content-center"
            style={{
              fontFamily: "Titillium Web, sans-serif",
              minHeight: "3rem",
              minWidth: "9rem",
            }}
          >
            Stock: {item.stock}
          </span>
        </div>
      ) : (
        <Link
          to="/cart"
          className="d-flex align-items-center justify-content-center gap-2 text-decoration-none checkout"
        >
          <RiShoppingCart2Line /> Checkout
        </Link>
      )}
    </>
  );
};

export default DetailCartButton;
