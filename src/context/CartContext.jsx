// Libraries
import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    localStorage.getItem("cart")
      ? setCartList(JSON.parse(localStorage.getItem("cart")))
      : setCartList([]);
  }, []);

  /**
   * It is used to add a item to cart
   * @param {Object} product - Item to add to cart
   * @param {Number} quantity - Quantity of that item
   */
  const addToCart = (product, quantity) => {
    let tempCart = JSON.parse(localStorage.getItem("cart")) || [];

    let inCart = tempCart.find((item) => {
      return item.id === product.id;
    });

    if (!inCart) {
      product["quantity"] = parseInt(quantity);
      tempCart.push(product);
      localStorage.setItem("cart", JSON.stringify(tempCart));
      setCartList(tempCart);
    } else {
      let actualCart = tempCart.map((item, index) => {
        if (item.id === product.id) {
          // To prevent adding more items than your stock when changing routes
          parseInt(tempCart[index]["quantity"]) + quantity >=
          parseInt(tempCart[index]["stock"])
            ? (tempCart[index]["quantity"] = parseInt(tempCart[index]["stock"]))
            : (tempCart[index]["quantity"] =
                parseInt(tempCart[index]["quantity"]) + quantity);
        }
        return tempCart[index];
      });
      localStorage.setItem("cart", JSON.stringify(actualCart));
      setCartList(actualCart);
    }
  };
  /**
   * It is used to remove a specific item from cart
   * @param {Object} product - Item to remove of cart
   */
  const removeOfCart = (product) => {
    MySwal.fire({
      title: (
        <span className="swalert">Do you want to delete this product?</span>
      ),
      showDenyButton: true,
      confirmButtonText: <p className="swalert">Yes</p>,
      denyButtonText: <p className="swalert">Cancel</p>,
      confirmButtonColor: "#20c997",
      denyButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem(
          "cart",
          JSON.stringify(cartList.filter((item) => item.id !== product.id))
        );
        setCartList(cartList.filter((item) => item.id !== product.id));
      }
    });
  };

  /**
   * It is used to calculate the total amount of items in the cart
   * @returns {Number} - Total number of items in cart
   */
  const calcItemsQuantity = () => {
    return parseInt(
      cartList.map((item) => item.quantity).reduce((a, b) => a + b, 0)
    );
  };

  /**
   * It is used to calculate how much the user must pay
   * @returns {String} - Total to pay 
   */
  const calcTotal = () => {
    let tot = 0;
    cartList.map((item) => {
      tot += parseFloat(item.price * item.quantity);
    });
    return tot.toFixed(2);
  };

  /**
   * It is used to completely empty the shopping cart
   */
  const emptyCart = () => {
    setCartList([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeOfCart,
        calcItemsQuantity,
        calcTotal,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
