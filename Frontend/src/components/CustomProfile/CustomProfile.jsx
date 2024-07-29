import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { userDelete, userUpdate } from '../../redux/actions/user';
import { UploadImage } from '../../components/UploadImage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ListPublicationUser } from '../CustomProfile/ListPublicationUser';
import usePropertyAdd from '../../hooks/usePropertyAdd';

const CustomProfile = () => {
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const properties = usePropertyAdd(user);

  const [formData, setFormData] = useState({
    username: user?.username,
    email: user?.email,
    phone: user?.phone,
    biography: user?.biography,
    imageProfile: user?.imageProfile,
    seller: user?.seller || false, // Si user?.seller es undefined o null, se asigna false por defecto
  });

  const eliminarCuenta =  (id) =>{
      dispatch(userDelete(id))
      navegar('/');
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (imageUrl) => {
    setFormData({
      ...formData,
      imageProfile: imageUrl,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userUpdate(formData, user?._id));
    toast.success('Actualización realizada');
  };

  return (
    <>
      <p className="text-3xl font-nunito text-center">Perfil de {formData.username}</p>
      <div className="mt-5 flex flex-col gap-6 lg:max-h-[fit] lg:flex-row">
        <form className="flex flex-col items-center gap-6 text-lg font-nunito sm:flex-row sm:items-start" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-5">
          <UploadImage
            onImageChange={handleImageChange}
            imageProfile={formData.imageProfile}
            className={' w-[10rem] h-[10rem] object-cover rounded-full cursor-pointer'}
          />
            <div className="flex flex-col gap-3">
              <button type='button' onClick={() => eliminarCuenta(user._id)} className=" bg-red-500 p-3 text-lg rounded-md text-white hover:opacity-90">
                Eliminar mi cuenta
              </button>
              {!user?.seller && (
                <div className="flex items-center gap-2 text-nowrap text-xl font-nunito text-color-azul">
                  <button 
                    type='button' 
                    onClick={() => setFormData({ ...formData, seller: true })} 
                    className="bg-green-500 w-[11rem] p-3 text-lg rounded-md text-white hover:opacity-90"
                  >
                    Ser vendedor
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Nombre Completo</label>
              <Input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <Input type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
              <label>Teléfono</label>
              <Input type="text" name="phone" onChange={handleChange} value={formData.phone} />
            </div>
            <div className="flex flex-col">
              <label>Experiencia</label>
              <textarea
                className="border border-color-azul rounded-md resize-none outline-none p-3 text-color-azul"
                name="biography"
                onChange={handleChange}
                value={formData.biography}
              />
            </div>
            <button className="bg-green-700 p-3 mt-2 rounded-md text-lg text-white hover:opacity-90">Actualizar</button>
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
        {!user?.seller && (
          <div className='flex flex-col'>
            <h2 className='text-xl font-semibold'>Propiedades guardadas</h2>
            <div className="flex items-center gap-3">
              {!properties?.length ? (
                <h2 className='text-xl font-semibold mt-4 text-color-azul'>No tienes propiedades guardadas</h2>
              ) : (
                properties.map(propiedad => (
                  <Link to={`/publicacion/${propiedad?._id}`} key={propiedad?._id}>
                    <div className="relative w-[15rem] h-[10rem] overflow-hidden rounded-lg">
                      <img 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" 
                        src={propiedad?.imageUrls} 
                        alt={propiedad?.title} 
                      />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        )}
        {user?.seller && (
          <div className="text-xl font-nunito flex flex-col items-center">
            <p className='font-semibold text-center sm:text-left'>Mis Publicaciones</p>
            <ListPublicationUser id={user?._id} />
            <div className="mt-9 mx-auto">
            <Link className="bg-red-700 text-white px-3 py-[14px] text-lg rounded-md hover:opacity-90 w-fit" to={'/crear-publicacion'}>
              Crear una nueva publicación
            </Link>
            </div>
          </div>
        )}
      </div>
      

    </>
  );
};

export { CustomProfile };
