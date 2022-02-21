import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material'
import Header from '../component/Header'
import Footer from '../component/Footer1'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  useNavigate } from 'react-router'
import axios from 'axios'

const theme = createTheme();


const Login = () => {
    const navigate = useNavigate();
    const [checkuser, setCheckuser] = React.useState({
        email: '',
        password: ''
    })

    function setEmailAddress(evt) {
        const value = evt.target.value;
        setCheckuser({
            ...checkuser,
            email: value
        });
    }

    function setPassword(evt) {
        const value = evt.target.value;
        setCheckuser({
            ...checkuser,
            password: value
        });
    }

    const [error,setError] = React.useState()
    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkuser),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            localStorage.setItem('id', data.id)
            console.log('Login successful')
            navigate("/Accountinfo");
        } else {
            setError('Please check your username and password')
        }
    }


    const Navigate = useNavigate()
    const NavigatingTosignup = () => {
        Navigate("/signup")
    }
    return <>
        <Header />
        <Container maxWidth="lg">
            <Typography m={2} style={{ color: "gray", fontSize: 30 }}>JOIN US</Typography>
            <hr style={{ borderWidth: 2, borderColor: "black" }} />
            <Grid container maxWidth="lg" spacing={2}>
                <Grid item md={6} sm={12} >
                    <h3>Registered Customer</h3>
                    <h3 className='error'>{error}</h3>
                    <Typography>If you have an account, sign in with your email address.</Typography>

                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box pr={2} >
                            <Box component="form" noValidate >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={setEmailAddress}
                                    value={checkuser.email}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={setPassword}
                                    value={checkuser.password}
                                />
                                <Button style={{ background: "black", borderRadius: 0 }}
                                    onClick={loginUser}
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                            </Box>
                        </Box>
                    </ThemeProvider>

                </Grid>

                <Grid item md={6} sm={12}>
                    <h3>New Customer</h3>
                    <Typography>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.

                    </Typography>
                    <Button onClick={NavigatingTosignup} style={{ background: "black", borderRadius: 0 }}
                        type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} >
                        Create an Account
                    </Button>

                </Grid>

            </Grid>
        </Container>

        <Footer />

    </>;
};

export default Login;
