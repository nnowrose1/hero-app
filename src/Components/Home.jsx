import React from 'react';
import hero from '../assets/hero.png'
import googlePlayIcon from '../assets/Group .png'
import appStoreLogo from '../assets/app-store-logo.png'

import { NavLink, useLoaderData } from 'react-router';
import TrendingApp from './TrendingApp';

const Home = () => {
    const trendingApps = useLoaderData();
    // console.log(trendingApps); 

    const handleGooglePlay = (e) =>{
 e.preventDefault();
 window.open('https://play.google.com/store/apps');
    }

    const handleAppStore = (e) => {
         e.preventDefault();
 window.open('https://www.apple.com/app-store/');
    }
    return (
        <div>
            {/* Banner section */}
     <div className='bg-gray-100 text-center'>
        <div className='container mx-auto px-10 pt-10 lg:px-20 lg:pt-20'>
        <h1 className='font-bold text-5xl md:text-7xl '>We Build <br />
         <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive </span>Apps</h1>
        <p className='mt-4 mb-10 text-lg md:text-xl text-[#627382]'>At REACTRIX.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact</p>

            <div className='container mx-auto flex flex-col md:flex-row gap-4 mb-10 justify-center'>
        <button onClick={handleGooglePlay} className='btn rounded-sm py-6px-5.5 border-1 border-[#D2D2D2]'><img className='h-8 w-8 mr-2.5' src={googlePlayIcon} alt="" /> <span className=' font-semibold text-xl'> Google Play </span></button>
        <button onClick={handleAppStore} className='btn rounded-sm py-6 px-5.5 border-1 border-[#D2D2D2]'><img className='h-8 w-8 mr-2.5' src={appStoreLogo} alt="" /> <span className=' font-semibold text-xl'> App Store </span></button>
        </div>

  <img className='container mx-auto' src={hero} alt="Banner-image" />
        
            
        </div>

     </div>
{/* States section */}
     <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
    <div className='container mx-auto p-8 md:p-20 text-center'>
        <p className='text-white font-bold text-5xl mb-6 md:mb-10'>Trusted by Millions, Built for You</p>
        <div className='flex flex-col md:flex-row gap-8 md:gap-6 justify-center'>
            <div className='text-white text-center px-8 lg:px-15'>
                <span>Total Downloads</span>
                <p className='font-extrabold text-6xl my-4'>29.6M</p>
                <span>21% more than last month</span>
            </div>

            <div className='text-white text-center px-8 lg:px-15'>
                <span>Total Reviews</span>
                <p className='font-extrabold text-6xl my-4'>906K</p>
                <span>46% more than last month</span>
            </div>

            <div className='text-white text-center px-8 lg:px-15'>
                <span>Active Apps</span>
                <p className='font-extrabold text-6xl my-4'>132+</p>
                <span>31 more will Launch</span>
            </div>
        </div>

    </div>
     </div>

     {/* Trending Apps */}
     <div className='bg-[#D9D9D9] pt-20'>
  <div className='text-center pb-10'>
        <h3 className='font-bold text-5xl text-[#001931]'>Trending Apps</h3>
        <p className='text-[#627382] text-xl mt-4'>Explore All Trending Apps on the Market developed by us</p>
    </div>
     <div  className='container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

    {
        trendingApps.map((trendingApp, index) => <TrendingApp trendingApp={trendingApp} key={index}></TrendingApp>)
    }
    </div>


      <NavLink to='/apps' className='flex justify-center'>
    <button className='mt-10 mb-20 btn rounded-sm py-4 px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold'>Show All</button>
    </NavLink>
        </div>
        </div>
    );
};

export default Home;