import React, { Fragment } from "react";
import data from "../data";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const { match } = props;
  console.log(match.params);
  const product = data.products.find((x) => x._id === match.params.id) || "Not found...";
  return (
    <Fragment>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>
                <li>{product.name}</li>
              </h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              Description:
              {product.description}
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>Status: {product.status}</li>
            <li>
              Qty:{" "}
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </li>
            <li>
              <button className="button primary">Add to card</button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductScreen;
