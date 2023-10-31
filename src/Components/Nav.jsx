import  { useEffect, useState } from 'react'
import {auth, provider} from "./config.jsx"
import {signInWithPopup} from "firebase/auth"

const Nav = () => {
  
  let [open,setOpen]=useState(false);
  const [value , setValue] = useState('')
  const handleClick = () =>{
     signInWithPopup(auth, provider).then((data) =>{
      setValue(data.user.email)
      localStorage.setItem("email" , data.user.email)
     })
  }

  useEffect(() =>{
    setValue(localStorage.getItem('email'))
  })

  const logout =  () => {
    localStorage.clear()
    window.location.reload()
  }
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

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}` }>
      
        
          <li className='flex flex-col justify-center  font-bold w-[25rem] items-center md:flex-row pt-[3rem] gap-4'>
            <a className='text-gray-800 hover:text-gray-400 duration-500'>HOME</a>
            <a className='text-gray-800 hover:text-gray-400 duration-500'>CONTACT</a>
            <a className='text-gray-800 hover:text-gray-400 duration-500'>ABOUT</a>

    {value ? <button onClick={logout}>Logout</button>:
    <div className='border rounded-lg justify-around'>
    <button className='flex flex-row' onClick={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48" className='mt-2 mr-1'>
    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
    Sign In
    </button>
    </div>
    }
    {/* <a href="https://ted-one.vercel.app/oauth/authorise
    &client_id=ZrukKNCY6Nn5Sr5fyamr3fvwHeJxJDp7GrUHOZUS
    &redirect_uri='https://ted-one.vercel.app/'
    ">Channeli Login</a> */}
    <a href="https://ted-one.vercel.app/oauth/authorise?client_id=ZrukKNCY6Nn5Sr5fyamr3fvwHeJxJDp7GrUHOZUS&redirect_uri='https://ted-one.vercel.app/'">
     Channeli Login
     </a>
    </li>
      
      
    </ul>
    </div>
  </div>
)
}

export default Nav























