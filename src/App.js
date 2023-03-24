import React from 'react'
import { Simulate } from 'react-dom/test-utils'
import { Link, Route, Routes } from 'react-router-dom'
import Button from './mobileApp/Button'
import CreateAccount from './mobileApp/CreateAccount'
import Home from './mobileApp/Home'
import SignUp from './mobileApp/SignUp'
//import Card from './components/Card'
//import Handle from './components/Handle'
//import Img from './components/Img'
//import Profile from './components/Profile'
//import About from './Pages/About'
//import Ancient from './Pages/Ancient'
//import Home from './Pages/Home'
//import Modern from './Pages/Modern'
//import Romance from './Pages/Romance'

function App() {
  return (
    
      //<Card />
      <>
      <Link to="/"></Link>
      <Routes>
        <Route path='/' element={< Home />}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      {/* < ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/ancient">Ancient</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
        </li>
      <li><Link to="/modern">Modern</Link>
      </li>
      <li><Link to="/romance">Romance</Link>
      </li>
      </ul>
    <Routes>
      <Route path="/home" element= {<Home />}/>
      <Route path="/ancient" element={<Ancient/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/modern" element={<Modern/>} />
      <Route path="/romance" element={<Romance/>} />
    </Routes> */}
  </>
  )
}

export default App
