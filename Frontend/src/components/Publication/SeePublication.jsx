import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { publicationGet } from '../../redux/actions/property'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { FaBath, FaBed, FaChair, FaMapMarkedAlt, FaParking } from 'react-icons/fa';
import { CopiedUrl } from './CopiedUrl'
import { userGet } from '../../redux/actions/user';
import { Comments } from './Comments';
import { Plus } from './Plus';
import { LikeProperty } from './LikesProperty';
import ImageModal from './ImageModal';
import { useScrollToTop } from '../../hooks/useScrollTo'

const SeePublication = () => {
  
  SwiperCore.use([Navigation]);
  const navegar= useNavigate()
  const dispatch = useDispatch()
  const { list } = useSelector((state) => state.listing)
  const { userData } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.auth)
  const { id } = useParams()
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  useScrollToTop()

  const navigateToContact = () => {
    if(user){
      const currentUrl = window.location.href;
      localStorage.setItem('currentUrl', currentUrl);
      navegar('/contacto')
    }
    else{
      navegar('/iniciar-sesion')
    }
  }

  const openModal = (index) => {
    setInitialSlide(index);
    setIsModalOpen(true);
  }
  
  const closeModal = () => setIsModalOpen(false);
  
  useEffect(() => {
    dispatch(publicationGet(id))
    dispatch(userGet(list?.userRef))
  }, [dispatch, list?.userRef])


  return(
    <main className='mt-[7rem] bg-white'>
      <Swiper navigation modules={[EffectFade]} effect="fade">
        {list?.imageUrls?.map((url, index) => (
          <SwiperSlide key={url}>
            <img
              className=" h-[20rem] lg:h-[600px] w-full object-cover cursor-pointer"
              src={url}
              alt="Casa"
              onClick={() => openModal(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col max-w-4xl p-3 mx-auto my-7 gap-4 ">
        <Link to={`/perfil/${userData?._id}`} className="flex items-center gap-2 font-nunito ">
          <p className='text-sm md:text-base'>Publicada por <span className='font-semibold text-sm md:text-base'>{userData?.username}</span></p>
          <img src={userData?.imageProfile} alt={userData?.username} className='w-[2rem] rounded-full' />
        </Link>
        <div className="flex flex-col items-start sm:items-center gap-3 sm:flex-row">
          <p className="text-xl lg:text-3xl font-semibold">
            {list?.name}{' - '}
            US$
            {list?.offer 
              ? list?.discountPrice?.toLocaleString('en-US')
              : list?.regularPrice?.toLocaleString('en-US')}
            {list?.type === 'rent' && '/mes'}
          </p>
          <div className="flex items-center gap-3">
          <CopiedUrl />
          <Plus />
          <LikeProperty list={list} userId={user?._id} />
          </div>

        </div>
        
        <p className="flex items-center mt-2 gap-2 text-slate-600 text-md md:text-xl">
          <FaMapMarkedAlt className="text-green-700 text-2xl" />
          {list?.address}
        </p>
        <div className="flex items-center gap-4">
          <p className="bg-red-900 px-4 py-1 text-xs sm:text-sm  lg:text-base text-white text-center rounded-lg">
            {list?.type === 'rent' ? 'Para alquilar' : 'Para vender'}
          </p>
          {list?.offer && (
            <p className="bg-green-900 px-4 text-white text-center rounded-md">
              US${+list?.regularPrice - +list?.discountPrice} OFF
            </p>
          )}
          <button onClick={navigateToContact} className='bg-color-azul text-white font-nunito px-2 text-xs sm:text-sm lg:text-base  lg:px-4 py-1 rounded-lg'>Quiero ver esta propiedad</button>
        </div>
        <div>
          <p className=" text-md lg:text-lg text-slate-800"><span className="font-semibold text-xl">Descripción{' '}-</span>{' '}{list?.description}</p>
        </div>
        <ul className="flex items-center flex-wrap gap-5 whitespace-nowrap text-green-700 font-semibold">
          <li className="flex items-center gap-2">
            <FaBed className="text-3xl" />
            {list?.bedrooms > 1 ? `${list?.bedrooms} Habitaciones` : `${list?.bedrooms} Habitación`} 
          </li>
          <li className="flex items-center gap-2">
            <FaBath className="text-3xl" />
            {list?.bathrooms > 1 ? `${list?.bathrooms} Baños` : `${list?.bathrooms} Baño`} 
          </li>
          <li className="flex items-center gap-2">
            <FaParking className="text-3xl" />
            {list?.parking ? `Con Cochera` : `Sin Cochera`} 
          </li>
          <li className="flex items-center gap-2">
            <FaChair className="text-3xl" />
            {list?.furnished ? `Amueblada` : `Sin Amueblar`} 
          </li>
        </ul>
        <Comments />
      </div>
      <ImageModal
        isOpen={isModalOpen}
        images={list?.imageUrls || []}
        onClose={closeModal}
        initialSlide={initialSlide}
      />
    </main>
  )
}
export { SeePublication }
