import React from 'react'

const Main3 = () => {
  return (
  <div className="w-full phone:flex phone:w-full  phone:h-[85vh] phone:flex-col phone:items-center phone:justify-start   h-screen bg-black flex items-center justify-center ">
    <div className="w-1/2 phone:w-[80%] phone:h-[40vh] phone:flex h-[60vh] flex   ">
        <img className='w-[90%] phone:w-full phone:h-[40vh] h-[60vh]  rounded-r-full flex ' src="https://chopra.brightspotcdn.com/dims4/default/e8a2b3a/2147483647/strip/true/crop/6000x2375+0+639/resize/1420x562!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.us-east-1.amazonaws.com%2Fdc%2F01%2F098ff666430c980ca4a6be12f24c%2Fjonathan-kemper-izcbhj6tbos-unsplash.jpg" alt="" />
    </div>
    <div className="w-1/2 phone:w-[80%]   phone:h-[45vh] phone:flex phone:flex-col phone:pt-5  phone:gap-0 h-[60vh] flex flex-col pt-9  gap-2 ">
<span className='Span w-[30%] h-[6px] '></span>
<h1 className='text-white phone:text-lg text-4xl font-bold '>Your canvas for ideas</h1>
<p className='text-gray-400 phone:text-[12px] phone:pr-0 text-2xl pr-40  '>We build personalized, private, fully-furnished office suite designed to meet the needs of teams of 20-200+ quickly and efficiently. Created with your flexibility in mind, Urban Vault helps you stay agile in the markets you serve and in the talent you attract.</p>
<a href="https://www.urbanvault.in/contact-us/"><button className='BTN phone:w-[40%] phone:h-[45px] phone:text-sm w-[30%] mt-5 font-bold h-[50px] bg-white rounded-2xl text-black  '>Book a Tour</button>
</a>
    </div>
</div>
  )
}

export default Main3