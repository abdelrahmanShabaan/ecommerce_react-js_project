import { applyMiddleware, createStore } from "redux";
import combineReducerss from "./Reducers/combineReducerss";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";




const mystore = createStore(combineReducerss , 
    composeWithDevTools(applyMiddleware(thunk)))
    


export default mystore;