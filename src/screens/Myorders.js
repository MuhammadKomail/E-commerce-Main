import React from 'react'
import { Container, Alert, Grid } from '@mui/material'
import axios from 'axios'
import NoDataFound from './NoDataFound'
import Loader from '../component/Loader'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Myorders = () => {
  const [loading, setLoading] = React.useState(true)
  const [formData, setFormData] = React.useState([])
  const StoredDataOfUserId = localStorage.getItem('id')
  let filterFormData = formData.length == 0 ? 0 : formData.filter((fil) => fil.idOfUser == StoredDataOfUserId)

  React.useEffect(() => {
    axios.get('https://surkhab.herokuapp.com/formData/get')
      .then(res => {
        setLoading(false)
        setFormData(res.data)
      })
  }, [filterFormData])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Order Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          {loading ? <Loader /> : filterFormData && filterFormData.length !== 0 ? filterFormData.map((e, i) => {
            return (
              <>
                <TableBody>
                  <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{e.firstName}</TableCell>
                    <TableCell>{e.City}</TableCell>
                    <TableCell>{e.Address}</TableCell>
                    <TableCell>{e.orderAmount}</TableCell>
                    <TableCell>{e.status}</TableCell>
                  </TableRow>
                  {/* ))} */}
                </TableBody>
              </>
            )
          }) : <NoDataFound />}
        </Table>
      </TableContainer>

    </>

  )
}

export default Myorders