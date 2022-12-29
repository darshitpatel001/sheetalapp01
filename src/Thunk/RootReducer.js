import { combineReducers } from "redux";
import CounterReducer from "./CounterRedux/CounterReducer";

export default combineReducers ({

    counter : CounterReducer

})