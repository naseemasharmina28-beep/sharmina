import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NarBar from './components/NarBar'
import { Route, Router, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br /><br /><br />
    
  <NarBar/>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/s' element={<signup/>}/>
    <Route path='/state' element={<StateBasics/>}/>
    <Route path='/name' element={<Name/>}/>
    <Route path='/api' element={<Api/>}/>
  </Routes>
     
    </>
  )
}


export default App