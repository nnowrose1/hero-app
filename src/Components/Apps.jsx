import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import EachApp from './EachApp';
import { Search, X } from 'lucide-react';
import FilteredApp from './FilteredApp';

const Apps = () => {
    const [search, setSearch] = useState('');
    const [loader, setLoader] = useState(false);
    const appData = useLoaderData();
    // console.log(appData);
    const handleSubmit= (e) => {
        e.preventDefault();
        
    }

    const handleSearch= (e) => {
        setSearch(e.target.value);
        setLoader(true);
      
    }
     setTimeout(() => {
        setLoader(false)
    }, 800);

    const handleClear = () => {
        setSearch('');
      
    }
      const matchedApp = appData.filter(app => app.title.toLowerCase().includes (search.toLowerCase()));
        console.log(matchedApp);
    
    return (
             <div className='bg-[#D9D9D9] pt-20'>
  <div className='text-center pb-10'>
        <h3 className='font-bold text-5xl text-[#001931]'>Our All Applications</h3>
        <p className='text-[#627382] text-xl mt-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
    </div>
  

    <div className='container mx-auto flex justify-between items-center mt-6 md:mt-11 mb-6 px-1'>
  <p className='font-semibold text-2xl text-black'>({search === '' ?(appData.length) : matchedApp.length > 0 ? (matchedApp.length) : (0) }) Apps Found</p>
    <form onSubmit={handleSubmit} className='relative flex gap-2.5 items-center'>
        <span className='absolute left-2 md:left-3 text-[#627382]'><Search></Search></span>
        <input className='text-[#627382] py-3 rounded-sm pr-8 md:pr-30 lg:pr-65 pl-8 md:pl-10 outline-1 outline-gray-400' type="text" value={search} onChange={handleSearch} placeholder='search Apps' />
       {search && <button type='button' onClick={handleClear} className='absolute right-3'><X></X></button>}
    </form>
    </div>

    {loader ? (<div className='flex items-center p-20 md:p-50 container text-center font-semibold text-3xl '>
        <p>App is Loading</p>
       <span className="loading loading-dots loading-lg"></span>
        </div>) :(
    <div  className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-20'>
        {
        search === '' ? 
        appData.map(app => <EachApp key={app.id} app={app}></EachApp>)
         : 
        matchedApp.length > 0 ? (matchedApp.map(app => <FilteredApp app={app} key={app.id}></FilteredApp>)) :
         (<p className='container mx-auto font-bold p-20 text-7xl whitespace-nowrap'>No app found</p>)
         
        }
    
   </div>
    )}
        </div>
    
    );
};

export default Apps;