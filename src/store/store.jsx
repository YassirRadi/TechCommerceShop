import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import productSlice from "@reducers/productSlice";
import cartSlice from "@reducers/cartSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
