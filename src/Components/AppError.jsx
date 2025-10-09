import React from 'react';
import { useNavigate } from 'react-router';
import appErrorIcon from '../assets/App-Error.png'
import Header from './Header';
import Footer from './Footer';

const AppError = () => {
    const navigate = useNavigate();
    return (
       <>
       
        <div className='w-full text-center p-20 bg-gray-100'>
<img className='mx-auto' src={appErrorIcon} alt="" />
<h2 className='font-semibold text-5xl text-[#001931] mt-4'>OPPS!! APP NOT FOUND</h2>
<p className='text-[#627382] text-xl mt-2 mb-4'>The App you are requesting is not found on our system.  please try another apps</p>
<button onClick={() => navigate(-1)} className=' btn rounded-sm py-4 px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Go Back!</button>

            
        </div>
        
        </>
    );
};

export default AppError;