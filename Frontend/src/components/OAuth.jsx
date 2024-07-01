import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { googleAuth } from '../redux/actions/auth'

const OAuth = () => {
  const navegar = useNavigate()
  const dispatch = useDispatch()
  
  const handleGoogleClick = async () =>{
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const formData = {
        username:result.user.displayName,
        email: result.user.email,
        imageProfile: result.user.photoURL
      }
      dispatch(googleAuth(formData))
      navegar('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-75"
    >
      Continuar con Google
    </button>
  )
}

export { OAuth }