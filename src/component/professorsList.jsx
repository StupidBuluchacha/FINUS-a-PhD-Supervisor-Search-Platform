import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import Dummy from '../assets/avatar.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function createData(pic, name, email, intro, areas) {
    return { pic, name, email, intro, areas };
}

const rows = [
    createData(Dummy, 'abc', 'abc@abc.com', 'I am a professor', 'abc, def, ghi'),
    createData(Dummy, 'abc', 'abc@abc.com', 'I am a professor', 'abc, def, ghi'),
    createData(Dummy, 'abc', 'abc@abc.com', 'I am a professor', 'abc, def, ghi'),
    createData(Dummy, 'abc', 'abc@abc.com', 'I am a professor', 'abc, def, ghi'),
];

export default function ProfessorsList() {
const {push} = useHistory()
    return (
        <>
            <Button classes={{ contained: 'main-btn' }} onClick={() => push('/add/123')} style={{ marginBottom: '15px' }} variant="contained" >ADD PROFESSOR</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Research Areas</TableCell>
                        <TableCell align="center">Introduction</TableCell>
                        <TableCell align="center">Photo</TableCell>
                        <TableCell align="center">Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({ pic, name, email, intro, areas }, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" align='center' scope="row">
                                <b>{i + 1}</b>
                            </TableCell>
                            <TableCell align="center">
                                {name}
                            </TableCell>
                            <TableCell align="center">
                                {email}
                            </TableCell>
                            <TableCell align="center">
                                {areas}
                            </TableCell>
                            <TableCell align="center">
                                {intro}
                            </TableCell>
                            <TableCell align="center"><img src={pic} className="pic" alt="" /></TableCell>
                            <TableCell align="center">
                                <Button classes={{ contained: 'main-btn' }} onClick={() => alert('delete')} variant="contained" >Delete</Button>
                                <Button classes={{ contained: 'main-btn' }} style={{ marginLeft: '10px' }} onClick={() => push('/edit/123')} variant="contained" >Edit</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
