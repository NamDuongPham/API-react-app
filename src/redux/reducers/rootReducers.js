import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import xucXacReducer from "./xucXacReducer";
const rootReducers=  combineReducers({
    demo:demoReducer,
    xucXac:xucXacReducer,
})
export default rootReducers;