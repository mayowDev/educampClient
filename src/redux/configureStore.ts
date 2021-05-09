import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import rootReducer from "./combineReducers";
const middlewares = [applyMiddleware(thunkMiddleware)]

const w: any = window as any;
if (process.env.NODE_ENV === "development") {
  middlewares.push(
      w.__REDUX_DEVTOOLS_EXTENSION__ ? w.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
}
// const enhancedCompose=w.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
// const store:any = createStore(rootReducer, enhancedCompose(applyMiddleware(thunkMiddleware)))

const store:any = createStore(rootReducer, compose(...middlewares))

export default store;
