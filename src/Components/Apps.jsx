import React from 'react';
import { useLoaderData } from 'react-router';
import EachApp from './EachApp';

const Apps = () => {
    const appData = useLoaderData();
    console.log(appData);
    
    return (
             <div className='bg-[#D9D9D9] pt-20'>
  <div className='text-center pb-10'>
        <h3 className='font-bold text-5xl text-[#001931]'>Our All Applications</h3>
        <p className='text-[#627382] text-xl mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>
     <div  className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20'>

    {
        appData.map(app => <EachApp key={app.id} app={app}></EachApp>)
    }
    </div>
        </div>
    
    );
};

export default Apps;