import { DELETE_IMAGE, DELETE_PUBLICATION, GET_PUBLICATION, GET_PUBLICATION_USER, UPDATE_PUBLICATION,SEARCH_LISTING, ALL_PROPERTIES } from "../../constants";

const initialState = {
    listing:[],
    list:{},
    showMore:null
}

const listingReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_PUBLICATION:
            return{
                ...state,
                list: action.payload
            }
        case DELETE_PUBLICATION:
            return{
                ...state,
                listing: state.listing.filter((list) => list._id !== action.payload)
            }
        case DELETE_IMAGE:
            return{
                ...state, 
                list:{...state.list, imageUrls: action.payload}
            }
        case GET_PUBLICATION_USER:
            return{
                ...state,
                listing: action.payload
            }
        case UPDATE_PUBLICATION:
            return{
                ...state,
                list: action.payload
            }
        case SEARCH_LISTING:
            return {
                ...state, 
                listing: action.payload
            }
        case ALL_PROPERTIES:
            return{
                ...state, 
                listing: action.payload
            }
        default:
            return state
    }
} 
export default listingReducer