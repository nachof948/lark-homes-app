import React, { useState, useEffect } from 'react';
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userAddPostLike } from '../../redux/actions/user';
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Plus = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [addPost, setAddPost] = useState(null);


  useEffect(() => {
    if (user && user.propertyLikes) {
      setAddPost(user.propertyLikes.includes(id));
    }
  }, [user, id]);

  const agregarPublicacion = () => {
    dispatch(userAddPostLike(id))
    toast.success('Propiedad agregada en tu perfil')
  };

  return (
    <div onClick={agregarPublicacion} className="cursor-pointer">
      {addPost ? <FaSquarePlus className='text-4xl' /> : <FaRegSquarePlus className='text-4xl' />}
      <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export { Plus };
