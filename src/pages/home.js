import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const {push} = useHistory()
  return(
  <div className='home-con'>
    <h1 className='center-text'>
    Welcome To <bold>FINUS</bold>
    </h1>
    <h1 className='center-text'>Here you can FINd Ur Supervisor for better Ph.D career!</h1>
    <div className='container'>
    <Button classes={{contained: 'main-btn'}} variant="contained" onClick={() => push('/recommendation')}>Find SUPERVISOR now</Button>
    </div>
  </div>
)}