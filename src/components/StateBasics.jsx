import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setname]=useState("sharmina")
    var[a,seta]=useState()
     

const inputHandler =(e)=>{
console.log(e.target.value)
setname(e.target.value)
} 

const submitHeandler=()=>{
seta(name)
}

  return (
    <div>
      <br /><br /><br /><br />
      <h1>WELCOME{name}</h1>
      <TextField label="enter your name" variant='outlined' onChange={inputHandler}/>
      <br /><br />
      <Button variant='contained' onClick={submitHeandler}>submit</Button>
      
    </div>
  )
 }

export default StateBasics
 