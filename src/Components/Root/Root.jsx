import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet, useNavigation } from 'react-router';
 import { ToastContainer } from 'react-toastify';


const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);
    return (
          <>
 <Header></Header>
 {isNavigating && (
    <div className='flex justify-center items-center p-20'>
    <span className="loading loading-spinner loading-xl "></span>
    </div>
)}
 <Outlet></Outlet>

 <Footer></Footer>
  <ToastContainer />
    </>
    );
};

export default Root;