import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { NavLink } from 'react-router';

const FilteredApp = ({app}) => {
    const {ratingAvg, image, downloads, title, id} = app;
    return (
        <NavLink to={`/apps/${id}`}>
       <div className='card p-4 bg-white'>
                          <img className='rounded-lg w-full h-[316px] object-cover bg-[#D9D9D9]' src={image} alt="" />
                          <p className='font-medium text-xl my-4'>{title}</p>
                          <div className='flex justify-between'>
                              <p className='bg-[#F1F5E8] rounded-sm py-2 px-2.5 flex items-center'><img className='mr-2 h-4 w-4' src={downloadIcon} alt="" /><span className='text-[#00D390]'>{downloads}M</span></p>
              
                              <p className='bg-[#FFF0E1] rounded-sm py-2 px-2.5 flex items-center'><img className='mr-2 h-4 w-4' src={ratingIcon} alt="" /><span className='text-[#FF8811]'>{ratingAvg}</span></p>
                          </div>
              
                      </div>
         </NavLink> 
    );
};

export default FilteredApp;