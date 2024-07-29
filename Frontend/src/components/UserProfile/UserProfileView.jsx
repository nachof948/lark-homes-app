import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { userGet } from '../../redux/actions/user';

const UserProfileView = () => {
  const dispatch = useDispatch()
  const { id } = useParams()  
  const { userData } = useSelector((state) => state.auth)
  
  useEffect(() => {
    dispatch(userGet(id))
  },[])

  return(
    <section className='flex flex-col items-center gap-4'>
      <h1 className='font-semibold text-3xl text-center'>Vendedor <span className='text-color-azul'>{userData.username}</span></h1>
      <img className='w-[10rem] rounded-full' src={userData.imageProfile} alt={userData.username} />
      <div className="flex flex-col items-center">
        <h2 className='font-semibold text-2xl'>Experiencia</h2>
        <p className=' w-[75vw] xl:w-[50vw] text-center'>{userData.biography}</p>
      </div>
    </section>
  )
}

export { UserProfileView }