import React from 'react';
import { Hero } from '../components/Home/Hero';
import { PropertiesHome } from '../components/Home/PropertiesHome';
import { CustomersOpinion } from '../components/Home/CustomersOpinion';
import { ExploreProperties } from '../components/Home/ExploreProperties';

const Home = () => {
  return (
    <main className="mt-32 w-[85vw] mx-auto flex flex-col gap-24">
{/*       <Hero />
      <PropertiesHome />
      <CustomersOpinion /> */}
      <ExploreProperties />
    </main>
  );
}

export { Home };
