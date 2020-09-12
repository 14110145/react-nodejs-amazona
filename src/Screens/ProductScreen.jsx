import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const { match } = props;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(match.params.id));
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + match.params.id + "?qty=" + qty);
  };

  return (
    <Fragment>
      <div className="back-to-result">
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
                <b>${product.price}</b>
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
              <li>Status: {product.countInStock > 0 ? "In Stock" : "Unavailable"}</li>
              <li>
                Qty{" "}
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                {product.countInStock > 0 && (
                  <button onClick={handleAddToCart} className="button primary">
                    Add to card
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductScreen;
