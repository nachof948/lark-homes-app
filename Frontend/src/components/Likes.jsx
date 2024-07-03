import React from 'react';
import { useDispatch } from 'react-redux';
import { commentLike } from '../redux/actions/comment';
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";

const Likes = ({comment, userId}) => {
  const dispatch = useDispatch()

  const handleLikeComment = (id) =>{
    dispatch(commentLike(id))
  }

  return(
    <div className="flex items-center gap-1">
      {comment.likes.includes(userId) ? (
        <BiSolidLike className='text-2xl cursor-pointer' onClick={() => handleLikeComment(comment._id)} />
      ): (
        <BiLike className='text-2xl cursor-pointer' onClick={() => handleLikeComment(comment._id)} />
      )}
      {comment.likes.length <= 1 ? (
        <p className='font-semibold'>{comment.likes.length} Like</p>
        ) :
        <p className='font-semibold'>{comment.likes.length} Likes</p>}
    </div>
  )
}

export { Likes }