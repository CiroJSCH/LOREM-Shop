// Libraries
import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  
  useEffect(() => {
    localStorage.getItem('cart') ? setCartList(JSON.parse(localStorage.getItem('cart'))) : setCartList([])
  }, [])
  
  const addToCart = (product, quantity) => {
    product["quantity"] = quantity;
    localStorage.setItem('cart', JSON.stringify([...cartList, product]));
    setCartList([...cartList, product]);
  };

  const removeOfCart = (product) => {
    MySwal.fire({
      title: <h2 className="swalert">Do you want to delete this product?</h2>,
      showDenyButton: true,
      confirmButtonText: <p className="swalert">Yes</p>,
      denyButtonText: <p className="swalert">Cancel</p>,
      confirmButtonColor: '#20c997',
      denyButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('cart', JSON.stringify(cartList.filter((item) => item.id !== product.id)));
        setCartList(cartList.filter((item) => item.id !== product.id));
      }
    })
  };

  const calcItemsQuantity = (cartList) => {
    return cartList.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeOfCart, calcItemsQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
