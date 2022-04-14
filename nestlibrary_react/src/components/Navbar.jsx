import React, { useContext } from 'react';
import logo from './images/image 1.png'
import { Link } from "react-router-dom";
import { TransactionContext } from '../contexts/TransactionContext';
import { Loader } from "../components";
 
const Navbar = () =>
{
  const { connectWallet, isLoading } = useContext( TransactionContext );
  return (
      <nav className="flex justify-around w-full mx-1 items-center">
        
     
     <Link to="/"> <div className='flex gap-4 items-center cursor-pointer'> 
             <img src={logo} alt="logo" /> 
        <span className="text-2xl font-bold"> NestLibrary</span>
      </div>
      </Link>
           
          
        <div>
            <ul className="flex gap-6 hover:cursor-pointer items-center">
            <li className=' hover:underline'>
                   Home
                </li>
                <li className="hover:underline">
                    Features
                </li>
                <li  className=' hover:underline'>
                   Contact
                </li>
                <li  className=' hover:underline'>
                    About us
                </li>
          <li>
            { isLoading ?
              <Loader /> :
              <button className='bg-black rounded-lg px-7 py-2 text-white' onClick={connectWallet}> Connect </button>
            }
                </li>
            </ul>
        </div>

      </nav>
  );
}


export default Navbar;
