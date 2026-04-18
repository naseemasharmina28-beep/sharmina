import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Name = () => {
    var[a,seta]=useState() 

const inpu1=()=>{
    seta("React")

}

const input2=()=>{
    seta("Angular")
}

const input3=()=>{
    seta("Python")
}

useEffect( ()=>
    input2()
,[])
    
  return (
    <div>
        <br /><br /><br />
        <h2>WELCOME{a}</h2>
        <br /><br /><br />
         
        <Button variant='contained' color='error' onClick={inpu1}>react</Button> 
        &nbsp;&nbsp;

        <Button variant='contained' color='secondary' onClick={input2}>angular</Button> 
        &nbsp;&nbsp;

        <Button variant='contained' color='success' onClick={input3}>pythone</Button>
        &nbsp;&nbsp;
    </div>
  )
}

export default Name
