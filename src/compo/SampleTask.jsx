import React, { useState } from 'react'
import { Button,Typography } from '@mui/material'

const SampleTask = () => {
    var[pagename,setpagename] =useState("")
    
    const changeNameone =() =>{
        setpagename ("home page")
    }
    const changeNametwo =() =>{
        setpagename ("gallery")
    }
    const changeNamethree =() =>{
        setpagename ("contact")
    }
  return (
    <div>
        <br></br>
      <Button variant='contained' color='primary'onClick={changeNameone}>HOME PAGE</Button>
      <Button variant='contained' color='secondary'onClick={changeNametwo}>GALLERY PAGE</Button>
      <Button variant='contained' color='error'onClick={changeNamethree}>CONTACT PAGE</Button>
      <Typography>wellcome to {pagename}</Typography>
    </div>
  )
}

export default SampleTask
