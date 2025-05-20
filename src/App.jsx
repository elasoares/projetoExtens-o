import { useState } from 'react'
import './App.css'


import NavBar from './components/NavBar/NavBar'
import Banner from './components/banner/Banner'
import Destaque from './components/destaque/Destaque'
import SobreNos from './components/SobreNos/SobreNos'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> 
    <NavBar/>
    <Banner/>
    <Destaque/>
    <SobreNos/>
    <Feedback/>
    <Footer/>
    </div>
    </>
  )
}

export default App
