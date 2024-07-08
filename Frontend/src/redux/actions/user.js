import * as api from '../../api/index'
import { UPDATE_USER, GET_PUBLICATION_USER, USER_DATA, DELETE_USER} from '../../constants'

export const userUpdate = (formData,id) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(formData,id)
        dispatch({type: UPDATE_USER, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const userDelete = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id)
        dispatch({type: DELETE_USER })
    } catch (error) {
        console.log(error)
    }
}



export const userGetPublication = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPublicationUser(id)
        dispatch({type: GET_PUBLICATION_USER, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const userGet = (id) => async (dispatch) => {
    try {
        const { data } = await api.getUser(id)
        dispatch({type: USER_DATA, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const userAddPostLike = (id) => async (dispatch) => {
    try {
        const { data } = await api.getPublicationLikes(id)
        dispatch({type: UPDATE_USER, payload: data})
    } catch (error) {
        console.log(error)
    }
}