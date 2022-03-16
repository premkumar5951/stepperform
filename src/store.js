import {createStore,combineReducers} from "redux"
import { userDataReducer } from "./redux/reducers"


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const reducers=combineReducers({userdata:userDataReducer})
export default createStore(reducers ,composeEnhancers)