import React from 'react';
import dataHero from './dataHero.json'

const Statistics = () => {
  return(
    <div className='flex items-center gap-10'>
      {dataHero.map(datos =>(
        <div className="flex flex-col">
          <p className='font-nunito font-semibold text-4xl'>{datos.number}+</p>
          <p className='font-nunito text-xl'>{datos.text}</p>
        </div>
      ))}
    </div>
  )
}

export { Statistics }