/* eslint-disable */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartTotals() {
  const url = "http://localhost:8080/cartList/findAll";
  const [total, setTotal] = useState(0);
  const shipping = 255.0;
  let sum = 0;

  const getSum = (data) => {
    for (let x in data) {
      sum += data[x].quantity * data[x].product.price;
    }
    setTotal(sum);
  };

  useEffect(() => {
    axios.get(url).then((Response) => getSum(Response.data));
  }, [getSum]);

  return (
    <div className="cart-total section-fluid-270 section-top-gap-100">
      <div className="coupon_code right">
        <h3>Cart Totals</h3>
        <div className="coupon_inner">
          <div className="cart_subtotal">
            <p>Subtotal</p>
            <p className="cart_amount">${total}</p>
          </div>
          <div className="cart_subtotal ">
            <p>Shipping</p>
            <p className="cart_amount">
              <span>Flat Rate:</span> ${shipping}
            </p>
          </div>
          <Link to="index.html">Calculate shipping</Link>

          <div className="cart_subtotal">
            <p>Total</p>
            <p className="cart_amount">${total + shipping}</p>
          </div>
          <div className="checkout_btn">
            <Link to="/purchase" className="btn btn-sm btn-radius btn-default">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotals;
