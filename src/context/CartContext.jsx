import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, quantity) => {
    product["quantity"] = quantity;
    setCartList([...cartList, product]);
  };

  return (
    <CartContext.Provider value={{cartList, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
