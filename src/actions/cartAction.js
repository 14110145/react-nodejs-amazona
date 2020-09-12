import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

const addToCart = (propductId, qty) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products/" + propductId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (error) {}
};

export { addToCart };
