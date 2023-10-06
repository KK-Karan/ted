import React, { useState } from 'react'

const Nav = () => {
  let Links =[
    {name:"HOME",link:"/"},
    {name:"CONTACT US",link:"/"},
    {name:"ABOUT",link:"/"}
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-4 px-3'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="72" height="72" viewBox="0 0 24 24">
<polygon fill="#E02A24" points="15.255,9.927 15.255,7.75 7.945,7.75 7.945,16.25 15.255,16.25 15.255,14.069 10.617,14.069 10.617,13.011 15.255,13.011 15.255,10.988 10.617,10.988 10.617,9.927"></polygon><path fill="#E02A24" d="M20.089,7.75h-4.384v8.499h3.861c3.025,0,4.434-1.657,4.434-4.265C24,9.843,22.98,7.75,20.089,7.75z M19.421,14.073h-1.046l-0.016,0.001V9.928h0.854c1.936,0,2.115,1.488,2.115,2.022C21.328,12.748,21.085,14.073,19.421,14.073z"></path><polygon fill="#E02A24" points="2.431,16.249 5.1,16.249 5.1,9.927 7.53,9.927 7.53,7.75 0,7.75 0,9.927 2.431,9.927"></polygon>
</svg>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-9 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 font-bold'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
      
    </ul>
    </div>
  </div>
)
}

export default Nav























