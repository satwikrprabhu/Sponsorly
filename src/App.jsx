import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'
import Error from './component/Error'
import {Route,Routes} from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'
import Search from './component/Search'
import ProfileList from './component/ProfileList'
import Companylist from './component/CompanyList'
const App = () => {
  return (<>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/welcome' element={<Search/>}/>
    <Route path='/inf' element={<ProfileList/>}/>
    <Route path='/adv' element={<Companylist/>}/>

    <Route path='*' element={<Error/>}/>
    </Routes>
   </>
  )
}

export default App