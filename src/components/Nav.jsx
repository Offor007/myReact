import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="uppercase flex justify-between 
  py-4 items-center left-0 top-0 right-0 border-double 
  border-y-4 border-lime-400 my-7 pl-60 pr-40">
        <ul class="flex">
        <li class="py-2 px-3 text-xs my-0 hover:bg-sky-900 text-lime-400 hover:rounded-full">Home</li>
        <li class="py-2 px-3 text-xs my-0 hover:bg-sky-900 text-lime-400 hover:rounded-full">Profile</li>
        <li class="py-2 px-3 text-xs my-0 hover:bg-sky-900 text-lime-400 hover:rounded-full">About</li>
        <li class="py-2 px-3 text-xs my-0 hover:bg-sky-900 text-lime-400 hover:rounded-full">Contact</li>
        </ul>
      </nav>

    </div>
  )
}
export default Nav