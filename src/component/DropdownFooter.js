import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Grid, Box, Link, Button, TextField, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappRoundedIcon from '@mui/icons-material/WhatsappRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SimpleAccordion() {
    return (
        <div>
            <Container style={{ background: "black", color: "white", fontSize: 16 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Accordion style={{ background: "black", color: "white", fontSize: 16 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: 26 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> Customer Care</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>Phone: +92 312 0000000</Box>
                            <Box sx={{ mt: 3 }}>Email: care@example.com</Box>
                            <Box sx={{ mt: 3 }}>Customer Care:<br />
                                Monday - Saturday | 09:00 AM - 06:00 PM</Box>
                            <Box sx={{ mt: 3 }}>
                                <Grid alignItems="center">
                                    <Link href="/" color="inherit" underline="none">  Facebook </Link>
                                    <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> Instagram </Link>
                                    <Link href="/" color="inherit" underline="none"> Whatsapp </Link>
                                    <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> Youtube </Link>
                                </Grid>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ background: "black", color: "white", fontSize: 16 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: 26 }} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>About us</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ mt: 1 }}><Link href="/" color="inherit" underline="none"> Gallery</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Shipping and Handling</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> About Us</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Gift Cards</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Payments</Link></Box>

                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "black", color: "white", fontSize: 16 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: 26 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> Stay Connected</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ mt: 1 }}><Link href="/" color="inherit" underline="none"> Gallery</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Contac Us</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Privacy Policy</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Return & Exchange</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/" color="inherit" underline="none"> Terms & conditions</Link></Box>
                            <Box sx={{ mt: 3, mb: 3 }}><Link href="/" color="inherit" underline="none">FAQs</Link></Box>
                            <Box sx={{ mt: 3 }} sx={{ display: "flex", flexDirection: "row" }}>
                                <TextField sx={{ display: "inline-block" }} size="small" label="Enter you email" style={{ background: "white" }} />
                                <Button variant="contained" color="success" sx={{ display: "inline-block" }} style={{ borderRadius: 0, padding: 10, fontSize: 12, overflow: "hidden" }}>Subscribe</Button></Box>

                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </div >
    );
}
