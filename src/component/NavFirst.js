import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from '@mui/material';
import logo from '../images/logo.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from "react-router";
import { Link as LinkRoute } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_PRICE } from '../redux/shoppingCart/shopping-cart-actions';
import { useEffect, useState } from 'react';


function NavFirst() {
    const StoredcartData = JSON.parse(localStorage.getItem('myCartData'))
    const {cart,loading} = useSelector(state=>state.cartDataReducer)
    


    const Navigate = useNavigate()
    const dispatch = useDispatch()


    const NavigatingTologin = () => {
        Navigate("/login")
    }

    const NavigatingToCartScreen = () => {
        Navigate("/CartScreen");
    }

    // useEffect(() => {
    //     if (StoredcartData) {
    //         if (StoredcartData.length !== 0) {
    //             setCart(StoredcartData)
    //         } else {
    //             setCart([])
    //         }
    //     } else {
    //         setCart([])
    //     }
    // }, [StoredcartData])

    return (
        <>
            <form>
                <div className='firstNavMain'>
                    <div className='firstNavMainFirst'>

                    </div>
                    <div className='firstNavMain'>
                        <div>
                            <Link component={LinkRoute} to="/"><img src={logo} width="110rem" /></Link>
                        </div>
                    </div>
                    <div className='firstNavMainLast'>
                        <div onClick={NavigatingTologin} className='firstNavIcon'>
                            <Link className='personIcon' href="#" ><PersonOutlinedIcon /></Link>
                        </div>
                        <div onClick={NavigatingToCartScreen} className='firstNavIcon'>
                            <Link component={LinkRoute} to="/CartScreen" className='personIcon' sx={{ paddingLeft: 1 }}  ><LocalMallIcon /></Link>{cart.length} items
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}



export default NavFirst;