import logo from './images/image 1.png'
 
 
const Navbar = () => {
  return (
      <nav className="flex justify-around w-full mx-1 items-center">
        
           <div className='flex gap-4 items-center'> 
             <img src={logo} alt="logo" /> 
             <span> NestLibrary</span>
             </div>
           
          
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
                  <button className='bg-black rounded-lg px-7 py-2 text-white'> Connect </button>  
                </li>
            </ul>
        </div>

      </nav>
  );
}


export default Navbar;
