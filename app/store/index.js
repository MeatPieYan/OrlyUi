import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
// import promise from "redux-promise-middleware";
// import thunk from "redux-thunk";

import reducers from "../reducer";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger())
);

sagaMiddleware.run(rootSaga);

export default store;
