import React from 'react'

const Main = () => {
  return (
    <div className="w-full phone:flex phone:w-full phone:h-[82vh] phone:relative  h-screen relative  bg-black flex justify-end ">
        <img className='w-[90%] h-screen phone:w-[95%] phone:h-[40vh] ' src="https://www.urbanvault.in/images/Hero-Image-min.png" alt="" />
        <div className="w-[45%] phone:w-[90%] phone:h-[40vh] phone:flex phone:flex-col phone:top-[50%] phone:pl-5 phone:gap-0 h-[60vh] pl-10 rounded-r-full flex flex-col top-[40%] gap-[2px] left-0 items-start justify-center absolute bg-white  ">
<h1 className='text-5xl phone:text-3xl font-bold '>Your spaces</h1>
<h1 className='text-5xl phone:text-3xl font-bold '>On your terms</h1>
<p className='text-2xl phone:text-lg text-gray-500 '>We build hyper personalized</p>
<p className='text-2xl phone:text-lg text-gray-500 '>workspaces, storage spaces and</p>
<p className='text-2xl phone:text-lg text-gray-500 '>startup studios that help you build the</p>
<p className='text-2xl phone:text-lg text-gray-500 '>next big thing.</p>
<button className='w-[30%] phone:w-[30%] phone:h-[40px] phone:text-sm phone:mt-2   mt-5 font-bold h-[50px] bg-black rounded-2xl text-white  '>Book a Tour</button>
        </div>
    </div>
  )
}

export default Main