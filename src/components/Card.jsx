import React from 'react'
import Handle from './Handle'
import Img from './Img'
import Profile from './Profile'
import Alfa from './Images/PGlogo.png'
import Bravo from './Images/PG1.jpg'
import Charlie from './Images/PG2.jpg'
import Delta from './Images/PG3.jpg'
import Ecko from './Images/PG4.jpg'
import Foxtrot from './Images/PG4 (2).jpg'
import Nav from './Nav'
import Logo from './Images/PG.png'

function Card() {
  return (
    <> 
    <main class="bg-black">
      <section class="uppercase flex justify-between 
  py-4 items-center left-0 top-0 right-0 border-double 
  border-y-4 border-lime-400 my-7 pl-60 pr-40">
    <div class="border-double 
  border-4 border-lime-400 ml-36" src="images/my logo.png" alt="" width="150"><Img photo= {Logo}/></div>
    <Nav />
    </section>

    {/* FIRST COL */}
    <section class ="h-[150%] ml-32 flex border-double 
    border-4 border-lime-400 mr-64">
      
    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Alfa}/>
    <Handle />
    <Profile />
    </section>


    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Bravo}/>
    <Handle />
    <Profile />
    </section>
    </section>

    {/* SECOND COL */}
    <section class ="h-[150%] ml-32 flex border-double 
    border-4 border-lime-400 mr-64">

    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Charlie}/>
    <Handle />
    <Profile />
    </section>


    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Delta}/>
    <Handle />
    <Profile />
    </section>
    </section>

{/* THIRD COL */}
    <section class ="h-[150%] ml-32 flex border-double 
    border-4 border-lime-400 mr-64">

    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Ecko}/>
    <Handle />
    <Profile />
    </section>


    <section class="bg-sky-900 my-7 border-double 
                border-x-4 border-lime-400 text-lime-400 flex-col h-[100%] w-96 ml-2.5 items-center shadow-80 rounded-2xl ">
    <Img photo={Foxtrot}/>
    <Handle />
    <Profile />
    </section>
    </section>
    
    </main>
    </>
  )
}
export default Card
