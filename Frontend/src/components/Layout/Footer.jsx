import React from 'react';
import LogoFooter from '../../assets/Logo-Footer.png'
import { Link } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return(
    <footer className='bg-color-gris-claro font-nunito mt-10'>
      <div className="w-[85vw] flex flex-col items-start gap-3 justify-between mx-auto p-4 md:flex-row md:items-start">
      <div className="flex items-center gap-4">
        <img src={LogoFooter} alt="Lark Homes" className='w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] object-contain' />
        <span className='font-bold text-xl lg:text-2xl'>NacFer Estate</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className='font-bold text-xl lg:text-2xl'>Links de Interes</h3>
        <div className="flex flex-col">
          <Link to={'/search'} className='underline'>Propiedades</Link>
          <Link to={'/sobre-nosotros'} className='underline'>Sobre Nosotros</Link>
          <Link to={'/contacto'} className='underline'>Contactanos</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className='font-bold text-xl lg:text-2xl'>Sigamos en Contacto</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdPlace className='text-xl lg:text-2xl' />
            <p className='text-sm md:text-base' >Av.Libertador 54875, Buenos Aires</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className='text-lg ml-1' />
            <p className='text-sm md:text-base' >+54 11 548521852525</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className='text-xl ml-1' />
            <a href='mailto:larkhomes@hotmail.com' className='text-sm md:text-base' >nacferestate@hotmail.com</a>
          </div>
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export { Footer }