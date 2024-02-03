import { combineReducers } from "redux";
import AddToCartReducer from "./AddToCartReducer";






export default combineReducers({

    // but all reducers
    cart : AddToCartReducer,


})