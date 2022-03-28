import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import Dummy from '../assets/avatar.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function createData(pic, details) {
  return { pic, details };
}

const rows = [
  createData(Dummy, 6.0),
  createData(Dummy, 9.0),
  createData(Dummy, 16.0),
  createData(Dummy, 3.7),
  createData(Dummy, 16.0),
];

export default function BasicTable() {
  const {push} = useHistory()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">Professor's Picture</TableCell>
            <TableCell align="right">Professor's Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ pic, details }, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align='center' scope="row">
                <b>{i + 1}</b>
              </TableCell>
              <TableCell align="center"><img src={pic} className="pic" alt="" /></TableCell>
              <TableCell align="left">
                <div className='table-details-con'>
                  <div className='details-con-small'>
                    Name: abc
                    <br />
                    Email: abc@abc.com
                    <br />
                    Interests: abc, def, ghi
                  </div>
                  <div>
                    <Button classes={{ contained: 'main-btn' }} onClick={() => push(`/profDetails/${i+1}`)} style={{marginLeft: '15px'}} variant="contained" >Details</Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
