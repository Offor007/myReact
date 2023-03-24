import React from 'react'
import { GiBrassEye } from "react-icons/gi";
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div className="m-auto bg-sky-900 pl-9 my-7 border-double 
    border-x-4 border-lime-400 text-lime-400 flex-col h-[90vh] 
    w-96 items-center shadow-80 rounded-2xl shadow-stone-500">
      
      <div className=" py-11 text-7xl">
        <GiBrassEye/>
      </div>

      <h1 className="font-bold text-4xl py-4 font-serif">
        Start 
        <br className=' py-4'/> your
        <br /> adventure
      </h1>

      <div className=" flex-col items-center py-11 pt-48">
        <Link to='/signUp'>
        <button className=" font-serif shadow-2xl h-11 w-72 bg-slate-600 
        rounded-full hover:bg-lime-400 hover:text-sky-500">NEXT</button>
        </Link>
      <p className='pt-4 font-serif'>
        I don't have an Account? <Link to='/signUp'>
      <span className='text-white'> Sign up here </span>
        </Link>
      </p>
      </div>
      
    </div>
  )
}
export default Home