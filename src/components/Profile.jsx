import React from 'react'
/* import './Profile.css' */

function Profile ({name, work, strength}) {
 
  return (
    <div className='PF'>
      <h1>Squard: {name} </h1>
      <h1>Unit: {work}</h1>
      <h1>Rank: {strength}</h1>
    </div>
  )
}
export default Profile