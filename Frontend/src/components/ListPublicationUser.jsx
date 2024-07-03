import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userGetPublication } from '../redux/actions/user';
import { Link } from 'react-router-dom';
import { publicationDelete } from '../redux/actions/property';

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
    <div>
      {listing?.map((list) =>(
        <div className="flex items-center gap-3">
          <Link to={`/publicacion/${list._id}`}><img src={list.imageUrls[0]} alt={list.name} className='w-[13rem] my-6 rounded-md' /></Link>
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