import React, { useContext } from 'react';
import logo from './images/image 1.png';
import { TransactionContext } from '../contexts/TransactionContext';
// import { shortenAddress } from '../utilis/shortenAddress';
import { Link } from "react-router-dom";

export default function UploadNavBar ()
{
    const { currentAccount, disconnect} = useContext( TransactionContext );
  return (

      <nav className="flex justify-around w-full mx-1 items-center">
          <Link to="/"> <div className='flex gap-4 items-center cursor-pointer'>
              <img src={ logo } alt="logo" />
              <span className="text-2xl font-bold"> NestLibrary</span>
          </div>
          </Link>
          <div className='bg-nestbackground w-96 rounded-lg text-center'>
              { currentAccount ?
                  <div >
                      { currentAccount }
                  </div>
                  : 
                  <div>
                      Wallet Address
                  </div>
             }
              
          </div>
          <button className="bg-black p-2 w-60 rounded-lg text-white text-xl font-bold" onClick={disconnect}>Disconnect</button>
      </nav>
      
  )
}
