import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userGetPublication } from '../../redux/actions/user';
import { Link } from 'react-router-dom';
import { publicationDelete } from '../../redux/actions/property';

const ListPublicationUser = ({ id }) => {
  const dispatch = useDispatch()
  const { listing } = useSelector((state) => state.listing)

  
  useEffect(() => {
  dispatch(userGetPublication(id))
  },[dispatch])
  
  const handleDelete = async(listId) =>{
    try {
      dispatch(publicationDelete(listId))
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <div className='flex items-center flex-wrap gap-4 w-[40rem] h-fit max-h-[27rem] overflow-y-scroll'>
      {listing?.map((list) =>(
        <div className="flex items-center gap-3">
          <Link to={`/publicacion/${list._id}`}><img src={list.imageUrls[0]} alt={list.name} className='w-[13rem] h-[10rem] object-cover my-6 rounded-md' /></Link>
          <div className="flex flex-col">
            <Link to={`/editar-publicacion/${list._id}`} className='text-green-700 font-nunito hover:underline'>Editar</Link>
            <button className='text-red-700 hover:underline'onClick={() => handleDelete(list._id)}>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export { ListPublicationUser }