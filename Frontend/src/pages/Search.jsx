import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardProperty } from '../components/CardProperty';
import { SearchTab } from '../components/SearchTab';

const Search = () => {
  const { listing } = useSelector((state) => state.listing);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:'smooth'
    })
  },[])

  return (
    <main className='mt-32 mb-28 flex mx-auto justify-end w-[85vw]'>
      <SearchTab />
      <div className='w-[70%]'>
        {listing.length > 0 ?
        <div className="flex gap-10 flex-wrap">
          <CardProperty listing={listing} />
        </div>
        : 
        <p className='font-nunito flex justify-center text-2xl mt-4 '>No hay propiedades con esas caracteristicas</p>}
      </div>
    </main>
  );
}

export { Search };
