import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/actions/auth";
import { Input } from '../components/Input';
import { userUpdate } from "../redux/actions/user";
import { UploadImage } from "../components/UploadImage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListPublicationUser } from "../components/ListPublicationUser";
import usePropertyAdd from '../hooks/usePropertyAdd';

const Profile = () => {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
    biography: user?.biography,
    imageProfile: user?.imageProfile,
    seller: user?.seller
  });
  const properties = usePropertyAdd(user);



  const cerrarSesion = () => {
    dispatch(logout());
    navegar('/');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageChange = (imageUrl) => {
    setFormData({
      ...formData,
      imageProfile: imageUrl
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdate(formData, user?._id));
    toast.success('Actualización realizada');
  };

  return (
    <section className="mt-36 w-[85vw] mx-auto">
      <p className="text-3xl font-nunito text-center">Perfil de {formData.username}</p>
      <div className="mt-5 flex gap-4">
        <form className="flex gap-4 text-lg font-nunito" onSubmit={handleSubmit}>
          <UploadImage onImageChange={handleImageChange} imageProfile={formData.imageProfile} className={'w-[25rem] h-[30rem] object-cover rounded-md cursor-pointer'} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Nombre Completo</label>
              <Input type="text" name='username' value={formData.username} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <Input type="text" name='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
              <label>Teléfono</label>
              <Input type="text" name='phone' onChange={handleChange} value={formData.phone} />
            </div>
            <div className="flex flex-col">
              <label>Biografía</label>
              <textarea className="border border-color-azul rounded-md resize-none outline-none p-3 text-color-azul" name="biography" onChange={handleChange} value={formData.biography} />
            </div>
            <button className="bg-green-700 p-3 rounded-md text-white hover:opacity-90">Actualizar</button>
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
        </form>
        {user?.seller ? (
          <div className="text-xl font-nunito flex flex-col">
            <p>Mis Publicaciones</p>
            <ListPublicationUser id={user._id} />
            <Link className="bg-red-700 text-white p-3 rounded-md hover:opacity-90" to={'/crear-publicacion'}>Crear una nueva publicación</Link>
          </div>
        ) : (
          <form>
            <div className="flex items-center w-[10rem] gap-2 text-nowrap text-xl font-nunito text-color-azul">
              <Input type="checkbox" name='seller' checked={formData.seller} onChange={handleChange} />
              <p>Quiero ser vendedor</p>
            </div>
          </form>
        )}
      </div>
      <button onClick={cerrarSesion} className="mr-6 bg-red-500 p-2 rounded-md text-white hover:opacity-90">Cerrar Sesión</button>
      {!user?.seller &&
        properties.map(propiedad => (
          <Link to={`/publicacion/${propiedad._id}`} key={propiedad._id}>
            <img className="w-20" src={propiedad.imageUrls[0]} alt={propiedad.title} />
          </Link>
        ))
      }
    </section>
  );
}

export { Profile };
