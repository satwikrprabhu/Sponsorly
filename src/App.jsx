import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import Error from './component/Error'
import {Route,Routes} from 'react-router-dom'
import Login from './component/Login'
const App = () => {
  return (<>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
   </>
  )
}

export default App