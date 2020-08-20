import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../Redux/Reducers";
import rootSaga from "../Saga";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleWare();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware), composeEnhancers())
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
