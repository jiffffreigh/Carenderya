
import bannerDesktop from '../assets/landingPage/Banners/bannerDesktop.png'
import bannerTablet from '../assets/landingPage/Banners/bannerTab.png'
import banner from '../assets/landingPage/Banners/bannerPhone.png'
import ChickenAdoboSlider from '../assets/landingPage/carousel/ChickenAdobo.webp'
import MunggoSlider from '../assets/landingPage/carousel/Munggo.webp'
import PorkSisigSlider from '../assets/landingpage/carousel/PorkSisig.webp'
import PorkBistekSlider from '../assets/landingpage/carousel/PorkBistek.webp'
import TinolaSlider from '../assets/landingpage/carousel/Tinola.webp'
import Sinigang from '../assets/landingpage/carousel/Sinigang.webp'
import BreakFast from '../assets/landingPage/breakfast.webp'
import Chef from '../assets/landingPage/chef.webp'
import Cook from '../assets/landingPage/Cook.webp'
import TwoPeopleCookingMobile from '../assets/landingPage/TwoPeopleCooksMobile.webp'
import MakingSaladMobile from '../assets/landingPage/MakingSaladMobile.webp'
import Slider from "react-slick";
import TopBar from "../assets/components/topBar.jsx";
import { Link } from 'react-router-dom'



function NextArrow({onClick}) {

  return (
    <button onClick={onClick}
    className="absolute -right-[0.1rem] md:text-6xl top-1/2 -translate-y-1/2 text-4xl"
    >
      {">"}
    </button>
  );
}


function PrevArrow({onClick}) {
  return (
    <button onClick={onClick}
    className="absolute -left-[0.1rem] md:text-6xl top-1/2 -translate-y-1/2 z-10 text-4xl"
    >
        {"<"}
    </button>
  );
}

function LandingPage(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    ]
  };
  



  
const ImagesCarousel =[
    {id:1, src:ChickenAdoboSlider, alt:"Chicken Adobo"},  
    {id:2, src:MunggoSlider, alt:"Munggo"},
    {id:3, src:PorkSisigSlider, alt:"Pork Sisig"},
    {id:4, src:PorkBistekSlider, alt:"Pork Bistek"},
    {id:5, src:TinolaSlider, alt:"Tinola"},
    {id:6, src:Sinigang, alt:"Sinigang"},
]

const ImagesBody =[
  {id:1, src:BreakFast, alt:"Breakfast Icon"},
  {id:2, src:Cook, alt:"Cook Icon"},
  {id:3, src:Chef, alt:"Chef Icon"},
]
  


  return (<div className='font-Josefin overflow-x-hidden min-w-screen max-w-screen w-screen h-screen min-h-screen '>
   
    <header>
      <TopBar />
    </header>

    <main>

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
          <div id="carousel" className='py-50 flex-col justify-center place-items-center text-center'>
            <h2 className='text-5xl text-[#A31621] '>Browse Recipes</h2>
            <p className='text-xl'>explore amazing flavors.</p> 

            <div className="slider-container flex-col w-full py-4 self-center  ">
            <Slider {...settings}>
              {ImagesCarousel.map((image) => (
                  <div key={image.id} className='flex justify-center place-items-center h-50  px-5 md:h-80  md:px-8'>
                    <img src={image.src} alt={image.alt} className='object-cover rounded-lg h-full w-full' />
                    <p className='absolute top-1/2 -translate-y-1/2 text-white bg-'>{image.alt} <br /> <Link to={image.alt}><span className='underline'>View More</span></Link></p>
                  </div>
              ))}
            </Slider>

                          
            </div>
          </div>


        {/*---Icons Section---*/}
        <div className='flex-col lg:flex lg:flex-row justify-center place-items-center text-center0 '>
                {ImagesBody.map((image) => <div key={image.id}  className='flex-col justify-center place-items-center text-center lg:flex-row'>
                  <img src={image.src} alt={image.alt} />
                  <p><span className='text-4xl md:text-5xl text-[#A31621] font-bold'>Lorem ipsum dolor sit</span> <br /> <span className='md:text-xl  '>amet consectetur adipisicing elit. Voluptatibus, expedita eligendi soluta cumque nihil praesentium ad ipsum sequi, doloribus ab quo, aliquam sunt. Enim magnam reiciendis corporis blanditiis laudantium id?</span></p>
                </div>)}
        </div>     



                <div className='py-15  '>
                  <div className='rounded-lg md:hidden '>
                        <img src={MakingSaladMobile} alt="Making Salad" className='h-full w-full'/>
                      
                          <p>Easy Eats in Minutes 
                          <br />Make meals with ingredients that you normally see in your pantry.</p>
                  </div>


                  <div className='rounded-lg md:hidden mt-[20%]'>
                    <img src={TwoPeopleCookingMobile} alt="Two People Cooking"/>
                    <p> Healthy Meals for a Healthy Lifestyle
                      <br />Cook healthy food for everyday meals with our easy to follow recipes.</p>
                  </div>
                
                </div>
    </main>

    <footer>
      <div className='bg-[#1E212B] h-50 md:h-100'> </div>
    </footer>
    </div>
  

  )
}
export default LandingPage