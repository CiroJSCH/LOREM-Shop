// Libraries
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// Context
import { CartContext } from "../context/CartContext";

// Util
import { categoriesTitle } from "../util/categoriesData";

// Icons
import { TfiTrash } from "react-icons/tfi";

// Img
import imgEmptyCart from "../img/carro-vacio.png";

const Cart = () => {

  const [cartList, setCartList] = useState([])
  const { removeOfCart } = useContext(CartContext);

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Lorem Shop | Cart";
    setCartList(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  }, [localStorage.getItem('cart')]);

  return (
    <div>
      {cartList.length === 0 ? (
        <div className="d-flex flex-column align-items-center mt-5 gap-3">
          <img src={imgEmptyCart} alt="" className="img-fluid" />
          <h1 className="text-primary text-center font-monospace fs-1">YOU DON'T HAVE PRODUCTS YET</h1>
          <button onClick={() => navigate('/')} className="checkout mt-5">Go Shopping</button>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-dark table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="border-0 col-sm-1 col-md-6">
                  <div className="p-2 px-3 text-uppercase">Product</div>
                </th>
                <th scope="col" className="border-0 col-sm-2 col-md-1">
                  <div className="py-2 text-uppercase">Price</div>
                </th>
                <th scope="col" className="border-0 col-sm-2 col-md-1">
                  <div className="py-2 text-uppercase">Quantity</div>
                </th>
                <th scope="col" className="border-0 col-sm-2 col-md-1">
                  <div className="py-2 text-uppercase">Total</div>
                </th>
                <th scope="col" className="border-0 col-sm-1 col-md-1">
                  <div className="py-2 text-uppercase">Remove</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {cartList?.map((item) => {
                return (
                  <tr key={item.num}>
                    <th scope="row" className="border-0">
                      <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                        <img
                          src={item.image}
                          alt={`${item.name} thumbnail`}
                          width="70"
                          className="img-fluid rounded shadow-sm"
                          style={{"width":"70px"}}
                        />
                        <div className="ml-3 d-inline-block text-center text-md-start">
                          <h5 className="mb-0">
                            {" "}
                            <p className="text-primary d-inline-block">
                              {item.name}
                            </p>
                          </h5>
                          <span className="text-secondary d-inline-block">
                            Category: {categoriesTitle[item.category_id]}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle text-center text-md-start">
                      <strong>${item.price}</strong>
                    </td>
                    <td className="align-middle text-center text-md-start">
                      <strong>{item.quantity} items</strong>
                    </td>
                    <td className="align-middle text-center text-md-start">
                      <strong>
                        ${parseInt(item.price) * parseInt(item.quantity)}
                      </strong>
                    </td>
                    <td className="align-middle text-center text-md-start">
                      <button className="remove" onClick={() => removeOfCart(item)}><TfiTrash style={{"color":"red", "fontSize":"1.5rem"}}/></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cart;
