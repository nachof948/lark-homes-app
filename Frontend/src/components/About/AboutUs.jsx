import React from 'react';
import dataAbout from '../../data/dataAbout.json';

const AboutUs = () => {

  return (
    <section className='flex flex-col items-start mx-auto mt-40 gap-8 w-[85vw] font-nunito lg:items-start lg:flex-row'>
      {dataAbout.map((data, index) => (
        <div className="flex flex-col items-center gap-4 lg:items-start" key={index}>
          {index === 1 ? (
            <div className='flex flex-col-reverse gap-3 text-center lg:flex-col lg:text-left'>
              <img className='rounded-lg h-[30rem] object-cover' src={data.images} alt={data.title} />
              <div className="">
                <h2 className="text-3xl font-bold">{data.title}</h2>
                <p className="text-sm md:text-base">{data.description}</p>
              </div>
            </div>
          ) : (
            <div className='flex flex-col text-center gap-3 lg:text-left'>
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <p className="text-sm md:text-base">{data.description}</p>
              <img className='rounded-lg h-[30rem] object-cover' src={data.images} alt={data.title} />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export { AboutUs };
