import { userDataAction } from "./action";
import { ActionTypes } from "./constants";

const initialData={
    Data:[]
}

export const userDataReducer=(state=initialData,action)=>{
switch(action.type){
    case ActionTypes.userData:
        return {...state, Data:action.payload}
    default:
        return state
}
}