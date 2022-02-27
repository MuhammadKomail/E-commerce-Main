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
                                    <Link href="/" color="inherit" underline="none">  <FacebookIcon /> </Link>
                                    <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> <InstagramIcon /> </Link>
                                    <Link href="/" color="inherit" underline="none"> <WhatsappRoundedIcon /> </Link>
                                    <Link href="/" color="inherit" underline="none" sx={{ mx: 1 }}> <YouTubeIcon /> </Link>
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
                            <Typography>Information</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ mt: 1 }}><Link href="/" color="inherit" underline="none"> Home</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/Men" color="inherit" underline="none"> Men</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/Women" color="inherit" underline="none"> Women</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/Childrens" color="inherit" underline="none"> Kid</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/NewArrival" color="inherit" underline="none"> New Arrival</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/Summer" color="inherit" underline="none"> Summer Collection</Link></Box>

                        </AccordionDetails>
                    </Accordion>

                    <Accordion style={{ background: "black", color: "white", fontSize: 16 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: 26 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography> Fabrics</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ mt: 1 }}><Link href="/FabricCambric" color="inherit" underline="none"> Cambric</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/FabricLinen" color="inherit" underline="none"> Linen</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/FabricChiffon" color="inherit" underline="none"> Chiffon</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/FabricBanarsi" color="inherit" underline="none"> Banarsi</Link></Box>
                            <Box sx={{ mt: 3 }}><Link href="/FabricKhaddar" color="inherit" underline="none"> Khaddar</Link></Box>
                            <Box sx={{ mt: 3, mb: 3 }}><Link href="/FabricVelvet" color="inherit" underline="none">Velvet</Link></Box>
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
