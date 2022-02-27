import React from 'react';
import { Container, Grid, Box, Link, Button, TextField, useMediaQuery, useTheme, Typography } from '@mui/material';
import SimpleAccordion from './DropdownFooter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';



function Footer1() {
    const theme = useTheme();
    const isMatched = useMediaQuery(theme.breakpoints.down('md'));
    // console.log(isMatched)
    return (
        <footer className="footer">
            <Container maxWidth="xl" style={{ background: "black", color: "white", fontSize: 16 }}>
                {
                    isMatched ? (
                        <>
                            <SimpleAccordion />
                        </>
                    ) : (
                        <>
                            <Box sx={{ flexGrow: 1, p: 6 }}>
                                <Grid container spacing={3} sx={{ pl: 6 }}>
                                    <Grid item item xs={12} sm={12} md={5}>
                                        <Box>Phone: +92 312 0000000</Box>
                                        <Box sx={{ mt: 3 }}>Email: care@example.com</Box>
                                        <Box sx={{ mt: 3 }}>Customer Care:<br />
                                            Monday - Saturday | 09:00 AM - 06:00 PM</Box>
                                        <Box sx={{ mt: 3 }}>
                                            <Grid alignItems="center">
                                                <Link href="/" color="inherit" underline="none">  <FacebookIcon /> </Link>
                                                <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> <InstagramIcon /> </Link>
                                                <Link href="/" color="inherit" underline="none"> <WhatsappRoundedIcon /> </Link>
                                                <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> <YouTubeIcon /> </Link>
                                            </Grid>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Box style={{ fontSize: 18, fontWeight: 'bold' }}>Information</Box>
                                        <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Home</Link></Box>
                                        <Box sx={{ mt: 1 }}><Link href="/Men" color="inherit" underline="none"> Men</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/Women" color="inherit" underline="none"> Women</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/Childrens" color="inherit" underline="none"> Kid</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/NewArrival" color="inherit" underline="none"> New Arrival</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/Summer" color="inherit" underline="none"> Summer Collection</Link></Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Box style={{ fontSize: 18, fontWeight: 'bold' }}>Fabrics</Box>
                                        <Box sx={{ mt: 1 }}><Link href="/FabricCambric" color="inherit" underline="none"> Cambric</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/FabricLinen" color="inherit" underline="none"> Linen</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/FabricChiffon" color="inherit" underline="none"> Chiffon</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/FabricBanarsi" color="inherit" underline="none"> Banarsi</Link></Box>
                                        <Box sx={{ mt: 3 }}><Link href="/FabricKhaddar" color="inherit" underline="none"> Khaddar</Link></Box>
                                        <Box sx={{ mt: 3, mb: 3 }}><Link href="/FabricVelvet" color="inherit" underline="none">Velvet</Link></Box>
                                        <Box sx={{ mt: 3 }} sx={{ display: "flex", flexDirection: "row" }}>
                                            <TextField sx={{ display: "inline-block" }} size="small" placeholder='Enter Your Email' style={{ background: "white" }} />
                                            <Button variant="contained" color="success" sx={{ display: "inline-block" }} style={{ borderRadius: 0, padding: 10, fontSize: 12, overflow: "hidden" }}>Subscribe</Button></Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    )
                }


                <Box textAlign="center" borderTop={1} pt={{ xs: 5, sm: 3, md: 3 }} pb={{ xs: 5, sm: 3, md: 3 }}> Copyright &reg; Website {(new Date().getFullYear())}   - All rights reserved. </Box>
            </Container>


        </footer>
    )
}
export default Footer1;