import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import vacanciesReducer from "./reducers/vacancies";
import applicantsReducer from "./reducers/applicants";

const rootReducer = combineReducers({
  vacanciesReducer,
  applicantsReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
