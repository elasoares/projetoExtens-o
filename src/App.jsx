import { useState } from 'react'
import './App.css'
import  Feedback  from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> 
    <Feedback/>
    <Footer/>
    </div>
    </>
  )
}

export default App
