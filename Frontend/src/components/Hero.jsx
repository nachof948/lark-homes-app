import React from 'react';
import CasaHero from '/Casa - Hero.jpg'
import { SearchInput } from './SearchInput';

const Hero = () => {
  return(
    <section className='flex flex-col justify-between gap-5 items-center xl:flex-row xl:items-start '>
      <div className="flex flex-col font-nunito gap-10 ">
      <h1 className='font-bold text-3xl leading-snug sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:leading-snug w-[70vw] xl:w-[38vw] xl:leading-snug text-center xl:text-left'>Lleve la felicidad de su familia a la casa de sus sueños</h1>
        <p className='w-[40vw] leading-loose text-sm md:text-lg w-[70vw] text-center text-color-gris font-semibold xl:w-[38vw] xl:text-left'>Explora las mejores propiedades en tu área y descubre la casa de tus sueños. Compra, vende o renta con confianza y facilidad.</p>
        <SearchInput />
      </div>
      <img className='rounded-lg hidden h-[40rem] object-cover xl:w-[38vw] xl:block' src={CasaHero} alt="Casa" />
    </section>
  )
}

export { Hero }