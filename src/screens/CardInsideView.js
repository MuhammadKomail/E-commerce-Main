import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import ImageClicker from '../component/ImageClicker';
import Footer from '../component/Footer1'
import Header from '../component/Header'
import { useLocation } from 'react-router'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import {connect} from "react-redux"
import {addToCart} from "../redux/shopping/shopping-action"

function CardInsideView(addToCart) {
   const location = useLocation()
 
  // const AddItemsIntoCart =()=>{
  // let productsString = localStorage.getItem('items')
  // let products = []
  // if(productsString){
  //     products = JSON.parse(productsString)
  // } 
  // products.concat([location.state])
  // localStorage.setItem('items', JSON.stringify(products))}
  
  // const [CartItems, setCartItems] = useState([])
  // const AddItemsIntoCart =()=>{
  //   console.log("working")
  //   setCartItems([...CartItems,location.state]) 
  //   // setCartItems([...localStorage.getItem("items"),location.state]) 
  // }

  // useEffect(()=>{
  //   if(CartItems.length){

  //     localStorage.setItem("items",JSON.stringify(CartItems))
  //   }
  // },[CartItems])  

  return (
    <>
      <Header />

      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} xl={3}>
            <div className='rightView'>
            <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div>
                    <img alt="img" src={location.state.img1} />
                </div>
                <div>
                    <img alt="img" src={location.state.img2}/>
                </div>
                
            </Carousel>
              {/* <ImageClicker pic1={location.state.img1} pic2={location.state.img2}/> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={8} xl={5}>
            <div className='leftView'>
              <div className='leftViewFirst'>
                {location.state.title}
              </div>
              <div className='leftViewSecond'>
                Fabric: Korean Nidha
              </div>
              <div className='leftViewThird'>
                <b> Details:</b> <br />
                This abaya features front closed with belt on bodice can be used for daily and casual wear navy blue is
                inn these days with black hijab constructed on pure Korean nidha fabric comes along with pure Korean chiffon Sheila.
              </div>
              <div className='leftViewFourth'>
                <strike>PKR5,200</strike>
              </div>
              <div className='leftViewFifth'>
                As low as
              </div>
              <div className='leftViewSixth'>
                <div className='leftViewSixthFirst'>{location.state.price}</div>
                <div className='leftViewSixthSecond'>Availability: In stock</div>
              </div>
              <div className='leftViewSeven'>
                <Button onClick = {()=>addToCart.addToCart(location.state.id)}className='leftViewSevenBtn' variant="contained">Add to Cart</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}

const mapDispatchToProps =(dispatch)=>{
  return{
  addToCart : (id)=> dispatch(addToCart(id))
  }

}

export default connect(null,mapDispatchToProps)(CardInsideView)
