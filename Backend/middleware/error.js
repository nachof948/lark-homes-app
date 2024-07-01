export const errorHandler = (statusCode, message)=>{
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    console.log(statusCode, message)
    return error
}