import React from 'react';
import { SearchInput } from '../components/SearchInput'
const SearchTab = () => {
  const styleInput = 'text-md bg-slate-200 w-[23rem] py-4 px-8 rounded-full outline-none placeholder:text-md'
  const styleButton = 'absolute top-2 right-5 transition-all duration-300 font-semibold bg-color-azul border border-color-azul text-white font-nunito py-2 px-5 rounded-full hover:bg-transparent hover:text-color-azul'
  const styleIcon ='absolute top-5 left-2'
  return (
    <section className='w-[20%] h-screen fixed top-32 left-36 z-10 border-r border-r-2 overflow-y-auto'>
      {/* Contenido de SearchTab */}
      <SearchInput styleInput={styleInput} styleButton={styleButton} styleIcon={styleIcon}/>
    </section>
  );
}

export { SearchTab };
