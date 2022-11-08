/// Hooks
import { useState } from "react";

// Icons
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";

const DetailCartButton = ({ stock }) => {
  const [items, setItems] = useState(0);

  const removeItem = () => {
    items > 0 ? setItems(items - 1) : setItems(0);
  };

  const addItem = () => {
    items < stock ? setItems(items + 1) : setItems(stock);
  };

  return (
    <div className="d-flex flex-wrap gap-4 mb-2">
      <div className="buttons">
        <button className="buttons-change button-minus" onClick={removeItem}>
          <CgMathMinus />
        </button>
        <span className="buttons-counter">{items}</span>
        <button className="buttons-change button-plus" onClick={addItem}>
          <CgMathPlus />
        </button>
      </div>
      <button className="d-flex align-items-center justify-content-center gap-2 checkout">
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
        Stock: {stock}
      </span>
    </div>
  );
};

export default DetailCartButton;
