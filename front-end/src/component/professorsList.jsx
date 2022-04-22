import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import Dummy from '../assets/avatar.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types'
import { isArray, isEmpty } from 'lodash';
import { useMutation } from '@apollo/client';
import { DELETE_PROFESSOR } from '../graphql/mutations/professor';

export default function ProfessorsList({ professors, refetch }) {
    const [deleteProfessor, { data }] = useMutation(DELETE_PROFESSOR)
    const { push } = useHistory()

    const handleDelete = (id) => {
        deleteProfessor(({ variables: { id } }))
    }

    useEffect(() => {
        if (!isEmpty(data)) {
            refetch()
        }
    }, [data])
    return (
        <>
            <Button classes={{ contained: 'main-btn' }} onClick={() => push('/add/123')} style={{ marginBottom: '15px' }} variant="contained" >ADD PROFESSOR</Button>
            {isEmpty(professors) ? <h1 className="rec-text">Nothing here</h1> : <TableContainer component={Paper}>
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
                        {isArray(professors) && professors.map(({ photo, name, email, introduction, researchAreas, _id }, i) => (
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
                                    {researchAreas.toString()}
                                </TableCell>
                                <TableCell align="center">
                                    {introduction}
                                </TableCell>
                                <TableCell align="center"><img src={photo || Dummy} className="pic" alt="" /></TableCell>
                                <TableCell align="center">
                                    <Button classes={{ contained: 'main-btn' }} onClick={() => handleDelete(_id)} variant="contained" >Delete</Button>
                                    <Button classes={{ contained: 'main-btn' }} style={{ marginLeft: '10px' }} onClick={() => push(`/edit/${_id}`)} variant="contained" >Edit</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </>
    );
}

ProfessorsList.propTypes = {
    professors: PropTypes.instanceOf(Array),
    refetch: PropTypes.func,
}
ProfessorsList.defaultProps = {
    professors: [],
    refetch: () => { },
}