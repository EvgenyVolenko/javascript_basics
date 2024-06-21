import { configureStore } from "@reduxjs/toolkit";
import { middleware } from "../middlewares/middleware.js";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/rootReducer.js";
import usersSaga from "../sagas/usersSaga.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware, sagaMiddleware)
});

sagaMiddleware.run(usersSaga);

export default store;