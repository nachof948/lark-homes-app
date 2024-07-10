import React from 'react';
import LogoFooter from '../assets/Logo-Footer.png'
import { Link } from 'react-router-dom';
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return(
    <footer className='mt-10 bg-color-gris-claro font-nunito'>
      <div className="w-[85vw] flex items-start justify-between mx-auto p-4">
      <div className="flex items-center gap-4">
        <img src={LogoFooter} alt="Lark Homes" className='w-[4rem]' />
        <span className='font-bold text-2xl'>Lark Homes</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className='font-bold text-2xl'>Links de Interes</h3>
        <div className="flex flex-col">
          <Link to={'/search'} className='underline'>Propiedades</Link>
          <Link to={'/sobre-nosotros'} className='underline'>Sobre Nosotros</Link>
          <Link to={'/contacto'} className='underline'>Contactanos</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className='font-bold text-2xl'>Sigamos en Contacto</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MdPlace className='text-2xl' />
            <p>Av.Libertador 54875, Buenos Aires</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className='text-lg ml-1' />
            <p>+54 11 548521852525</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className='text-xl ml-1' />
            <a href='mailto:larkhomes@hotmail.com'>larkhomes@hotmail.com</a>
          </div>
        </div>
      </div>
      </div>
      
    </footer>
  )
}

export { Footer }