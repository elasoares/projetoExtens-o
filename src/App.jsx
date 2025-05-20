import { useState } from 'react'
import './App.css'
import  Feedback  from './componentsPatrick/Feedback/Feedback'
import Footer from './componentsPatrick/Footer/Footer'

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
