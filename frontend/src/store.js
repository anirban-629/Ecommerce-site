import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  cartReducer,
  productDetailsReducer,
  productListReducer,
} from "./reducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  cart: { cartItems: cartItemFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;