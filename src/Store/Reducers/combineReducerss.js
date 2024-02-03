import { combineReducers } from "redux";
import AddToCartReducer from "./AddToCartReducer";
import RemoveCartReducers from "./RemoveCartReducers";






export default combineReducers({

    // but all reducers
    cart : AddToCartReducer,
    deleteCart : RemoveCartReducers,



})