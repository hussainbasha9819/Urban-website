import React from 'react'

const Home = () => {
  const Open=()=>{
document.getElementById("MORE").style.display==="flex"?
document.getElementById("MORE").style.display="none":
document.getElementById("MORE").style.display="flex";
  }
  return (
<>
<div className="w-full phone:w-full  phone:h-[100px] h-[120px] flex border-b-2 border-white  bg-black ">
    <div className="w-[60%] phone:w-1/2 phone:h-[100px] phone:flex phone:items-center phone:justify-center h-[120px] gap-2 flex  items-center justify-center   ">
<span className='w-[70%]  phone:w-full phone:h-[70px] phone:flex phone:items-center phone:justify-center h-[70px] flex items-center justify-center '>
<img className='phone:w-[50%] phone:h-[40px] ' src="https://www.urbanvault.in/images/Urban-Vault-Logo.svg" alt="" />
        <h1 className='phone:text-[15px]  text-3xl font-bold text-white'>Urban Vault</h1>
</span>
<span className='w-[30%] h-[70px] phone:hidden gap-10 border-r-[2px] border-white flex items-center justify-center '>
<a href="https://www.urbanvault.in/blogs/index.html"><span className='Color  text-lg font-bold text-white'>Blogs</span></a>

<a href="https://www.urbanvault.in/spaces.html"><span className='Color  text-lg font-bold text-white'>Spaces</span></a>
</span>
    </div>
    <div className="w-[40%] phone:w-1/2 phone:h-[100px] phone:flex phone:items-center phone:justify-evenly h-[120px] flex items-center justify-evenly  ">
        <button className='w-[25%] phone:hidden h-[50px] rounded-xl  bg-white font-bold flex items-center justify-center text-black ' >
            Book a Tour
        </button>
        
        <button className='w-[45%] phone:hidden h-[50px] rounded-xl  bg-white font-bold flex items-center justify-center text-black ' >
        <i class="fa-solid fa-phone"></i>
        +++++1234567890
        </button>
        <button className=' hidden phone:w-[45%] phone:text-sm gap-1 phone:h-[50px]   h-[50px] rounded-xl  bg-white font-bold phone:flex phone:items-center phone:justify-center phone: text-black ' >
        <i class="fa-solid fa-phone"></i>
        Call Now
        </button>
        <i onClick={Open} className="fa-solid fa-bars text-gray-600 text-3xl hidden phone:flex "></i>
    </div>
</div>
<div id='MORE' className=" hidden phone:w-full  phone:h-[100px] phone:hidden phone:flex-col bg-black phone:relative  ">
<a href="https://www.urbanvault.in/blogs/index.html"><span className='Color  text-xl font-bold text-white'>Blogs</span></a>

<a href="https://www.urbanvault.in/spaces.html"><span className='Color  text-xl font-bold text-white'>Spaces</span></a>
<a href="https://www.urbanvault.in/contact-us/"><span className='Color  text-xl font-bold text-white'>Book a Tour</span></a>
</div>

</>
  )
}

export default Home