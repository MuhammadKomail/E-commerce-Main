import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Footer from '../component/Footer1'
import Header from '../component/Header'
import { useLocation } from 'react-router'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from 'react';
import { connect } from "react-redux"
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { addCartData } from '../redux/shoppingCart/shopping-cart-actions';
import swal from 'sweetalert';

function CardInsideView() {

  const location = useLocation()
  console.log(location.state)

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function addToCart() {
    console.log("Add To Cart")
    addCartData(dispatch, location.state._id)
    swal({
      title: "Successfully!",
      text: "Your Item Has Been Added To Your Cart list!",
      icon: "success",
      button: "Ok!",
    });
  }

  React.useEffect(() => {
    console.log('Working useEffect');
    if (location.state == null) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header />

      <Box sx={{ margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} xl={3}>
            <div className='rightView'>
              <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div>
                  {location.state == null ? null : <img alt="img" src={location.state.imageUrl1} />}
                </div>
                <div>
                  {location.state == null ? null : <img alt="img" src={location.state.imageUrl2} />}
                </div>

              </Carousel>
              {/* <ImageClicker pic1={location.state.img1} pic2={location.state.img2}/> */}
            </div>
          </Grid>
          <Grid item xs={12} sm={8} xl={5}>
            <div className='leftView'>
              <div className='leftViewFirst'>
                {location.state == null ? null : location.state.title}
              </div>
              <div className='leftViewSecond'>
                {location.state == null ? null : (location.state.fabric == '' ? null : `Fabric:` + location.state.fabric)}
              </div>
              <div className='leftViewThird'>
                <b> Details:</b> <br />
                <p>{location.state == null ? null : location.state.description}</p>
              </div>
              <div className='leftViewFourth'>
                {location.state == null ? null : (location.state.discountPrice == null ? `PKR ${location.state.orignalPrice}` : <strike>PKR {location.state.orignalPrice}</strike>)}
              </div>
              {location.state == null ? null : (location.state.discountPrice == null ? null : <div className='leftViewFifth'>As low as</div>)}
              <div className='leftViewSixth'>
                {location.state == null ? null : (location.state.discountPrice == null ? null : <div className='leftViewSixthFirst'>{location.state.discountPrice}</div>)}
                <div className='leftViewSixthSecond'>Availability: {location.state == null ? null : (location.state.availability)}</div>
              </div>
              <div className='leftViewSeven'>
                {location.state == null ? null : (location.state.availability != 'Available' ? <p>Sorry The Product is Not Available</p> : <Button className='leftViewSevenBtn' onClick={addToCart} variant="contained">Add to Cart</Button>)}
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}



export default CardInsideView
