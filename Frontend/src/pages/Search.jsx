import React from 'react';
import { useSelector } from 'react-redux';
import { CardProperty } from '../components/CardProperty';

const Search = () => {
  const { listing } = useSelector((state) => state.listing)

  return(
    <main className='mt-32'>
      <CardProperty listing={listing}/>
    </main>
  )
}

export { Search }