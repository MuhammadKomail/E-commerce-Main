import * as React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer1'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as LinkRoute } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router'


const theme = createTheme();



const Signup = () => {
    const [err, setErr] = React.useState();
    const navigate = useNavigate();
    const [createuser, setCreateuser] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    function setFirstName(evt) {
        const value = evt.target.value;
        setCreateuser({
            ...createuser,
            firstName: value
        });
    }
    function setLastName(evt) {
        const value = evt.target.value;
        setCreateuser({
            ...createuser,
            lastName: value
        });
    }
    function setEmail(evt) {
        const value = evt.target.value;
        setCreateuser({
            ...createuser,
            email: value
        });
    }
    function setPassword(evt) {
        const value = evt.target.value;
        setCreateuser({
            ...createuser,
            password: value
        });
    }

    // ==========================================
    async function registerUser(event) {
        const response = await fetch('https://surkhab.herokuapp.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(createuser),
        })

        const data = await response.json()
        console.log(data)
        if (data.status === 'ok') {
            navigate('/login')
            setErr("SuccessFull")
        }
    }
    // ==========================================

    return (
        <>
            <Header />
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box component="form" sx={{ mt: 3 }}>

                    <Container component="main" maxWidth="lg" >
                        <Typography m={2} style={{ color: "gray", fontSize: 30 }}>JOIN US</Typography>
                        <hr style={{ borderWidth: 2, borderColor: "black" }} />

                        <Grid container spacing={6} >
                            <Grid item xs={12} md={6} >

                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    {err}
                                </Typography>
                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    Personal Information
                                </Typography>


                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    sx={{ my: 2 }}
                                    onChange={setFirstName}
                                    value={createuser.firstName}
                                />

                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    sx={{ my: 2 }}
                                    onChange={setLastName}
                                    value={createuser.lastName}
                                />

                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                    Sign-in Information
                                </Typography>
                                <TextField
                                    sx={{ my: 2 }}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={setEmail}
                                    value={createuser.email}
                                />

                                <TextField
                                    sx={{ my: 2 }}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={setPassword}
                                    value={createuser.password}
                                />
                                <Button style={{ background: "black", borderRadius: 0 }} fullWidth onClick={registerUser}
                                    variant="contained" sx={{ mt: 2, mb: 2, p: 1 }} >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Link component={LinkRoute} to="/login" href="#" variant="body2" >
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </ThemeProvider>

            <Footer />
        </>
    )
}

export default Signup