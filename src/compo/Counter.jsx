import React, { useState } from 'react'
import { Button,Typography } from '@mui/material'

   const Counter = () => {
    var[num,setNum] =useState(0)
    const inc =() =>{
        setNum(++num)
    }
    const dec=() =>{
        setNum(--num)
    }
    const rec=() =>{
        setNum(0)
    }
 
  return (
    <div>
        <br></br>
        <br></br>
    <Typography>{num}</Typography>
    <Button variant='contained' color='error'onClick={inc}>+</Button>
    <Button variant='contained' color='success'onClick={dec}>-</Button>
    <Button variant='contained' color='primary'onClick={rec}>Reset</Button>

    </div>
  )
   }

export default Counter