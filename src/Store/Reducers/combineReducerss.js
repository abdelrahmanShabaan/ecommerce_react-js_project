import { combineReducers } from "redux";
import AddToCartReducer from "./AddToCartReducer";
import RemoveCartReducers from "./RemoveCartReducers";
import AddToFavoriateReducer from "./AddToFavoriateReducer";
import RemoveFavoriteReducer from "./RemoveFavoriteReducer";






export default combineReducers({

    // but all reducers
    cart : AddToCartReducer,
    deleteCart : RemoveCartReducers,
    favoriate : AddToFavoriateReducer,
    deletefavoriate : RemoveFavoriteReducer,




})