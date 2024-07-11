import React from 'react';
import ImagenLogin from '../assets/Casa - 2.jpg'
const ContactUs = () => {
  return(
    <section className=' mt-5 flex flex-col items-center justify-center font-nunito'style={{backgroundImage:`url(${ImagenLogin})`, backgroundPosition:'center', height:'100vh'}}>
      <h1 className='text-4xl font-bold text-center'>Contactate con Lark Homes</h1>
      <p className='text-center'>Complete el siguiente formulario y nos comunicaremos con usted lo antes posible.</p>
      <form className='w-full max-w-md p-8 mt-16 bg-white shadow-lg rounded-xl'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='name'>Nombre Completo</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Nombre y Apellido' />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='email'>Email</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='Email' />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='email'>Link de la propiedad</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='link de la propiedad' />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-lg font-bold mb-2' htmlFor='message'>Comentario</label>
          <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' placeholder='Comentario' rows='5'></textarea>
        </div>
        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Enviar</button>
      </form>
    </section>
  )
}

export { ContactUs }