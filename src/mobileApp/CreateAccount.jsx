import React from 'react'
import { BiAtom } from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { AiFillCheckSquare } from "react-icons/ai";
import { Link } from 'react-router-dom';

 function CreateAccount() {
  return (
    
    <div className="pl-9 m-auto bg-sky-900 my-7 border-double 
    border-x-4 border-lime-400 text-lime-400 flex-col h-[90vh]
     w-96 mx-auto items-center shadow-80 rounded-2xl ">
      
      <div className="pt-10 text-2xl">
        <Link to="/">
        <HiArrowNarrowLeft/>
        </Link>
      </div>

      <h1 className="font-bold pt-18 text-4xl py-4 font-serif">
        New <br />
        Account
      </h1>
      <div>
      <div className="flex pl-9 py-11 h-7 pt-12 text-2xl bg-sky-900 w-24 border-4
       border-lime-400 rounded-[100%] items-center">
        <BiAtom/>
      </div> <p className='pl-12 pr-12'>Join, Explore Xperience beyond your imagination</p>
      </div>

      
      <form action="" className='pt-12'>
         <input type="text" name="Fullname" id="Fullname" placeholder='Fullname' 
         class="bg-transparent border-double 
          border-b-4 w-72 pt-4 border-lime-400" />
          <input type="password" name="password" id="password" 
          placeholder='password' class="bg-transparent 
          border-double pt-4 w-72
          border-b-4 border-lime-400"/>
        <div className='flex flex-row'> <span className='pt-1'>
          <AiFillCheckSquare/> </span><p className='ml-0.5'>Remember me</p>
          <p className='ml-10'>Forgot password?</p></div>

      </form>
      <div className=" py-11 pt-38">
        <Link to="/signUp">
        <button className=" font-serif shadow-2xl h-11 w-72 bg-slate-600 
        rounded-full hover:bg-lime-400 hover:text-sky-500">NEXT</button>
        </Link>
        <p className='pt-4 font-serif'>Already have account. 
          <span className='text-white ml-2'><Link to="/createAccount">LogIn</Link></span> 
      </p>
      </div>

    </div>
  )
}
export default CreateAccount