import {User, UserAction, UserState } from "../../types/user";


//2 bu asamda bir tane deafult state ihtiyacimiz var
//datayi bos biareksak hat aliriz bunu yerin as User yazariz
//sonra store gidip index ts icindeki user user Reducer yap

const defaultState :UserState ={
    data: {} as User,
    loading:false,
    error:''

}

//1state kullanici bilgileri basta hat averir
//action da istek yaparken succe error start bunlaley types icindeki user yaprik 
const userReducer = (state:UserState=defaultState,action:UserAction)=>{
  
   switch(action.type){
    case 'LOGIN_START':
        return{...state,loading:true,error:''};
    case 'LOGIN_SUCCES':
        return{...state,loading:false,data:action.payload}
        case 'LOGIN_ERROR':
        return{...state,loading:false,error:'loading'}
        default:
        return state;
   }
   
   

   



}


export default userReducer;