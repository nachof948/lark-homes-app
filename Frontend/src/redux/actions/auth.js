import * as api from '../../api/index'
import { AUTH, ERROR, LOGOUT, CLEAR_ERROR } from '../../constants'

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({type: AUTH, payload: data})
    } catch (error) {
        if (error.response.data.message) {
            dispatch({ type: ERROR, payload: error.response.data.message})
        } else {
            console.log(error.message)  // Mensaje de error genérico de Axios
        }
    }
}

export const signin = (formData) => async (dispatch) =>{
    try {
        const { data } = await api.signIn(formData)
        dispatch({type: AUTH, payload: data})
    } catch (error) {
        if (error.response.data.message) {
            dispatch({ type: ERROR, payload: error.response.data.message})
        } else {
            console.log(error.message)  // Mensaje de error genérico de Axios
        }
    }
}

export const googleAuth = (formData) => async (dispatch) =>{
    try {
        const { data } = await api.google(formData)
        dispatch({type: AUTH, payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const logout = () => async (dispatch) =>{
    try {
        const { data } = await api.logOut()
        dispatch({type: LOGOUT, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const clearError = () => ({ type: CLEAR_ERROR });