import { ThunkDispatch } from "redux-thunk";


export interface User {
    message:string;
    username:string;
    email:string;
    full_name:string;
    token:string;
}

export interface LoginForm {
    username:string;
    password:string;

}

export interface UserState {
    data:User;
    loading:boolean;
    error:string;


}
//LOGIN OLURKEN dispbac tpe olusturmak
interface LOGIN_START {

     type:'LOGIN_START';
}
//basarli olursa patload user gondermek istiyorum
interface LOGIN_SUCCES {
    type:'LOGIN_SUCCES';
    payload:User;
}
interface LOGIN_ERROR{
  type:'LOGIN_ERROR';
}
//BUNLARI ARADA TUTAN AXCTION YAPARIZ
export type UserAction = LOGIN_START | LOGIN_SUCCES| LOGIN_ERROR

//userdispatch
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>