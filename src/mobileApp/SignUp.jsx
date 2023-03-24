import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { HiArrowNarrowLeft} from "react-icons/hi";
import { BiUser } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';
import { AiFillCheckSquare } from 'react-icons/ai';

 function SignUp() {
  return (
    <div className="mx-auto pl-9 bg-sky-900 my-7 border-double 
    border-x-4 border-lime-400 text-lime-400 flex-col h-[90vh] 
    w-96 items-center shadow-80 rounded-2xl ">
      
      <div className=" py-11 text-2xl">
        <Link to="/">
        <HiArrowNarrowLeft/>
        </Link>
      </div>

      <h1 className="font-bold text-4xl py-4 font-serif">
        Login
      </h1>
      <form className='pt-12'>
        <div className='flex flex-row'>
          <span className='border-double  pt-4
          border-b-4 border-lime-400'><BiUser/></span><input type="text" 
          name="Fullname" id="Fullname" placeholder='Fullname' class="bg-transparent border-double 
          border-b-4 w-72 pt-4 border-lime-400" />
        </div>
         <div className='flex flex-row'> <span className='border-double  pt-4
          border-b-4 border-lime-400'><GiPadlock /> </span><input type="password" 
          name="password" id="password" placeholder='password' 
          class="bg-transparent border-double  pt-4 w-72
          border-b-4 border-lime-400"/>
          </div>
          <div className='flex flex-row'> <span className='pt-1'><AiFillCheckSquare/> </span>
          <p className='ml-0.5'>Remember me</p><p className='ml-10'>Forgot password?</p></div>

      </form>
      <div className="pt-48 flex-col items-center py-11">
        
        <Button/>
        
        <p className='pt-4 font-serif'>
        First time here. <Link to="/createAccount"><span className='text-white'>Sign Up</span></Link>
      </p>
      </div>
      </div>
  )
}
export default SignUp