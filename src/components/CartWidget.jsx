// Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { CartContext } from "../context/CartContext";

// Icons
import { RiShoppingCart2Line } from "react-icons/ri";

const CartWidget = () => {

  const { cartList } = useContext(CartContext);

  let items = 0;

  cartList.map(product => {
    items += product.quantity;
  })

  return (
    <Link to="/cart" className="position-relative">
      <RiShoppingCart2Line className="fs-2 text-primary"/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {items}
      </span>
    </Link>
  );
};

export default CartWidget;
