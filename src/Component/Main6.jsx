import React from 'react'

const Main6 = () => {

const First=()=>{
document.getElementById("Arpit").style.display="flex"
document.getElementById("Smruti").style.display="none"
document.getElementById("Chandralika").style.display="none"
document.getElementById("one").style.backgroundColor="white"
document.getElementById("two").style.backgroundColor="gray"
document.getElementById("three").style.backgroundColor="gray"
}
const second=()=>{
    document.getElementById("Arpit").style.display="none"
    document.getElementById("Smruti").style.display="flex"
    document.getElementById("Chandralika").style.display="none"
    document.getElementById("one").style.backgroundColor="gray"
document.getElementById("two").style.backgroundColor="white"
document.getElementById("three").style.backgroundColor="gray"
}
const thred=()=>{
    document.getElementById("Arpit").style.display="none"
    document.getElementById("Smruti").style.display="none"
    document.getElementById("Chandralika").style.display="flex"
    document.getElementById("one").style.backgroundColor="gray"
document.getElementById("two").style.backgroundColor="gray"
document.getElementById("three").style.backgroundColor="white"
}




  return (
<>
<div className="w-full phone:flex phone:w-full  phone:h-[72vh] phone:flex-col phone:items-center phone:justify-center h-[60vh] flex flex-col gap-1 items-center justify-center bg-[url('https://www.urbanvault.in/images/Customer-BG-min.jpg')] bg-no-repeat bg-cover bg-center  ">
<div id='Arpit' className="w-full phone:w-full phone:h-[20vh]  phone:flex phone:flex-col phone:items-center phone:justify-center phone:gap-1  h-[30vh] flex flex-col gap-1 items-center justify-center ">
<span className='Span w-[30%] h-[6px] flex '></span>
<h1 className='text-white phone:text-lg text-3xl font-medium '>“Space was planned as per our need.</h1>
<h1 className='text-white phone:text-lg text-3xl font-medium '>Looks stunning in the night.”</h1>
</div>
<div id='Smruti' className="w-full h-[30vh] hidden phone:w-full  phone:h-[20vh] phone:hidden phone:flex-col phone:items-center phone:justify-center phone:gap-1 flex-col gap-1 items-center justify-center ">
<span className='Span w-[30%] h-[6px] flex '></span>
<h1 className='text-white phone:text-lg text-3xl font-medium '>"Awesome interiors.</h1>
<h1 className='text-white phone:text-lg text-3xl font-medium '>Quick setup 30 days!"</h1>
</div>
<div id='Chandralika' className="w-full h-[30vh] hidden phone:w-full  phone:h-[20vh] phone:hidden phone:flex-col phone:items-center phone:justify-center phone:gap-1 flex-col gap-1 items-center justify-center ">
<span className='Span w-[30%] h-[6px] flex '></span>
<h1 className='text-white phone:text-[14px] text-3xl font-medium '>"Got office very quickly. And it has been peaceful since.</h1>
<h1 className='text-white phone:text-[14px] text-3xl font-medium '>Very flexible with growing team size."</h1>
</div>
<div className="w-full h-[25vh] phone:w-full phone:h-[50vh] phone:flex phone:flex-col phone:items-center phone:justify-evenly gap-[2px] flex items-center justify-center ">
    <div id='one' onClick={First} className="w-[25%] phone:w-[60%] phone:h-[15vh] phone:flex cursor-pointer h-[20vh] flex bg-gray-500  ">
        <span className='w-[40%] phone:w-[40%] phone:h-[15vh] phone:flex phone:items-center phone:justify-center  h-[20vh] flex items-center justify-center  '>
            <span className='Span w-[70px] phone:w-[50px] phone:h-[50px] h-[70px] rounded-full flex items-center justify-center text-white font-bold text-3xl '>A</span>
        </span>
        <span className='w-[60%] phone:w-[40%] phone:h-[15vh] phone:flex phone:flex-col phone:items-center phone:justify-center h-[20vh] flex flex-col justify-center '>
            <h1 className='text-2xl  text-white '>Arpit</h1>
            <h1 className='text-2xl  text-gray-300 '>Loktra</h1>
        </span>
    </div>
    <div  id='two' onClick={second} className="w-[25%] phone:w-[60%] phone:h-[15vh] phone:flex cursor-pointer h-[20vh] flex bg-gray-500  ">
        <span className='w-[40%] phone:w-[40%] phone:h-[15vh] phone:flex phone:items-center phone:justify-center h-[20vh] flex items-center justify-center  '>
            <span className='Span w-[70px] phone:w-[50px] phone:h-[50px] h-[70px] rounded-full flex items-center justify-center text-white font-bold text-2xl '>S</span>
        </span>
        <span className='w-[60%] phone:w-[40%] phone:h-[15vh] phone:flex phone:flex-col phone:items-center phone:justify-center h-[20vh] flex flex-col justify-center '>
            <h1 className='text-2xl  text-white '>Smruti</h1>
            <h1 className='text-2xl  text-gray-300 '>NestAway</h1>
        </span>
    </div>
    <div id='three' onClick={thred} className="w-[25%] phone:w-[60%] phone:h-[15vh] phone:flex cursor-pointer h-[20vh] flex bg-gray-500  ">
        <span className='w-[40%] phone:w-[40%] phone:h-[15vh] phone:flex phone:items-center phone:justify-center h-[20vh] flex items-center justify-center  '>
            <span className='Span w-[70px] phone:w-[50px] phone:h-[50px] h-[70px] rounded-full flex items-center justify-center text-white font-bold text-2xl '>C</span>
        </span>
        <span className='w-[60%] phone:w-[40%] phone:h-[15vh] phone:flex phone:flex-col phone:items-center phone:justify-center h-[20vh] flex flex-col justify-center '>
            <h1 className='text-2xl  text-white '>Chandralika</h1>
            <h1 className='text-2xl  text-gray-300 '>BigThink</h1>
        </span>
    </div>
</div>
</div>
</>
  )
}

export default Main6