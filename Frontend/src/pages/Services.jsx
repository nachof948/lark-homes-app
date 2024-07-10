import React from 'react';
import dataServices from '../data/dataServices.json'
const Services = () => {
  return(
    <section className='w-[85vw] mx-auto mt-52'>
      <div className="flex justify-between">
        <h1 className='font-nunito font-bold text-3xl w-[40rem]'>Pasos sencillos para comprar una propiedad o alquilar en <span className='text-color-azul'>Lark Homes</span></h1>
        <p className='w-[45rem] font-nunito'>Comprar una propiedad es un proceso emocionante y en Lark Homes queremos asegurarnos de que tu experiencia sea lo más sencilla y agradable posible. Aquí te presentamos los pasos esenciales para ayudarte a adquirir la casa de tus sueños</p>
      </div>
      <div className="flex items-start gap-5 mt-16 font-nunito">
        {dataServices.map((data, index) =>(
          <div className="flex flex-col gap-4 items-start" key={index}>
            <p className='bg-color-negro text-white text-3xl  py-5 px-7 rounded-full'>{data.number}.</p>
            <h2 className='text-2xl font-bold'>{data.paso}</h2>
            <p>{data.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Services }