import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Power = () => {
    var [value, setvalue] = useState();
    useEffect(() => {
        setvalue("Lenac")
        test();
    }, [])
    return (
        <div>
            <Typography variant='h1'>{value}</Typography>
        </div>
    )
}

export default Power
