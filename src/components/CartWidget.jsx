// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../context/CartContext";

// Icons
import { RiShoppingCart2Line } from "react-icons/ri";

const CartWidget = () => {
  const { cartList, calcItemsQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="position-relative">
      <RiShoppingCart2Line className="fs-2 text-primary" />
      {cartList.length > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {calcItemsQuantity()}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
