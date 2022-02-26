import React from 'react'
import Cards from "../../component/Cards"
import DropDown from '../../component/DropDown';
import Grid from '@mui/material/Grid';
import Header from '../../component/Header'
import Footer from '../../component/Footer1'
import { useEffect } from 'react';
import axios from 'axios';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from 'react-loader-spinner'
import Loader from '../../component/Loader';
import { useNavigate } from 'react-router'
import { addCartData } from '../../redux/shoppingCart/shopping-cart-actions';
import { useDispatch, useSelector } from 'react-redux';
import NoDataFound from '../NoDataFound';
import swal from 'sweetalert';

function CategoryMain() {
    const [options, setOptions] = React.useState("");
    const [data, setData] = React.useState([]);

    const state = useSelector(state => state)



    useEffect(() => {
        console.log(state)
    }, [])


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (event) => {
        let op = event.target.value
        setOptions(event.target.value);
        console.log(options)
        return;
    };

    const viewDetails = (id) => {
        navigate("/CardInsideView", { state: id });
    }
    const [loader, setLoader] = React.useState(true)

    const addToCard = (e) => {
        console.log("Add To Cart")
        addCartData(dispatch, e._id)
        swal({
            title: "Successfully!",
            text: "Your Item Has Been Added To Your Cart list!",
            icon: "success",
            button: "Ok!",
          });
    }
    axios.get('http://localhost:5000/cards/')
        .then((res) => {
            setData(res.data)
            setLoader(false)
        })

    let filterData = data.length == 0 ? 0 : data.filter((fil) => fil.subCategory == 'PRINTED SHIRT')
    return (
        <>
            <Header />
            <Grid container p={3} spacing={1}>
                {loader ? <Grid item xs={12} md={12}><Loader /> </Grid> : filterData && filterData.length !== 0 ? filterData.map((e) => {
                    return (
                        <>
                            <Grid item xs={6} md={3} key={e._id}>
                                <Cards onClick1={() => addToCard(e)} onClick={() => viewDetails(e)} notnew={true} pic={e.imageUrl1} pic2={e.imageUrl2} title={e.title} price={e.orignalPrice} />
                            </Grid>
                        </>
                    )
                }) : <NoDataFound />}
            </Grid>
            <Footer />

        </>

    )
}

export default CategoryMain