import React from 'react';
import errorIcon from '../assets/error-404.png'
import { useNavigate } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
        <Header></Header>
        <div className='w-full text-center p-20 bg-gray-100'>
<img className='mx-auto' src={errorIcon} alt="" />
<h2 className='font-semibold text-5xl text-[#001931] mt-4'>Oops, page not found!</h2>
<p className='text-[#627382] text-xl mt-2 mb-4'>The page you are looking for is not available.</p>
<button onClick={() => navigate(-1)} className=' btn rounded-sm py-4 px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Go Back!</button>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;