import React from 'react';
import { useDispatch } from 'react-redux';
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { propertyLike } from '../redux/actions/property';

const LikeProperty = ({list, userId}) => {

  const dispatch = useDispatch()

  const handleLikeComment = (id) =>{
    dispatch(propertyLike(id))
  }

  return(
    <div className="flex items-center gap-1">
      {list?.likes?.includes(userId) ? (
        <BiSolidLike className='text-2xl cursor-pointer' onClick={() => handleLikeComment(list?._id)} />
      ): (
        <BiLike className='text-2xl cursor-pointer' onClick={() => handleLikeComment(list?._id)} />
      )}
      {list?.likes?.length <= 1 ? (
        <p className='font-semibold'>{list?.likes?.length} Like</p>
        ) :
        <p className='font-semibold'>{list?.likes?.length} Likes</p>}
    </div>
  )
}

export { LikeProperty }