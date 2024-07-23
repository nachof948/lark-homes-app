import { Input } from "../components/Input"
import ImagenLogin from '../assets/Casa - 2.jpg'
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearError, signin } from "../redux/actions/auth"
import { useNavigate, Link } from "react-router-dom"
import { OAuth } from '../components/OAuth'
import { validateEmail } from "../utils/validateEmail"


const SignIn = () => {
  const { error} = useSelector((state) => state.auth)
  const navegar = useNavigate()
  const dispatch = useDispatch() 
  const [errors, setErrors] = useState('')
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if(!formData.email || !formData.password){
      setErrors('Debes completar todos los campos')
      return
    }

    if(!validateEmail(formData.email)){
      setErrors('Debes escribir un email valido')
      return
    }
    dispatch(signin(formData))
    navegar('/')
  }
  
  useEffect(() =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },[])
  
  const inputForm = 'outline-none p-3 text-color-azul bg-transparent placeholder:text-color-azul font-nunito text-lg border border-color-azul rounded-md w-[100%] sm:w-[27rem]'

  return(
    <section className="w-full mx-auto mt-30 flex items-center justify-evenly" style={{backgroundImage:`url(${ImagenLogin})`, backgroundPosition:'center', height:'100vh'}}>
    <form className='flex flex-col gap-4 items-center bg-white py-6 px-3 w-[90vw] sm:w-[30rem] rounded-md' onSubmit={handleSubmit} >
      <h1 className="font-semibold text-xl font-nunito">Iniciar Sesion</h1>
      <Input className={inputForm} type="text" placeholder='Email' name='email' onChange={handleChange} />
      <Input className={inputForm} type="password" placeholder='Contraseña' name='password' onChange={handleChange} />
      {errors && <p className="text-red-600">{errors}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <button className='bg-color-azul w-[100%] sm:w-[95%] text-white font-nunito p-3 text-xl rounded-md hover:opacity-90'>Iniciar Sesion</button>
      <div className="flex items-center gap-3">
        <p >No tienes una cuenta?</p>
        <Link to={'/registrarse'} className='text-color-azul'>Registrarse</Link>
      </div>
      <OAuth />
    </form>
  </section>
  )
}

export { SignIn }