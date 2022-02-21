import React from 'react'
// import Header from './Header'
import Navbar from './Navbar'
// import Card from './Card'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

export default function Dashboard() {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><Navbar /></Item>
        </Grid>
      </Grid>
    </>
  )
}


