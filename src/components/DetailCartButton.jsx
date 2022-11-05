import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";

const DetailCartButton = () => {
  return (
    <div className="d-flex flex-wrap gap-4">
      <div className="buttons">
        <button className="buttons-change button-minus">
          {" "}
          <CgMathMinus />{" "}
        </button>
        <span className="buttons-counter">0</span>
        <button className="buttons-change button-plus">
          {" "}
          <CgMathPlus />{" "}
        </button>
      </div>
      <button className="d-flex align-items-center justify-content-center gap-2 checkout">
        <RiShoppingCart2Line /> Add to cart
      </button>
    </div>
  );
};

export default DetailCartButton;
