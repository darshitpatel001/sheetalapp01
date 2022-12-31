// import { createStore , applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import RootReducer from "../RootReducer";

// const middleware = [thunk];

// const store = createStore(RootReducer, applyMiddleware(...middleware));

// export default store;

import { createStore , applyMiddleware} from "redux";
import createsagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import RootReducer from "../RootReducer";
import rootSaga from "../Saga/rootSaga";

const sagaMiddleware = createsagaMiddleware(rootSaga);
const middleware = [sagaMiddleware];

const store = createStore(RootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga)
export default store;