import { combineReducers, createStore } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    count: countReducer,
    users: userReducer,
})

export const store = createStore(rootReducer)