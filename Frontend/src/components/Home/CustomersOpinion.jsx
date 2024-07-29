import React from 'react';
import dataCustomers from '../../data/dataCustomers.json';

// Importa las imágenes
import Testimonio1 from '../../assets/Testimonio-1.png';
import Testimonio2 from '../../assets/Testimonio-2.png';
import Testimonio3 from '../../assets/Testimonio-3.png';
import Testimonio4 from '../../assets/Testimonio-4.png';

// Asigna las imágenes importadas a cada cliente
dataCustomers[0].image = Testimonio1;
dataCustomers[1].image = Testimonio2;
dataCustomers[2].image = Testimonio3;
dataCustomers[3].image = Testimonio4;

const CustomersOpinion = () => {
  return (
    <section className='flex flex-col gap-6 font-nunito'>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <h1 className='text-2xl font-semibold mb-4 lg:mb-0 lg:text-3xl xl:text-4xl'>
          Que dicen nuestros clientes
        </h1>
        <p className='w-[80%] text-sm text-color-gris text-center lg:text-left lg:w-[50vw] md:text-base lg:text-lg'>
          Nos enorgullece compartir las experiencias de nuestros clientes satisfechos. Aquí puedes leer sus testimonios sobre el servicio excepcional que ofrecemos.
        </p>
      </div>
      <div className='flex justify-center flex-wrap gap-8 pb-6 xl:flex-nowrap'>
        {dataCustomers.map((customer, index) => (
          <div key={index} className="flex flex-col w-full sm:w-[80%] md:w-[70%] xl:w-[25%] xl:min-h-[18rem] border rounded-lg p-3 font-nunito gap-3 bg-color-gris-claro">
            <p className='flex-grow'>{customer.opinion}</p>
            <div className="flex items-center gap-3 mt-auto">
              <img src={customer.image} alt={customer.fullName} className='w-[4rem] h-[4rem] object-cover rounded-full' />
              <p className='font-bold'>{customer.fullName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export { CustomersOpinion };
