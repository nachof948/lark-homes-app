import React from 'react';
import dataAbout from '../data/dataAbout.json';

const About = () => {
  return (
    <section className='flex items-start mx-auto mt-40 gap-8 w-[85vw] font-nunito'>
      {dataAbout.map((data, index) => (
        <div className="flex flex-col gap-4" key={index}>
          {index === 1 ? (
            <>
              <img className='rounded-lg h-[30rem] object-cover' src={data.images} alt={data.title} />
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <p className="text-base">{data.description}</p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">{data.title}</h2>
              <p className="text-base">{data.description}</p>
              <img className='rounded-lg h-[30rem] object-cover' src={data.images} alt={data.title} />
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export { About };
