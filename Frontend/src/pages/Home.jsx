import React from 'react';
import { Hero } from '../components/Hero';
import { PropertiesHome } from '../components/PropertiesHome';
import { CustomersOpinion } from '../components/CustomersOpinion';
import { ExploreProperties } from '../components/ExploreProperties';

const Home = () => {
    return (
        <main className="mt-32 w-[85vw] mx-auto flex flex-col gap-24">
            <Hero />
{/*             <PropertiesHome />
            <CustomersOpinion />
            <ExploreProperties /> */}
        </main>
    );
}

export { Home };
