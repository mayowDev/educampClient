import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./combineEpics";
import rootReducer from "./combineReducers";
const w: any = window as any;

const epicMiddleware = createEpicMiddleware();
const middlewares = [applyMiddleware(epicMiddleware)];
console.log("process.env.store", process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
  middlewares.push(
      w.__REDUX_DEVTOOLS_EXTENSION__ ? w.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  );
}

const store:any = createStore(rootReducer, compose(...middlewares));

epicMiddleware.run(rootEpic);

export default store;
