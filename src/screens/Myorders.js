import React from 'react'
import { Container, Alert } from '@mui/material'

let item = []

const Myorders = () => {
  if (item.length === 0) {
    return (
      <>

        <Container height="400px" alignitem="center" maxWidth="lg" >
          <Alert severity="warning">You have placed no orders</Alert>
        </Container>
      </>
    );
  }
  return (
    <div>Myorders</div>
  )

}

export default Myorders