import { combineReducers, createStore } from "redux";
import todoReducer from "./reducer/todoReducer";
import userReducer from "./reducer/todoReducer";

const rootReducer = combineReducers({ todoReducer, userReducer });
// birden fazla reducer varsa combineReducer ile birlestirilir.

const store = createStore(rootReducer); //store kurulumu

export default store; // storu export ediyoruz

// main.jsx de storu projeye tanitiyoruz.
