import { ActionTypes } from "./constants";

export const userDataAction=(data)=>({
type:ActionTypes.userData,
payload:data
})