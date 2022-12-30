import { useReducer } from "react";
import { combineReducers } from "redux";
import CounterReducer from "./CounterRedux/CounterReducer";
import UserReducer from "./CounterRedux/UserReducer";

export default combineReducers ({

    counter : CounterReducer,
    user: UserReducer

})