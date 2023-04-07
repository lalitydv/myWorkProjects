import { cartReducer } from "./reducers/cartReducer";
import { wishlistReducer } from "./reducers/wishlistReducer";
import { userReducer } from "./reducers/userReducer";
import { combineReducers } from "redux";

const rootred = combineReducers({
  cartReducer,
  wishlistReducer,
  userReducer,
});

export default rootred;
