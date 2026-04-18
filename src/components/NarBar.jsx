import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import StateBasics from './StateBasics'
import { Link } from 'react-router-dom'

const NarBar = () => {
  return (
    <div>
        <AppBar>
             <Toolbar>
                <h3>Myapp</h3> 
                <Link to="/login">
                <Button variant='contained' color='success'>login</Button>
                </Link> &nbsp;

                <Link to='/s'>
                <Button variant='contained' color='error'>signup</Button>
                </Link> &nbsp;

                <Link to="/state">
                <Button variant='contained' color='success'>StateBastcs</Button>
                </Link> &nbsp;

                <Link to='/name'>
                <Button variant='contained' color='success'>Name</Button>
                </Link>
                 
                 <Link to='/Api'>
                 <Button variant='cotained' color='success'>Api</Button>
                 </Link>
                     
                </Toolbar>
        </AppBar>
    </div>
  )
}

export default NarBar
