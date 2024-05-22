import { useState } from 'react'
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Room from './components/Room'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
   

      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/room/:id' element={ <Room />}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
