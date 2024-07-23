import React from 'react';
import dataServices from '../../data/dataServices.json'

const OurServices = () => {
  return(
    <section className='w-[85vw] mx-auto mt-44'>
      <div className="flex flex-col gap-3 text-center items-center lg:text-left lg:items-start lg:flex-row lg:justify-between">
        <h1 className='font-nunito font-bold text-2xl lg:text-3xl w-[70vw] lg:w-[40vw]'>Pasos sencillos para comprar una propiedad o alquilar en <span className='text-color-azul'>NacFer Estate</span></h1>
        <p className='w-[70vw] font-nunito text-sm lg:text-base'>Comprar una propiedad es un proceso emocionante y en NacFer Estate queremos asegurarnos de que tu experiencia sea lo más sencilla posible. Aquí te presentamos los pasos para adquirir la casa de tus sueños</p>
      </div>
      <div className="flex flex-col items-center text-center lg:items-start lg:flex-row  gap-5 mt-16 font-nunito">
        {dataServices.map((data, index) =>(
          <div className="flex flex-col gap-4 items-center lg:items-start" key={index}>
            <p className='bg-color-negro text-white text-3xl  py-5 px-7 rounded-full'>{data.number}.</p>
            <h2 className='text-2xl font-bold'>{data.paso}</h2>
            <p>{data.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export { OurServices }