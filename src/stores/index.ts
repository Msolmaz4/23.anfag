import { combineReducers } from "redux";

//2 burada global typde girmek giyel olacak
interface Appstate {
    user:any;
    categories:any;
    records:any;
}



//combine derudcer obje aliyor
//burada reducer state beliretcegziz
//burada baslangictaki temel olarak state koyduk
const rootReducer = combineReducers <Appstate>({
     user:()=>{},
     categories:()=>{},
     records:()=>{}


}) 
export default rootReducer;