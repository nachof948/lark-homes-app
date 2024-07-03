import React from 'react';
import { useSelector } from 'react-redux';
const Search = () => {
  const { listing } = useSelector((state) => state.listing)
  console.log(listing)

  return(
    <div>Search</div>
  )
}

export { Search }