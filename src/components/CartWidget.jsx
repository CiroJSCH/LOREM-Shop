import { RiShoppingCart2Line } from "react-icons/ri";

const CartWidget = () => {
  return (
    <a href="#" className="position-relative">
      <RiShoppingCart2Line className="fs-2 text-primary"/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
      </span>
    </a>
  );
};

export default CartWidget;
