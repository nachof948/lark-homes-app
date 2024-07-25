import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SearchTab } from '../components/SearchTab';
import { CardPropertySearch } from '../components/CardPropertySearch';
import { FaArrowCircleRight } from "react-icons/fa";
import { useScrollToTop } from '../hooks/useScrollTo'

const Search = () => {
  const { listing } = useSelector((state) => state.listing);
  const [open, setOpen] = useState(false); // Agregar estado para manejar la apertura del menú
  useScrollToTop()


  return (
    <main className='mt-32 mb-22 flex mx-auto justify-end w-[85vw] relative'>
      {/* Icono de menú */}
      <div 
        onClick={() => setOpen(prevOpen => !prevOpen)} 
        className='text-3xl absolute top-3 left-0 cursor-pointer lg:hidden z-40'>
        <FaArrowCircleRight />
      </div>
      <div className="hidden lg:block">
        <SearchTab />
      </div>
      {/* Contenedor del SearchTab */}
      {open && (
        <div className='fixed inset-0 z-30 lg:hidden'>
          <SearchTab />
        </div>
      )}
      
      {/* Contenedor principal */}
      <div className={`w-[100%] lg:w-[70%] ${open ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {listing.length > 0 ? (
          <CardPropertySearch listing={listing} />
        ) : (
          <p className='font-nunito flex justify-center text-2xl mt-4'>No hay propiedades con esas características</p>
        )}
      </div>
    </main>
  );
}

export { Search };

