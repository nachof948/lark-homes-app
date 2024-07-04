import React from 'react';
import { useSelector } from 'react-redux';
import { CardProperty } from './CardProperty'
const PropertiesHome = () => {
  const { listing } = useSelector((state) => state.listing);

  
  const sortedProperties = [...listing].sort((a, b) => b.likes.length - a.likes.length);

  const topProperties = sortedProperties.splice(0, 4)



  return(
    <section className='flex flex-col mb-6'>
      <div className="flex justify-between items-center">
        <h2 className='font-nunito font-semibold text-4xl'>Propiedades Destacadas</h2>
        <p className='font-nunito w-[50rem] text-color-gris'>Descubre propiedades que combinan lujo, confort y ubicación privilegiada. Desde apartamentos modernos en la ciudad hasta casas encantadoras en barrios tranquilos, ofrecemos una variedad de estilos y tamaños para satisfacer tus necesidades.</p>
      </div>
      <div className="mt-4 flex items-baseline gap-20">
        <CardProperty listing={topProperties} />
      </div>
    </section>
  )
}

export { PropertiesHome }