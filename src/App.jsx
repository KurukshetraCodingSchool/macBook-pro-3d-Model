
import React from 'react'
import "./style.css"
import Nav from './nav';
import Center from './center';
import Canvas from "./canvas"

const App = () => {
  return (
    <div  className='w-full h-screen overflow-hidden  '>
      <Nav />
        <Center />
         <Canvas />
   
    </div>
  )
}

export default App