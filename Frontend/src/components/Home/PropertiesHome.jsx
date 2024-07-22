import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CardProperty } from '../CardProperty'
import { publicationGetAll } from '../../redux/actions/property';


const PropertiesHome = () => {
  const dispatch = useDispatch()
  const { listing } = useSelector((state) => state.listing);
  
  const sortedProperties = [...listing].sort((a, b) => b.likes.length - a.likes.length);

  const topProperties = sortedProperties.splice(0, 4)
  
  useEffect(() => {
    dispatch(publicationGetAll())
  },[dispatch])
  
  return(
    <section className='flex flex-col mb-2'>
      <div className="flex flex-col gap-6 items-center lg:flex-row lg:justify-between">
        <h2 className='font-nunito font-semibold text-2xl xl:text-4xl '>Propiedades Destacadas</h2>
        <p className='font-nunito w-[70vw] text-color-gris text-center text-sm xl:text-lg lg:w-[50vw] lg:text-right' >Descubre propiedades que combinan lujo, confort y ubicación privilegiada. Desde apartamentos modernos en la ciudad hasta casas encantadoras en barrios tranquilos, ofrecemos una variedad de estilos y tamaños para satisfacer tus necesidades.</p>
      </div>
      <div className="mt-4 flex items-baseline gap-10">
        <CardProperty listing={topProperties} />
      </div>
    </section>
  )
}

export { PropertiesHome }