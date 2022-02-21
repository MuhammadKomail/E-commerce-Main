import React from 'react';
import {Container, Grid,Button ,Box, Typography, Accordion, AccordionSummary, AccordionDetails, FormControl, InputLabel, Select, MenuItem, TextField} from '@mui/material';

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
import {  useNavigate } from 'react-router'
import {connect} from "react-redux"
import { useState, useEffect } from 'react';
import CardsInCart from "../component/CardsInCart"




const CartScreen = (Cart) => {
  

    const [city, setCity] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
useEffect(() => {
  let item = 0
  let price = 0

  Cart.Cart?.forEach(items => {
    item += items.qty
    
    price += items.qty * items.price
  })
  
  setTotalPrice(price)
  setTotalItem(item)


 
}, [Cart.Cart,totalPrice,totalItem,setTotalPrice,setTotalItem])


    const handleChange = (event) => {
        setCity(event.target.value);
      };

      // const getDataFromLocalStorage =()=>{
      //   const data = localStorage.getItem("items")
      //   if(data){
      //     return JSON.parse(data)
      //   }else{
      //     return []
      //   }
      // }
      // let data = getDataFromLocalStorage()
      // const [items, setItems] = React.useState([]);
      // setItems(data)
      // console.log(getDataFromLocalStorage())
  return (
      <>
        <Header />

      <Container maxWidth="xl">

      <Box>
      <br/>
   <Typography variant="h5">Shopping Cart </Typography>
 
          <p className="total-items">
            You have <span className="total-items-count">
                {totalItem}</span>{" "} items in shopping cart
          </p>  <hr/>
    </Box>

<Grid container >
    <Grid item p={2}  md={8} sm ={12}>
    <Box p={3} 
    sx={{ border: '1px Solid #DCDCDC' , backgroundColor:"#F5F5F5"}}>
<Grid container p={3} spacing={2}>
            {Cart.Cart?.map((e) => {
                return (
                    <>
                        <Grid item xs={12} md={12}>
                            <CardsInCart qty={e.qty} pic={e.img1} title={e.title} price={e.price} />
                        </Grid>
                    </>
                )
            })}
            </Grid>


    {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{ textDecoration:"bold" }}>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Cart.Cart?.map((row) => (
            <TableRow
              // key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}





        </Box>
    </Grid>
    <Grid item p={2} md={4} sm ={12}>

    <Box p={3} 
    sx={{ border: '1px Solid #DCDCDC' , backgroundColor:"#F5F5F5"}}>
            <Typography style={{ fontSize: 22 }}>Summary</Typography>
            <hr />
            <Box my={2} >
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ fontSize: 14 }}>Estimate Shipping and Tax</Typography>
                </AccordionSummary>
                <AccordionDetails>




                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel style={{ fontSize: 12 }} id="demo-simple-select-label">CITY</InputLabel>
                      <Select style={{ fontSize: 12 }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={city}
                        label="City"
                        onChange={handleChange}
                      >
                        <MenuItem style={{ fontSize: 12 }} value={"Karachi"}>Karachi</MenuItem>
                        <MenuItem style={{ fontSize: 12 }} value={"Islamabad"}>Islamabad</MenuItem>
                        <MenuItem style={{ fontSize: 12 }} value={"Lahore"}>Lahore</MenuItem>
                        <MenuItem style={{ fontSize: 12 }} value={"Multan"}>Multan</MenuItem>
                        <MenuItem style={{ fontSize: 12 }} value={"Faisalabad"}>Faisalabad</MenuItem>

                      </Select>
                    </FormControl>
                  </Box>

                  <Box py={2}>
                    <Box style={{ fontSize: 14, fontWeight: "bold" }}>  Zip Postal Code
                    </Box>
                    <Box style={{ fontSize: 14 }}
                      sx={{ width: 500, maxWidth: '100%', py: 2 }} >
                      <TextField fullWidth id="fullWidth" />
                    </Box>

                    <Box style={{ fontSize: 14, fontWeight: "bold" }}>
                      Select shipping Method
                    </Box>

                    <Box py={2} style={{ fontSize: 14 }}>

                      <input style={{ color: "blue" }}
                        type="checkbox"
                        defaultChecked={true}

                      />
                      <label m={2}> Shipping in 4-5 Days</label>
                    </Box>


                  </Box>

                </AccordionDetails>
              </Accordion>


            </Box>

            <Box style={{ fontSize: 14 }}>
              <p style={{ textAlign: "left" }}>
                Subtotal
                <span style={{ float: "right" }}>
                  Rs. 
                  {totalPrice}
                </span>
              </p>
            </Box>

            <Box my={2} style={{ fontSize: 14 }}>
              <p style={{ textAlign: "left" }}>
                Shipping(Additional Charges included)
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
                {totalPrice?totalPrice+200:totalPrice}
                </span></p>


            </Box>

            <Button type="submit" fullWidth variant="contained"
              sx={{ mt: 3 , borderRadius: 0, backgroundColor:"#000000"}}>
                  Checkout            
            </Button>
            {/* <Button className="clear-cart"
            //  onClick={clearCart}
              type="submit"
              fullWidth
              sx={{ mt: 2, mb: 2 }}>Clear Cart</Button> */}
             


        </Box>

    </Grid>

</Grid>
      </Container>
      <Footer />
      </>
  )
}
const mapStateToProps =(state)=>{
  return{
    Cart:state.shop.cartItems
  };
}


export default connect(mapStateToProps)(CartScreen)