
import { AUTH, LOGOUT,ERROR, CLEAR_ERROR, UPDATE_USER, USER_DATA } from "../../constants"
const initialState={
    user: null,
    error: false,
    userData: null
}
const auth = (state= initialState, action) =>{
    switch(action.type){
        case AUTH:
            return{
                ...state,
                user:action.payload
            }
        case LOGOUT:
            return{
                ...state,
                user:null
            }
        case ERROR:
            return{
                ...state,
                error: action.payload
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error: false
            }
        case UPDATE_USER:
            return{
                ...state,
                user: action.payload
            }
        case USER_DATA:
            return{
                ...state,
                userData: action.payload
            }
        default:{
            return state
        }
    }
} 

export default auth