import axios from "axios";

export const initialProductsState = {
  products: [],
  backup: [],
  error: null,
  isLoading: false,
  singleProduct: {},
  loadingSingleProduct: false,
  singleProductError: null,
};

const productSlice = (state = initialProductsState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, isLoading: true };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        backup: action.payload,
      };
    case "GET_PRODUCTS_FAILED":
      return { ...state, isLoading: false, error: action.payload };
    case "FETCH_SINGLE_PRODUCT":
      return { ...state, loadingSingleProduct: true };
    case "SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        loadingSingleProduct: false,
        singleProduct: action.payload,
      };
    case "SINGLE_PRODUCT_FAILED":
      return {
        ...state,
        loadingSingleProduct: false,
        singleProductError: action.payload,
      };
    default:
      return state;
  }
};

export const fetchProducts = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: "FETCH_PRODUCTS" });
      const res = await axios.get("http://localhost:4000/products");
      dispatch(productSuccess(res.data));
    } catch (error) {
      dispatch(productsFailed(error.message));
    }
  };
};

const productSuccess = (data) => {
  return { type: "GET_PRODUCTS_SUCCESS", payload: data };
};

const productsFailed = (error) => {
  return { type: "GET_PRODUCTS_FAILED", payload: error };
};

export const fetchSingleProduct = (id) => {
  return async function (dispatch) {
    try {
      dispatch({ type: "FETCH_SINGLE_PRODUCT" });
      const res = await axios.get(`http://localhost:4000/products/${id}`);
      dispatch(singleProductSuccess(res.data));
    } catch (error) {
      dispatch(singleProductFailed(error.message));
    }
  };
};

const singleProductSuccess = (data) => {
  return { type: "SINGLE_PRODUCT_SUCCESS", payload: data };
};

const singleProductFailed = (error) => {
  return { type: "SINGLE_PRODUCT_FAILED", payload: error };
};

export default productSlice;
