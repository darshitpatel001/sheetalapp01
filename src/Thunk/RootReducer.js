import { useReducer } from "react";
import { combineReducers } from "redux";
import CounterReducer from "./CounterRedux/CounterReducer";
import PostReducer from "./CounterRedux/PostReducer";
import UserReducer from "./CounterRedux/UserReducer";

export default combineReducers ({

    counter : CounterReducer,
    user: UserReducer,
    posts: PostReducer

})