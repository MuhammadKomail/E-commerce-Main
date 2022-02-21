import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Link as LinkRoute } from "react-router-dom";
import { Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShippingAddress from '../component/ShippingAddress'
import ShippingMethod from '../component/ShippingMethod';
import PaymentMethod from '../component/PaymentMethod'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';


export default function MainOrderForm() {
    const Navigate = useNavigate()



    return (
        <>
            <div className='back'>
                <Link component={LinkRoute} to="/" className="back"> <ArrowBackIosNewIcon classname="backIcon" />  Back </Link>
            </div>
            <Box sx={{ margin: 5, display: "flex", flexWrap: "nowrap", alignItem: "center", alignSelf: "center", alignContent: "center" }}>
                <Grid container spacing={2}>
                    {/* ======================================== */}
                    <Grid className="" item xl={4}>
                        <ShippingAddress />
                    </Grid>
                    <Grid className="" item xl={8}>
                        <Grid container spacing={2}>
                            <Grid className="" item xl={6}>
                                <ShippingMethod />
                            </Grid>
                            <Grid className="" item xl={6}>
                                <PaymentMethod />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <div className='center'>
                <Button variant="contained" classname="submitBtn" sx={{backgroundColor:"black"}}>Submit</Button>
            </div>
        </>
    )
}
