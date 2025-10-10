import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'


const InstalledApp = ({installedApp, handleUninstall}) => {
    console.log(installedApp);
    const {ratingAvg, image, downloads, title, size, id} = installedApp;

    
    return (
        <div className='card p-4 bg-white rounded-sm my-4' >
            <div className='flex justify-between items-center'>
            <div className='flex gap-3 md:gap-4'>
         <img className='rounded-lg w-[80px] h-[80px] object-cover' src={image} alt="" />
<div>
     <p className='font-medium text-xl mb-3 md:mb-4'>{title}</p>
     <div className='flex gap-3 md:gap-4 items-center'>
         <p className='bg-[#F1F5E8] rounded-sm py-2 px-1 md:px-2.5 flex items-center'>
            <img className='mr-1 md:mr-2 h-4 w-3 md:w-4' src={downloadIcon} alt="" />
            <span className='text-[#00D390]'>{downloads} M</span>
            </p>                                 
         <p className='bg-[#FFF0E1] rounded-sm py-2 px-1 md:px-2.5 flex items-center'>
            <img className='mr-1 md:mr-2 h-4 w-4' src={ratingIcon} alt="" />
            <span className='text-[#FF8811]'>{ratingAvg}</span>
            </p>  
         <p className='text-[#627382]'>{size} MB</p>                               
         </div>
         </div>
         </div>

         <button onClick={() => handleUninstall(id)} className='btn text-white font-semibold rounded-sm bg-[#00D390] py-3 px-4'>Uninstall</button>
             </div>        
        </div>
    );
};

export default InstalledApp;