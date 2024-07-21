import React from 'react';
import MoveHouse from '../../public/images/Move-your-dream.jpg'
import YourDream1 from '../../public/images/Your-Dream-1.jpg'
import YourDream2 from '../../public/images/Your-Dream-2.jpg'
import YourDream3 from '../../public/images/Your-Dream-3.jpg'
import { useNavigate } from 'react-router-dom';

const ExploreProperties = () => {
  const navegar = useNavigate();
  
  const navigateToSearch = () => {
    navegar(`/search`)
  }

  return(
    <section className='flex items-start gap-7 mb-16 font-nunito'>
      <img className='rounded-lg w-[40%] h-[40rem] object-cover' src={MoveHouse} alt="Casa con pileta" />
      <div className="flex flex-col gap-5 items-start">
        <h1 className='text-7xl font-bold w-[70%]'>Mudémonos a la casa familiar de tus sueños</h1>
        <p className='text-xl text-color-gris'>Encuentra el hogar perfecto para tu familia con nuestro equipo de expertos. Nos comprometemos a hacer realidad tus sueños, brindándote el mejor servicio y asesoramiento en cada paso del camino.</p>
        <button onClick={navigateToSearch} className='bg-color-azul text-white text-xl p-4 rounded-2xl border transition-all duration-300 hover:bg-transparent hover:text-color-azul hover:border-color-azul'>Explorar Propiedades</button>
        <div className="flex items-center gap-7">
          <img className='w-[16rem] h-[15.5rem] object-cover rounded-lg' src={YourDream1} alt="Casa de tus sueños" />
          <img className='w-[16rem] h-[15.5rem] object-cover rounded-lg' src={YourDream2} alt="Casa de tus sueños" />
          <img className='w-[16rem] h-[15.5rem] object-cover rounded-lg' src={YourDream3} alt="Casa de tus sueños" />
        </div>
      </div>
    </section>
  )
}

export { ExploreProperties }