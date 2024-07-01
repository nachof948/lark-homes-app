import axios from 'axios'

const API = axios.create({
    baseURL:'http://localhost:4500/',
    withCredentials: true
})

/* AUTH */
export const signUp = (formData) => API.post('/auth/signup', formData)
export const signIn = (formData) => API.post('/auth/signin', formData)
export const google = (formData) => API.post('/auth/google', formData)
export const logOut = () => API.post('/auth/logout')

/* USER */
export const updateUser = (formData, id) => API.post(`/user/update/${id}`, formData,{
    withCredentials:'include'
})
export const getPublicationUser = (id) => API.get(`/user/properties/${id}`,{
    withCredentials:'include'
})
export const getUser = (id) => API.get(`/user/details/${id}`,{
    withCredentials: 'include'
})


/* PROPIEDADES */
export const createPublication = (formData, userRef) => API.post('/properties/create', {formData, userRef} ,{
    withCredentials:'include'
})
export const getPublication = (id) => API.get(`/properties/property/${id}`,{
    withCredentials:'include'
})
export const updatePublication = (formData, id) => API.put(`/properties/update/${id}`, {formData} ,{
    withCredentials:'include'
})
export const deletePublication = (id) => API.delete(`/properties/delete/${id}`, {
    withCredentials:'include'
})

/* COMENTARIOS */
export const createComment = (content, userRef, postId) => API.post(`/comment/create`, {content, userRef, postId},{
    withCredentials:'include'
})
export const getComment = (postId) => API.get(`/comment/getComment/${postId}`,{
    withCredentials:'include'
})
export const deleteComment = (id) => API.delete(`/comment/deleteComment/${id}`, {
    withCredentials:'include'
})
export const updateComment = (id, content) => API.put(`/comment/editComment/${id}`, {content},{
    withCredentials:'include'
})

