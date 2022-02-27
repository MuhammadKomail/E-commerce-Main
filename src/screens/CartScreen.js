import React from 'react';
import { Container, Grid, Button, Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../component/Header'
import Footer from '../component/Footer1'
import { connect } from "react-redux"
import { useState, useEffect } from 'react';
import CardsInCart from "../component/CardsInCart"
import { CartListData } from '../component/CartListData';
import Loader from '../component/Loader'
import NoDataFound from './NoDataFound';
import { useNavigate } from 'react-router'


const CartScreen = () => {



  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [data, setData] = React.useState([]);
  const StoredcartData = JSON.parse(localStorage.getItem('myCartData'))


  useEffect(() => {
    axios.get('https://surkhab.herokuapp.com/cards/')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })

  }, [])


  let [checkData, setCheckData] = React.useState([])

  useEffect(() => {
    if (StoredcartData) {
      if (StoredcartData.length !== 0) {
        setCart(StoredcartData)
      } else {
        setCart([])
      }
    } else {
      setCart([])
    }
    // console.log(cart)

  }, [StoredcartData])
  useEffect(() => {
    if (StoredcartData) {
      if (StoredcartData.length !== 0) {
        setCart(StoredcartData)
      } else {
        setCart([])
      }
    } else {
      setCart([])
    }
    // console.log(cart)
  }, [])

  const [findVal, setFindVal] = useState({})
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    let amount = 0
    if (cart && cart.lenth !== 0) {
      if (data && data.length !== 0) {
        cart.forEach(e => {
          data.find((element) => {
            if (element._id === e.id) {
              amount = (e.qty * (element.discountPrice ? element.discountPrice : element.orignalPrice)) + amount
            }
          })
        });
      }
      setTotalAmount(amount)
    } else {
      setCart([])
    }
  }, [cart])

  const [sendingData, setSendingData] = useState([])

  const navigate = useNavigate();
  function checkOut() {
    if (!loading) {
      if (StoredcartData == null) {
        console.log('No data Found')
      } else {
        console.log('Data Found')
        console.log(StoredcartData)
        navigate('/mainOrderForm', {state: totalAmount})
      }
    }
  }


  return (
    <>
      <Header />

      <Container maxWidth="xl">
        <Box>
          <br />
          <Typography variant="h5">Shopping Cart </Typography>

          <p className="total-items">
            You have <span className="total-items-count">
              {cart.length}</span>{" "} items in shopping cart
          </p>  <hr />
        </Box>

        <Grid container >
          <Grid item p={2} md={8} sm={12}>
            <Box p={3}
              sx={{ border: '1px Solid #DCDCDC', backgroundColor: "#F5F5F5" }}>
              {loading ? <Loader /> : cart && cart.length !== 0 ? <Grid container p={3} spacing={2}><Grid item xs={12} md={12}>
                {cart.map((e) => <CartListData id={e.id} qty={e.qty} allData={data} />)}
              </Grid></Grid> : <NoDataFound />}

            </Box>
          </Grid>
          <Grid item p={2} md={4} sm={12} xs={12}>
            <Box p={3}
              sx={{ border: '1px Solid #DCDCDC', backgroundColor: "#F5F5F5" }}>
              <Typography style={{ fontSize: 22 }}>Summary</Typography>
              <hr />
              <Box style={{ fontSize: 14 }}>
                <p style={{ textAlign: "left" }}>
                  Subtotal
                  <span style={{ float: "right" }}>
                    Rs.{totalAmount}
                  </span>
                </p>
              </Box>

              <Box my={2} style={{ fontSize: 14 }}>
                <p style={{ textAlign: "left" }}>
                  Shipping
                  <span style={{ float: "right" }}>
                    Rs. 200
                  </span>
                </p>
              </Box>
              <hr />
              <Box my={2}>
                <p style={{ textAlign: "left", fontSize: 18, fontWeight: "bold" }}>
                  Order Total
                  <span style={{ float: "right" }}> Rs.
                    {totalAmount ? totalAmount + 200 : totalAmount}
                  </span></p>
              </Box>
              <Button type="submit" fullWidth variant="contained"
                onClick={checkOut}
                sx={{ mt: 3, borderRadius: 0, backgroundColor: "#000000" }}>
                Checkout
              </Button>
            </Box>

          </Grid>

        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default CartScreen;