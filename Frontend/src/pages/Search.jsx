import React from 'react';
import { useSelector } from 'react-redux';
import { CardProperty } from '../components/CardProperty';
import { SearchTab } from '../components/SearchTab';

const Search = () => {
  const { listing } = useSelector((state) => state.listing);

  return (
    <main className='mt-32 flex mx-auto justify-end w-[85vw]'>
      <SearchTab />
      <div className='w-[70%]'>
        {listing.length > 0 ? 
        <CardProperty listing={listing} /> : 
        <p className='font-nunito flex justify-center text-2xl mt-4 '>No hay propiedades con esas caracteristicas</p>}
      </div>
    </main>
  );
}

export { Search };
