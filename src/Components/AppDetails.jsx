import React from 'react';
import { useLoaderData } from 'react-router';
import AppError from './AppError';
import downloadIcon from '../assets/icon-downloads.png';
import reviewIcon from '../assets/icon-review.png';
import ratingIcon from '../assets/icon-ratings.png';

const AppDetails = () => {
    const appDetails = useLoaderData();
    console.log(appDetails);
    const {title, companyName, downloads, reviews, ratingAvg, description, image, size } = appDetails;

    if(!appDetails){
       return <AppError></AppError>;
    }

    return (
        <div className='bg-gray-100 w-full p-20'>
           <div className='container mx-auto'>
            {/* top */}
            <div className='border-b-2 border-gray-200 pb-10 flex flex-col md:flex-row gap-10'>
            <div>
     <img className='h-[350px] w-[350px]' src={image} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-4xl text-black'>{title}</h2>
                <p className='text-xl text-[#627382] border-b-1 border-gary-200 mt-2 pb-8'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> {companyName} </span></p>
                <div className='flex gap-10 mt-8'>
                    <div className='max-w-[150px]'>
                    <img className='w-10 h-10' src={downloadIcon} alt="" />
                    <small className='text-[##001931] my-2'>Downloads</small>
                    <br />
                    <span className='font-extrabold text-4xl text-black'>{downloads}M</span>
                    </div>
                    <div>
                    <img className='w-10 h-10' src={ratingIcon} alt="" />
                    <small className='text-[##001931] my-2'>Average Ratings</small>
                    <br />
                    <span className='font-extrabold text-4xl text-black'>{ratingAvg}</span>
                    </div>
                    <div>
                    <img className='w-10 h-10' src={reviewIcon} alt="" />
                    <small className='text-[##001931] my-2'>Total Reviews</small>
                    <br />
                    <span className='font-extrabold text-4xl text-black'>{reviews}K</span>
                    </div>
                </div>

                <button className='rounded-sm text-white bg-[#00D390] px-5 py-4 font-semibold text-xl mt-8'>Install Now ({size} MB)</button>
            </div>
            </div>
            
            {/* Middle */}
            <div className='py-10 border-b-2 border-gray-200'>
             <h3 className='mb-6 font-semibold text-2xl text-[#001931]'>Ratings</h3>

            </div>

            {/* bottom */}
            <div>
                <h3 className='mt-10 mb-6 font-semibold text-2xl text-[#001931]'>Description</h3>
                <p className='text-xl text-[#627382]'>{description}</p>
            </div>

           </div>
        </div>
    );
};

export default AppDetails;