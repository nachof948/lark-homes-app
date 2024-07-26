import React, { useState, useEffect } from 'react';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAddPostLike } from '../../redux/actions/user';

const Plus = () => {
  const dispatch = useDispatch()
  const navegar = useNavigate()
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [addPost, setAddPost] = useState(null);


  useEffect(() => {
    if (user && user.propertyLikes) {
      setAddPost(user.propertyLikes.includes(id));
    }
  }, [user, id]);

  const agregarPublicacion = () => {
    if (user) {
      dispatch(userAddPostLike(id));
    } else {
      navegar('/iniciar-sesion');
    }
  };
  return (
    <div onClick={agregarPublicacion} className="cursor-pointer">
      {addPost ? <FaSquarePlus className='text-2xl lg:text-4xl ' /> : <FaRegSquarePlus className='text-2xl lg:text-4xl ' />}
    </div>
  );
}

export { Plus };
