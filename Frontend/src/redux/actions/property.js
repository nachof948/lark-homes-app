import { GET_PUBLICATION, SEARCH_LISTING, DELETE_PUBLICATION, UPDATE_PUBLICATION, ALL_PROPERTIES } from "../../constants";
import * as api from '../../api/index'

export const publicationGet = (id) => async (dispatch) =>{
    try {
        const { data } = await api.getPublication(id)
        dispatch({type: GET_PUBLICATION, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const publicationGetAll = () => async (dispatch) =>{
    try {
        const { data } = await api.getAllPublication()
        dispatch({type: ALL_PROPERTIES, payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const publicationUpdate = (formData, id) => async (dispatch) =>{
    try {
        const { data } = await api.updatePublication(formData, id)
        console.log(data)
/*         dispatch({type: UPDATE_PUBLICATION, payload: data}) */
    } catch (error) {
        console.log(error)
    }
}
export const publicationDelete = (id) => async(dispatch) =>{
    try {
        await api.deletePublication(id)
        dispatch({type: DELETE_PUBLICATION, payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const searchGet = (searchQuery) => async (dispatch) =>{
    try {
        const { data } = await api.getSearch(searchQuery)
        console.log(data)
        dispatch({type: SEARCH_LISTING, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const propertyLike = (id) => async (dispatch) => {
    try {
      const { data } = await api.likeProperty(id);
    dispatch({type: UPDATE_PUBLICATION, payload: data}) 
    } catch (error) {
      console.log(error);
    }
  };