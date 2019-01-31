import { combineReducers } from "redux";
import modal from './modalReducer';
//import login from './loginReducer';
 
const mainReducer = combineReducers({
    modal,
   // login
});
export default mainReducer;