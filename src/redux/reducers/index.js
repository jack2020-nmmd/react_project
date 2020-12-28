import { combineReducers } from "redux";//让它来统一暴露
import  testReducer  from "./test_reducer";
export default combineReducers({
    test:testReducer
})