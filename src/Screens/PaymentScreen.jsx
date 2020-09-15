import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { savePayment } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("placeorder");
  };

  return (
    <Fragment>
      <div>
        <CheckoutSteps step1 step2 step3 />
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Payment</h2>
            </li>

            <li>
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  id="paymentMethod"
                  value="paypal"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />{" "}
                <label htmlFor="paymentMethod">Paypal</label>
              </div>
            </li>

            <li>
              <button type="submit" className="button primary">
                Continue
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Fragment>
  );
}

export default PaymentScreen;
