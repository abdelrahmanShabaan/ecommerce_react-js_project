import { combineReducers } from "redux";
import AddToCartReducer from "./AddToCartReducer";
import RemoveCartReducers from "./RemoveCartReducers";
import AddToFavoriateReducer from "./AddToFavoriateReducer";






export default combineReducers({

    // but all reducers
    cart : AddToCartReducer,
    deleteCart : RemoveCartReducers,
    favoriate : AddToFavoriateReducer,



})