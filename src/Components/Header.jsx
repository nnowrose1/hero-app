import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';
import logo2 from '../assets/fi_2111432.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css'


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleMyGithubAccount = (e) => {
        e.preventDefault();
        window.open("https://github.com/nnowrose1", "_blank")

    }
    

    return (
        <nav className='container mx-auto my-5 flex justify-between items-center'>
            {/* Menu for small devices */}
            <div className='md:hidden' onClick = {() => setOpen(!open)}>
            {
                    open ?
                  <X className = 'md:hidden'></X> :
                  <Menu className = 'md:hidden'></Menu>
                
                }
                </div>

     <div onClick={() => setOpen(false)} className={`md:hidden absolute duration-1000
       ${open ? 'top-14' : '-top-40'} bg-white flex flex-col p-4 w-[150px] rounded-md shadow-md cursor-pointer`}> 
         <NavLink className='hover:bg-gray-300' to='/'>Home</NavLink>
         <NavLink to='/apps' >Apps</NavLink>
         <NavLink to='/installation' >Installation</NavLink> 
               
     </div>
        

         <Link to='/'  className='flex gap-1 items-center'>
            <img className='w-[40px] h-[40px]' src={logo} alt="Logo" />
            <p className='font-bold'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>REACTRIX.IO</span></p>
         </Link>
{/* Menu for medium to large devices */}
         <div  className='hidden md:flex gap-8'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/apps' >Apps</NavLink>
            <NavLink to='/installation'>Installation</NavLink>
         </div>

         <NavLink onClick={handleMyGithubAccount} to='#' className='flex gap-2.5 items-center py-3 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-sm'>
            <img src= {logo2} alt="" />
            <p className='font-semibold text-white'>Contribute</p>

         </NavLink>
        </nav>
    );
};

export default Header;