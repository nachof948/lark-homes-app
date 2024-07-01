import { DELETE_COMMENT, GET_COMMENT, UPDATE_COMMENT} from "../../constants";

const initialState = {
    comments:[]
}

const commentReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_COMMENT:
            return{
                ...state,
                comments: action.payload
            }
        case DELETE_COMMENT:
            return{
                ...state,
                comments: state.comments.filter((comment) => comment._id !== action.payload)
            }
        case UPDATE_COMMENT:
            return{
                ...state,
                comments: state.comments.map((comment) => comment._id === action.payload._id ? action.payload : comment)
            }
        default:
            return state
    }
} 
export default commentReducer