import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/landingPage/topBar/logoPhone.png'
import fullLogo from '../assets/landingPage/topBar/fullLogo.png'
import menuPhone from '../assets/landingPage/topBar/menuPhone.png'
import bannerDesktop from '../assets/landingPage/Banners/bannerDesktop.png'
import bannerTablet from '../assets/landingPage/Banners/bannerTab.png'
import banner from '../assets/landingPage/Banners/bannerPhone.png'
import Slider from 'react-slick'
import ChickenAdoboSlider from '../assets/landingPage/carousel/ChickenAdobo.webp'
import MunggoSlider from '../assets/landingPage/carousel/Munggo.webp'
import PorkSisigSlider from '../assets/landingpage/carousel/PorkSisig.webp'
import PorkBistekSlider from '../assets/landingpage/carousel/PorkBistek.webp'
import TinolaSlider from '../assets/landingpage/carousel/Tinola.webp'
import Sinigang from '../assets/landingpage/carousel/Sinigang.webp'
import BreakFast from '../assets/landingPage/breakfast.webp'
import Chef from '../assets/landingPage/chef.webp'
import Cook from '../assets/landingPage/Cook.webp'



function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 text-2xl"
      >
        {'>'}
      </button>
    );
  }
  // Custom previous Arrow component
  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 h-10 w-10 text-2xl"
      >
        {'<'}
        
      </button>
    );
  }
  


function LandingPage(){

  {/* Menu Toggle Logic */}
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  {/* Carousel Settings */}
   const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

  
  };
  
const Images =[
    {id:1, src:ChickenAdoboSlider, alt:"Chicken Adobo"},
    {id:2, src:MunggoSlider, alt:"Munggo"},
    {id:3, src:PorkSisigSlider, alt:"Pork Sisig"},
    {id:4, src:PorkBistekSlider, alt:"Pork Bistek"},
    {id:5, src:TinolaSlider, alt:"Tinola"},
    {id:6, src:Sinigang, alt:"Sinigang"},
]
  


  return (<div className='font-Josefin overflow-x-hidden min-w-screen max-w-screen w-screen h-screen min-h-screen '>
   
    <header>
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
    </header>

    {/*---Banner Section---*/}
      <div id='bannerDesktop' className='hidden lg:flex flex-col max-h-screen max-w-full min-h-screen min-w-full bg-no-repeat bg-cover justify-items-center place-content-center' style={{backgroundImage:`url(${bannerDesktop})`}}>
        <h1 className=' font-bold text-[8rem] leading-none text-center  text-white'>DELICIOUS <br /> MADE <br />SIMPLE</h1>
      </div>

      <div id='bannerTablet' className='hidden md:flex flex-col lg:hidden max-h-screen max-w-full min-h-screen min-w-full bg-no-repeat bg-cover justify-items-center place-content-center' style={{backgroundImage:`url(${bannerTablet})`}}>
        <h1 className=' font-bold text-[5rem] leading-none text-center  text-white'>DELICIOUS MADE SIMPLE</h1>
      </div>

      <div id="bannerPhone" className='md:hidden sm:flex-col max-h-screen max-w-full min-h-screen min-w-full bg-no-repeat bg-cover justify-items-center place-content-center' style={{backgroundImage:`url(${banner})`}}>
        <h1 className=' font-bold text-[4rem]  leading-none text-center  text-white'>DELICIOUS MADE SIMPLE</h1>
      </div>


    {/*---Carousel Section---*/}
      <div id="carousel" className='mt-[15%] flex-col justify-center place-items-center text-center'>
        <h2 className='text-5xl text-[#A31621] '>Browse Recipes</h2>
        <p className='text-xl'>explore amazing flavors.</p> 

  
        <div className="flex-col w-full px-6 self-center "> 
              <Slider {...settings}>
                  {Images.map((image) => (
                    <div className='w-full h-30 rounded-lg px-4 flex justfy-items-center place-items-center relative' key={image.id}>
                        <img src={image.src} alt={image.alt}  className="w-30 h-30 object-cover rounded-lg"/>
                        <p className='absolute top-1/2 -translate-y-1/2 text-[#FFFFFF] text-center'>{image.alt} <br/> <span className='underline opacity-75 text-sm '><Link to={image.alt}>View Recipe</Link></span></p>
                    </div>))}
              </Slider>
        </div>
      </div> 


      <div>
        <img src="" alt="" />
      </div>

    </div>
  

  )
}
export default LandingPage