import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CardProperty = ({ listing }) => {
  const navigate = useNavigate();

  const navigateToPublication = (id) => {
    navigate(`/publicacion/${id}`);
  }

  return (
    <div className="flex flex-wrap  justify-center gap-11 items-center w-[100%] xl:justify-between xl:flex-nowrap lg:flex-wrap ">
      {listing?.map(propiedad => (
        <div className="flex flex-col relative w-[65vw] xl:w-[20vw] lg:w-[40vw] font-nunito cursor-pointer mb-4" onClick={() => navigateToPublication(propiedad._id)} key={propiedad._id}>
          <div className="relative w-full h-[15rem] overflow-hidden rounded-lg">
            <img src={propiedad.imageUrls[0]} alt={propiedad.name} className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'/>
          </div>
          <p className='bg-color-negro w-fit text-white px-4 py-2 rounded-2xl absolute top-2 left-2'>${propiedad.regularPrice}</p>
          <h2 className='text-2xl font-semibold truncate'>{propiedad.name}</h2>
          <div className="flex items-center gap-2 mt-2">
            <FaLocationDot />
            <p className='truncate'>{propiedad.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CardProperty };
