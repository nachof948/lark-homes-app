import React from 'react';
import CasaHero from '../../public/Casa - Hero.jpg'
import { SearchInput } from './SearchInput';
import { Statistics } from './Statistics';
const Hero = () => {
  return(
    <section className='flex justify-between items-stretch'>
      <div className="flex flex-col font-nunito gap-10 ">
        <h1 className=' font-bold text-7xl w-[45rem] leading-snug'>Bring Your Family's Hapinnes to Your Dream House </h1>
        <p className='w-[45rem] leading-loose text-lg text-color-gris font-semibold'>Explora las mejores propiedades en tu área y descubre la casa de tus sueños. Compra, vende o renta con confianza y facilidad.</p>
        <SearchInput />
        <Statistics />
      </div>
      <img className='rounded-lg w-[45rem] h-[40rem]' src={CasaHero} alt="Casa" />
    </section>
  )
}

export { Hero }