import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";

//2 burada global typde girmek giyel olacak
interface Appstate {
    user:UserState;
    categories:any;
    records:any;
}



//combine derudcer obje aliyor
//burada reducer state beliretcegziz
//burada baslangictaki temel olarak state koyduk
const rootReducer = combineReducers <Appstate>({
     user:userReducer,
     categories:()=>{},
     records:()=>{}


}) 
export default rootReducer;