import React from 'react';
import { useDispatch } from 'react-redux';
import { commentLike } from '../../redux/actions/comment';
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const LikesComments = ({comment, userId}) => {
  const dispatch = useDispatch()
  const navegar= useNavigate()

  const handleLikeComment = (id) =>{
    if(userId){
      dispatch(commentLike(id))
    }
    else{
      navegar('/iniciar-sesion')
    }
  }

  return(
    <div className="flex items-center gap-1">
      {comment?.likes.includes(userId) ? (
        <BiSolidLike className='text-md sm:text-2xl cursor-pointer' onClick={() => handleLikeComment(comment?._id)} />
      ): (
        <BiLike className='text-md sm:text-2xl cursor-pointer' onClick={() => handleLikeComment(comment?._id)} />
      )}
      {comment?.likes.length <= 1 ? (
        <p className='font-semibold text-xs sm:text-base'>{comment?.likes.length} Like</p>
        ) :
        <p className='font-semibold text-xs sm:text-base'>{comment?.likes.length} Likes</p>}
    </div>
  )
}

export { LikesComments }