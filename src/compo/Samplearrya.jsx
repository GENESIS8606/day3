import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Samplearrya = () => {
    var pname = [{ name: "Tiya", age: 10, plase: "koratty" },
    { name: "meera", age: 12, plase: "chalakudy" }]
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>AGE</TableCell>
                        <TableCell>PLASE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pname.map((value, index) => {
                        return <TableRow>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.age}</TableCell>
                            <TableCell>{value.plase}</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Samplearrya
