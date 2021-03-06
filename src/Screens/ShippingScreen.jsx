import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveShipping } from "../actions/cartAction";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, city, postalCode, country }));
    props.history.push("payment");
  };

  return (
    <Fragment>
      <div>
        <CheckoutSteps step1 step2 />
      </div>
      <div className="form">
        <form onSubmit={submitHandler}>
          <ul className="form-container">
            <li>
              <h2>Shipping</h2>
            </li>

            <li>
              <label htmlFor="address">Address</label>
              <input
                type="name"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="city">City</label>
              <input
                type="name"
                name="city"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="name"
                name="postalCode"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </li>

            <li>
              <label htmlFor="country">Country</label>
              <input
                type="name"
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
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

export default ShippingScreen;
