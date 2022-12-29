import { createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import RootReducer from "../RootReducer";

const middleware = [thunk];

const store = createStore(RootReducer,middleware);

export default store;