import React from 'react'
import { Button } from '@chakra-ui/react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import Upload from './Components/Upload'
import Login from './Components/Login'
import Register from './Components/Register'
import Freevideo from './Components/Freevideo'


function App() {
  return (
    <>
       <BrowserRouter>
        <Header/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/videos' element={<Videos/>}/>
             <Route path='/freevideo' element={<Freevideo/>}/>
             <Route path='/upload' element={<Upload/>}/>
             <Route path='/login' element={<Login/>}/>
             <Route path='/register' element={<Register/>}/>
          </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App
