
import { CiShare2 } from "react-icons/ci";
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const CopiedUrl = () => {

  const handleCopied = () =>{
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copiado!!')
  }

  return(
    <div className="">
      <CiShare2
      className='text-2xl lg:text-4xl cursor-pointer hover:text-color-azul relative'
      onClick={handleCopied}
      />
        <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>

  )
}

export { CopiedUrl }