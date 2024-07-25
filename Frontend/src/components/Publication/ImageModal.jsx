import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

const ImageModal = ({ isOpen, images, onClose, initialSlide }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="relative bg-white w-[90vw] lg:max-w-4xl p-4 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-20 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
        <Swiper
          navigation
          modules={[EffectFade]}
          effect="fade"
          initialSlide={initialSlide}
        >
          {images?.map((url, index) => (
            <SwiperSlide key={index}>
              <img className=" h-[25rem] md:h-[600px] w-full object-cover" src={url} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageModal;
