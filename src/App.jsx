import { useState } from 'react'
import  Navbar  from './Components/Navbar/Navbar'
import  {Hero} from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Experience/Experience'
import Mywork from './Components/Mywork/Mywork'
import  Contact  from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Service/>
     <Mywork/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
