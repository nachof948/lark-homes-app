import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { commentCreate, commentDelete, commentGet, commentEdit } from '../../redux/actions/comment';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import useUserComments from '../../hooks/useUserComment';
import { LikesComments } from './LikesComments';

const Comments = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);
  const [content, setContent] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const commentsWithUserData = useUserComments(comments);

  useEffect(() => {
    dispatch(commentGet(id));
  }, [dispatch, id]);

  const handleDeleteComment = (commentId) => {
    dispatch(commentDelete(commentId));
  };

  const handleEditComment = (commentId, currentContent) => {
    setEditingCommentId(commentId);
    setEditingContent(currentContent);
  };

  const handleCancel = () => {
    setEditingCommentId(null);
    setEditingContent('');
  };

  const handleUpdateComment = (id, content) => {
    dispatch(commentEdit(id, content));
    setEditingCommentId(null);
    setEditingContent('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(commentCreate(content, user._id, id));
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };
  
  const buttonStyle ='bg-color-azul text-white border border-color-azul font-nunito p-2 text-sm rounded-md uppercase transition-all duration-300 hover:bg-transparent hover:text-color-azul lg:text-base lg:p-3'

  return (
    <div className='flex flex-col'>
      {user ? (
        <form className="flex flex-col items-start gap-3" onSubmit={handleSubmit}>
          <textarea
            name="content"
            placeholder='Escribi tu comentario...'
            className='font-nunito outline-none resize-none border border-color-azul rounded-md w-[90vw] lg:w-[50vw] h-[10rem] p-3'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button className={buttonStyle}>Enviar</button>
        </form>
      ) : (
        <p className="mx-auto text-center font-nunito text-red-500">Debes estar logueado para dejar un comentario.</p>
      )}
      <div className="mt-5 flex flex-col gap-3">
        {commentsWithUserData?.map((comment) => (
          <div key={comment._id} className="flex flex-col items-start gap-3 border p-2 sm:p-3 w-[90vw] lg:w-[50vw] border-color-azul rounded-md">
            {editingCommentId === comment._id ? (
              <div>
                <textarea
                  className='font-nunito outline-none resize-none border border-color-azul rounded-md w-[85vw] lg:w-[44vw] h-[10rem] p-3'
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <div className="flex items-center gap-3">
                  <button className={buttonStyle} onClick={() => handleUpdateComment(comment._id, editingContent)}>
                    Actualizar
                  </button>
                  <button className={buttonStyle} onClick={handleCancel}>
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className='font-nunito text-sm sm:text-base'>{comment.content}</p>
                {comment.userRef === user?._id && (
                  <div className="flex gap-3 items-center">
                    <button onClick={() => handleDeleteComment(comment._id)} className='text-red-700 text-xl'>
                      <RiDeleteBin6Line />
                    </button>
                    <button className='text-green-700 text-2xl' onClick={() => handleEditComment(comment._id, comment.content)}>
                      <TiEdit />
                    </button>
                  </div>
                )}
                {comment.userData ? (
                  <div className="flex items-center gap-4 text-sm sm:text-base">
                    <Link to={`/perfil/${comment.userRef}`} className="flex items-center gap-2">
                      <p>Comentario realizado por <span className='font-bold font-nunito'>{comment.userData.username} </span></p>
                      <img className='w-[1.5rem] sm:w-[3rem] rounded-full' src={comment.userData.imageProfile} alt="profile" />
                    </Link>
                    <LikesComments comment={comment} userId={user?._id} commentId={comment._id} />
                  </div>
                ) : (
                  <p>Cargando...</p>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Comments };
