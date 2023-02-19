
import api from '../../utils/api'
import { LoginForm, UserDispatch ,User} from "../../types/user";

//userdisptch type tanimladik uc parameter ealir 
//loginfornm typde duyen;ledim gelende username ve passwor olmali
export const login =  (creds :LoginForm)=>  async (dispatch:UserDispatch)=>{

    dispatch({type:'LOGIN_START'})

    try {
        const response = await api.post<User>('/users/login',creds);
        dispatch({ type:"LOGIN_SUCCES", payload: response.data });
        localStorage.setItem("token", response.data.token);
        
    } catch (error) {
        dispatch({ type: "LOGIN_ERROR" });
    }
    
}