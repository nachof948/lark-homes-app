export const validateEmail = (email) =>{
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
    return regExp.test(String(email).toLowerCase())
}