import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CardProperty = ({ listing }) => {
  const navegar = useNavigate();

	const navigateToPublication = (id) =>{
    navegar(`/publicacion/${id}`)
	} 

  return(
    <div className="flex gap-10 flex-wrap">
			{listing?.map(propiedad =>(
        <div className="flex flex-col relative font-nunito w-[22rem] cursor-pointer" onClick={() =>navigateToPublication(propiedad._id)} key={propiedad._id}>
					<div className="relative w-[22rem] h-[15rem] overflow-hidden rounded-lg cursor-pointer">
          <img src={propiedad.imageUrls[0]} alt={propiedad.name} className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110'/>
					</div>
					<p className='bg-color-negro w-fit text-white px-4 py-2 rounded-2xl absolute top-2 left-2'>${propiedad.regularPrice}</p>
				  <h2 className='text-2xl text-wrap font-semibold'>{propiedad.name}</h2>
					<div className="flex items-center gap-2">
					  <FaLocationDot />
						<p>{propiedad.address}</p>
					</div>
				</div>
			))}
		</div>
  )
}

export { CardProperty }