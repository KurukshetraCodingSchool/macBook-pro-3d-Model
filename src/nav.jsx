import React from 'react'
import "./nav.css"
const nav = () => {
  return (
    <div  className='navbar text-white line flex justify-center gap-10 py-3  ' >
      {[
        'iphone' , 
        'ipad' , 
        'services' , 
        'ios' , 
        'mac' , 
        'products'
      ].map((e)=> (
        <a href="" className='text-white font-[400] text-sm capitalize '>
          {e}
        </a>
      ))}
      </div>
  )
}

export default nav
