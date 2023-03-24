import { Button, Typography } from '@mui/material'
import React, { PureComponent, useState } from 'react'

const SampleBasic =() =>{
    var[fname,setFname] =useState("Meera")

    const changeName =() =>{
        setFname ("Tiya")
    }
    return (
      <div>
        <Typography>WELLCOME {fname}</Typography>
        <br></br>
        <Button variant='contained'onClick={changeName}>Change</Button>
      </div>
    )
  }

export default SampleBasic
