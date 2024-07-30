import React, { useEffect, useState } from 'react';
import ImagenLogin from '../../assets/Casa - 2.jpg';
import emailjs from 'emailjs-com';
import { useScrollToTop } from '../../hooks/useScrollTo' 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const ContactWithUs = () => {
  const navegar = useNavigate()
  useScrollToTop()
  const [propertyUrl, setPropertyUrl] = useState('');
  const mensaje = `Hola quiero ver la siguiente propiedad: `
  useEffect(() => {
    // Recupera el enlace de propiedad guardado en localStorage
    const url = localStorage.getItem('currentUrl');
    if (url) {
      setPropertyUrl(url);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construye los parámetros del template para enviar por EmailJS
    const templateParams = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value + `El cliente quiere la siguiente propiedad: ${propertyUrl}`,
    };

    emailjs.send('service_qoppndk', 'template_mvnnfwc', templateParams, 'a843VPCEW6DfGtCe-')
      .then((result) => {
        console.log(result.text);
        toast.success('El mensaje fue enviado nos comunicaremos con usted dentro de las proximas 24hs a 48hs');
        navegar('/')
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <section className='mt-5 flex flex-col items-center justify-center font-nunito' style={{ backgroundImage: `url(${ImagenLogin})`, backgroundPosition: 'center', height: '100vh' }}>
      <form className='w-full max-w-md p-8 mt-16 bg-white shadow-lg rounded-xl' onSubmit={handleSubmit}>
        <h1 className='text-5xl font-bold text-center mb-4'>Contactate con <span className='text-color-azul'>Nac Fer Estate</span></h1>
        <div className='mb-4'>
          <label className='block text-gray-700 text-lg font-bold mb-2'>Nombre Completo</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='user_name' type='text' placeholder='Nombre y Apellido' required />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2'>Email</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='user_email' type='email' placeholder='Email' required />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2'>Comentario</label>
          <textarea className='shadow appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='message' placeholder='Comentario' value={mensaje+propertyUrl} rows='5' readOnly></textarea>
        </div>
        <button className='w-full bg-color-azul border border-color-azul hover:bg-transparent hover:text-color-azul text-white font-bold py-2 px-4 rounded transition-all duration-300 focus:outline-none focus:shadow-outline' type='submit'>Enviar</button>
      </form>
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
    </section>
  )
}

export { ContactWithUs }
