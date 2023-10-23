import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carosal = () => {
  return (
    <div className="w-full phone:flex phone:w-full phone:h-[62vh] phone:flex-col h-screen bg-[url('https://www.urbanvault.in/images/Customer-BG-min.jpg')] object-cover bg-no-repeat bg-cover bg-current flex flex-col ">
        <div className="w-full h-[20vh] phone:w-full phone:h-[20vh]  phone:pt-1 phone:flex phone:flex-col phone:items-start phone:pl-10 phone:justify-center  gap-3 flex flex-col items-start pl-40 justify-center ">
            <span className='Span w-[20%] h-[10px] '></span>
            <h1 className='phone:text-xl text-white text-5xl font-bold '>Client Journeys with us:</h1>
        </div>
        <div className="w-full phone:w-full phone:h-[40vh] phone:flex phone:pl-10 h-screen flex pl-36 ">
        <Carousel className='w-[70%] phone:w-[90%] phone:h-[40vh] phone:flex phone:items-start phone:justify-start h-[70vh] flex items-center justify-center  ' showThumbs={false} >
                <div className='w-full h-[60vh] flex phone:w-full phone:h-[40vh] phone:flex  phone:items-center phone:flex-col phone:justify-center flex-col items-center justify-center ' >
                    <h1 className='phone:text-2xl text-5xl font-extrabold text-pink-500 '>Khatabook</h1>
                    <p className=' phone:text-[10px] text-3xl text-white '>Raised three rounds of funding out of our space and</p>
                    <p className=' phone:text-[10px] text-3xl text-white '>became a well-known  name in book-keeping apps</p>
                    <p className=' phone:text-[10px] text-3xl text-white '>with more than 10 million downloads.</p>
                </div>
                <div className='w-full phone:w-full phone:h-[40vh] phone:flex phone:items-center phone:flex-col phone:justify-center h-[60vh] flex  flex-col items-center justify-center ' >
                    <h1 className='phone:text-2xl text-5xl font-extrabold text-pink-500 '>Xto10x</h1>
                    <p className='text-3xl phone:text-[10px] text-white '>Binny Bansal got onto his second entrepreneurial</p>
                    <p className='text-3xl phone:text-[10px] text-white '>journey trusting UrbanVault for all the office space</p>
                    <p className='text-3xl phone:text-[10px] text-white '>requirements for xto10x and his investee companies.</p>
                </div>
                <div className='w-full phone:w-full phone:h-[40vh] phone:flex phone:items-center phone:flex-col phone:justify-center h-[60vh] flex  flex-col items-center justify-center ' >
                    <h1 className='phone:text-2xl text-5xl font-extrabold text-pink-500 '>Dealshare</h1>
                    <p className='text-3xl phone:text-[10px] text-white '>Raised their 100 Million round sitting out of</p>
                    <p className='text-3xl phone:text-[10px] text-white '>UrbanVault</p>
                </div>
                <div className='w-full phone:w-full phone:h-[40vh] phone:flex phone:items-center phone:flex-col phone:justify-center h-[60vh] flex  flex-col items-center justify-center ' >
                    <h1 className=' phone:text-2xl text-5xl font-extrabold text-pink-500 '>Protonn</h1>
                    <p className='text-3xl phone:text-[10px] text-white '>Senior Execs from Flipkart - Anil Goteti and Mausam</p>
                    <p className='text-3xl phone:text-[10px] text-white '>Bhatt trusted UrbanVault as the space partner for</p>
                    <p className='text-3xl  phone:text-[10px] text-white '>their maiden innings with Protonn.</p>
                </div>
                <div className='w-full phone:w-full phone:h-[40vh] phone:flex phone:items-center phone:flex-col phone:justify-center h-[60vh] flex  flex-col items-center justify-center ' >
                    <h1 className='phone:text-2xl text-5xl font-extrabold text-pink-500 '>Redseer Consulting</h1>
                    <p className='text-3xl phone:text-[10px] text-white '>Became one of the top homegrown consulting firms</p>
                    <p className='text-3xl phone:text-[10px] text-white '>in India. Saw massive growth, making them one of</p>
                    <p className='text-3xl phone:text-[10px] text-white '>the top management consulting firms in India.</p>
                </div>
                <div className='w-full phone:w-full phone:h-[40vh] phone:flex phone:items-center phone:flex-col phone:justify-center h-[60vh] flex  flex-col items-center justify-center ' >
                    <h1 className='phone:text-2xl text-5xl font-extrabold text-pink-500 '>Buniyad</h1>
                    <p className='text-3xl phone:text-[10px] text-white '>Buniyad, one of the largest Real Estate brokerage</p>
                    <p className='text-3xl phone:text-[10px] text-white '>firms in North India trusted UrbanVault with their</p>
                    <p className='text-3xl phone:text-[10px] text-white '>south India presence.</p>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Carosal