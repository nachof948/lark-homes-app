import React from 'react';
import dataCustomers from '../../data/dataCustomers.json'

const CustomersOpinion = () => {
  return(
    <section className='flex flex-col gap-6 font-nunito'>
      <div className="flex justify-between items-center">
        <h1 className='text-4xl font-semibold'>Que dicen nuestros clientes</h1>
        <p className='w-[50%] text-color-gris'>Nos enorgullece compartir las experiencias de nuestros clientes satisfechos. Aquí puedes leer sus testimonios sobre el servicio excepcional que ofrecemos.</p>
      </div>
      <div className='flex items-center gap-6 pb-6'>
        {dataCustomers.map(customer =>(
          <div className="flex flex-col border rounded-lg p-3 font-nunito gap-3 bg-color-gris-claro ">
            <p>{customer.opinion}</p>
            <div className="flex items-center gap-3">
              <img src={customer.image} alt={customer.fullName} className='w-[4rem] h-[4rem] object-cover rounded-full' />
              <p className='font-bold'>{customer.fullName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { CustomersOpinion }