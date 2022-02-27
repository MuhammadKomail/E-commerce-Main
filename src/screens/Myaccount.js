import { Grid, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'
import Typography from '@mui/material/Typography';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';

const Myaccount = () => {
    const Navigate = useNavigate()
    const [data, setData] = React.useState()

    useEffect(() => {
        const id = localStorage.getItem('id')
        axios.get('https://surkhab.herokuapp.com/' + id)
            .then(res => setData(res.data))
        console.log(data)
    }, [])
    // ==================================================
    return (
        <>
            <Grid container p={1} >
                <Grid item xs={12} md={6} >

                    <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                        Account Information
                    </Typography>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        fullWidth
                        id="firstName"
                        sx={{ my: 2 }}
                        disabled
                        value={data == null?'user Name':data.firstName}
                    />

                    <TextField
                        fullWidth
                        id="lastName"
                        autoComplete="family-name"
                        sx={{ my: 2 }}
                        disabled
                        // value={data.lastName}
                        value={data == null?'user Name':data.lastName}
                    />
                    <TextField
                        fullWidth
                        id="Email"
                        name="Email"
                        autoComplete="family-name"
                        sx={{ my: 2 }}
                        disabled
                        // value={data.email}
                        value={data == null?'user Name':data.email}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Myaccount