import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import Dummy from '../assets/avatar.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { isArray, isEmpty } from 'lodash';

export default function BasicTable({professors}) {
  const {push} = useHistory()

  return (
    <>
    {isEmpty(professors) ? <h1 className="rec-text">No result found!</h1> : <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">Professor's Picture</TableCell>
            <TableCell align="right">Professor's Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isArray(professors) && professors.map(({ name, email, _id,photo, researchAreas }, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' scope="row">
                <b>{i + 1}</b>
              </TableCell>
              <TableCell align="center"><img src={photo || Dummy} className="pic" alt="" /></TableCell>
              <TableCell align="left">
                <div className='table-details-con'>
                  <div className='details-con-small'>
                    Name: {name}
                    <br />
                    Email: {email}
                    <br />
                    Interests: {researchAreas.toString()}
                  </div>
                  <div>
                    <Button classes={{ contained: 'main-btn' }} onClick={() => push(`/profDetails/${_id}`)} style={{marginLeft: '15px'}} variant="contained" >Details</Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
    </>
  );
}
