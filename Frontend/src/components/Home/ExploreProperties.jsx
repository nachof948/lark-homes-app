import React, { useState } from 'react';
import YourDream1 from '../../../public/images/Your-Dream-1.jpg';
import YourDream2 from '../../../public/images/Your-Dream2.jpg';
import YourDream3 from '../../../public/images/Your-Dream-3.jpg';
import { useNavigate } from 'react-router-dom';

const ExploreProperties = () => {
  const navigate = useNavigate();
  const [selectImage, setSelectImage] = useState(YourDream1);

  const imgs = [
    {
      id: 1,
      img: YourDream1
    },
    {
      id: 2,
      img: YourDream2
    },
    {
      id: 3,
      img: YourDream3
    },
  ];
  
  const handleImage = (id) => {
    const imageSelect = imgs.find((img) => img.id === id);
      setSelectImage(imageSelect.img);
  };

  const navigateToSearch = () => {
    navigate('/search');
  };

  return (
    <section className='flex flex-col-reverse items-center gap-7 mb-16 font-nunito h-fit lg:flex-row lg:items-start'>
      <img className='rounded-lg w-[75vw] h-[20rem] md:h-[40rem] lg:w-[35vw] object-cover' src={selectImage} alt="Casa con pileta" />
      <div className="flex flex-col gap-5 items-center text-center lg:items-start lg:text-left">
        <h1 className='text-4xl font-bold w-[75%] md:text-5xl xl:text-7xl '>Mudémonos a la casa familiar de tus sueños</h1>
        <p className='text-base text-color-gris lg:text-lg'>Encuentra el hogar perfecto para tu familia con nuestro equipo de expertos. Nos comprometemos a hacer realidad tus sueños, brindándote el mejor servicio y asesoramiento en cada paso del camino.</p>
        <button 
          onClick={navigateToSearch} 
          className='bg-color-azul text-white text-base p-2 rounded-2xl border transition-all duration-300 lg:p-4 lg:text-xl hover:bg-transparent hover:text-color-azul hover:border-color-azul'>
          Explorar Propiedades
        </button>
        <div className="flex items-center gap-3 lg:gap-7">
          {imgs.map((imagen) => (
            <img 
              key={imagen.id} 
              onClick={() => handleImage(imagen.id)} 
              className={`w-[25vw] object-cover rounded-lg cursor-pointer ${selectImage === imagen.img ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300 lg:w-[15vw]`} 
              src={imagen.img} 
              alt={`Casa ${imagen.id}`} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ExploreProperties };
