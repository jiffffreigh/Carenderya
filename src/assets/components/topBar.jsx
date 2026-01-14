import logo from '../landingPage/topBar/logoPhone.png'
import fullLogo from '../landingPage/topBar/fullLogo.png'
import menuPhone from '../landingPage/topBar/menuPhone.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function TopBar(){
    {/* Menu Toggle Logic */}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return (<>
    {/*---Top Bar Phone---*/}
      <div className="bg-[#F2EFEA] p-2 flex md:hidden justify-between place-items-center h-fit w-full">
       <Link to="/"><img src={logo} alt="Logo"  className='h-[10%] w-[10%] rounded-md'/></Link>
        <img src={menuPhone} alt="Menu" className='h-[10%] w-[8%] ' onClick={toggleMenu} />
      </div> 

      
    {/*--Menu Overlay--*/}
    {isMenuOpen && (
    <div className='bg-[#F2EFEA] h-full w-[50%] absolute top-0 right-0 text-black p-5'>
      <div className=''></div>
      <p className=' font-bold text-2xl' onClick={closeMenu}>X</p>
    </div>
    )}  

      {/*---Top Bar Desktop---*/}
      <div className="bg-[#F2EFEA] hidden md:flex p-2 justify-between place-items-center h-fit w-full">
        <Link to="/" className='w-[10%]'><img src={fullLogo} alt="Logo"  className=' rounded-md flex'/></Link>
        
        <div className='flex gap-4 ml-30'>
          <Link to="/" className='text-lg hover:text-[#A31621]'>Home</Link>
          <Link to="/" className=' text-lg hover:text-[#A31621]'>Recipes</Link>
          <Link to="/" className=' text-lg hover:text-[#A31621]'>About</Link>
          <Link to="/" className=' text-lg hover:text-[#A31621]'>Contact</Link>
          
        </div>

        <div className='flex'>
          <button id='signUp'className='mx-1 bg-[#A31621] h-[30px] w-[100px] rounded-md text-[#F2EFE]'>Sign Up</button>
          <button id='login'className='mx-1 bg-[#F2EFEA] border-1 h-[30px] w-[100px] rounded-md'>Log In</button>
        </div>
      
      </div>
  </>  
  )
}
export default TopBar;