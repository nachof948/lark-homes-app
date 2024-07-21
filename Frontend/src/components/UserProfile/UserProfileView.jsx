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
    <>
      <h1>{userData.username}</h1>
      <img src={userData.imageProfile} alt={userData.username} />
      <p>{userData.biography}</p>
    </>
  )
}

export { UserProfileView }