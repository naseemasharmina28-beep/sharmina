import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        
        <TextField label="name" variant='outlined'/><br/>
        <TextField label="age" variant='outlined'/><br/>
        <TextField label="dept" variant='outlined'/><br/>
        <Button variant="contained">contained</Button>
     </div>
  )
}

export default Signup
