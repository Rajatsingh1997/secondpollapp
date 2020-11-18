import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "Redux";
import rootReducer from "../Redux/Reducer/rootreducer";
import rootSaga from "../saga/CombineSaga";

const sagaMiddleware = createSagaMiddleware()
 const store = createStore(
rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;