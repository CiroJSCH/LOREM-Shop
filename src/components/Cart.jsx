import { useEffect } from "react";

const Cart = () => {

  useEffect(() => {
    document.title = "Lorem Shop | Cart";
  }, [])
  
  return (
    <div>
      <div className="table-responsive">
        <table className="table table-dark table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col" className="border-0 col-sm-1 col-md-3">
                <div className="p-2 px-3 text-uppercase">Product</div>
              </th>
              <th scope="col" className="border-0 col-sm-2">
                <div className="py-2 text-uppercase">Price</div>
              </th>
              <th scope="col" className="border-0 col-sm-2">
                <div className="py-2 text-uppercase" >Quantity</div>
              </th>
              <th scope="col" className="border-0 col-sm-2">
                <div className="py-2 text-uppercase">Total</div>
              </th>
              <th scope="col" className="border-0 col-sm-1">
                <div className="py-2 text-uppercase">T</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="border-0">
                <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg"
                    alt=""
                    width="70"
                    className="img-fluid rounded shadow-sm"
                  />
                  <div className="ml-3 d-inline-block text-center">
                    <h5 className="mb-0">
                      {" "}
                      <p className="text-primary d-inline-block">
                        Timex Unisex Originals
                      </p>
                    </h5>
                    <span className="text-secondary d-inline-block">
                      Category:Watches
                    </span>
                  </div>
                </div>
              </th>
              <td className="border-0 align-middle text-center text-md-start">
                <strong>$79.00</strong>
              </td>
              <td className="border-0 align-middle text-center text-md-start">
                <strong>3</strong>
              </td>
              <td className="border-0 align-middle text-center text-md-start">
                <strong>3000</strong>
              </td>
              <td className="border-0 align-middle text-center text-md-start">
                <strong>X</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
