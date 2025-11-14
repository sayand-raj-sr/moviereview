import React, { useState } from 'react'

function Toggleswitch() {
    const[darkMode,setDarkMode]=useState(false)

    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
        if(darkMode){
            document.body.classList.add("dark-mode");
        }
        else{
              document.body.classList.remove("dark-mode");
        }
    }
  return (
    <div>
       <div className='form-check form-switch my-3'>
        <input type="checkbox" className='form-check-input' role="switch" id='checkswich'
        checked={darkMode}  onChange={()=>toggleDarkMode()}/>
        <label htmlFor="checkswich" className='form-check-label'>{darkMode?"enable dark":"dissable dark"}</label>
       </div>
    </div>
  )
}

export default Toggleswitch
