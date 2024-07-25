import { useEffect, useState } from 'react'
import ImagenRegistro from '../assets/Casa - 1.jpg'
import { Input } from '../components/Input'
import { UploadImage } from '../components/UploadImage'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearError, signup } from '../redux/actions/auth'
import { validateEmail } from '../utils/validateEmail'
import { OAuth } from '../components/OAuth'
import { useScrollToTop } from '../hooks/useScrollTo'

const SignUp = () => {
  const { error } = useSelector((state) => state.auth)
  const navegar = useNavigate()
  const dispatch = useDispatch()
  const [errors, setErrors] = useState('')
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:'',
    seller:false,
    imageProfile:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  })
  
  useScrollToTop()

  useEffect(() =>{
    dispatch(clearError())
  },[dispatch])


  const handleImageChange = (imageUrl) =>{
    setFormData({
      ...formData,
      imageProfile: imageUrl
    })
  }
    
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.type ==='checkbox' ? e.target.checked : e.target.value,
    })
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    // Verificar si todos los campos están completos
    if (!formData.username || !formData.email || !formData.password) {
      setErrors('Debes completar todos los campos')
      return
    }
    if(!validateEmail(formData.email)){
      setErrors('Debes escribir un email valido')
      return
    }
    dispatch(signup(formData))
    navegar('/')
  }
  const inputForm = 'outline-none p-3 text-color-azul bg-transparent placeholder:text-color-azul font-nunito text-lg border border-color-azul rounded-md w-[100%] sm:w-[27rem]'

  return(
    <section className="w-full mx-auto mt-30 flex items-center justify-evenly " style={{backgroundImage:`url(${ImagenRegistro})`, backgroundPosition:'center', height:'100vh'}}>
      <form className='flex flex-col gap-4 items-center bg-white py-6 px-3 w-[90vw] sm:w-[30rem] rounded-md'onSubmit={handleSubmit} >
        <UploadImage onImageChange={handleImageChange} />
        <Input className={inputForm} type="text" placeholder='Nombre Completo' name='username' onChange={handleChange} />
        <Input className={inputForm} type="text" placeholder='Email' name='email' onChange={handleChange} />
        <Input className={inputForm} type="password" placeholder='Contraseña' name='password' onChange={handleChange} />
        <div className="flex items-center w-[10rem] gap-2 text-nowrap text-xl font-nunito text-color-azul">
          <Input type="checkbox" name='seller' onChange={handleChange} checked={formData.seller} />
          <p>Sos vendedor?</p>
        </div>
        {errors && <p className='text-red-600'>{errors}</p>}
        {error && <p className='text-red-600'>{error}</p>}
        <button className='bg-color-azul w-full text-white font-nunito p-3 text-xl rounded-md hover:opacity-90'>Registrarme</button>
        <div className="flex items-center gap-3">
          <p >Ya tienes una cuenta?</p>
          <Link to={'/iniciar-sesion'} className='text-color-azul'>Iniciar Sesion</Link>
        </div>
      <OAuth />
      </form>
    </section>
  )
}

export { SignUp }