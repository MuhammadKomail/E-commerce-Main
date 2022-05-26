import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import Header from '../component/Header'
import Footer from '../component/Footer1'
import brand1 from '../logo/42241130_2246402682077075_8556312372531167232_n.jpg'
import brand2 from '../logo/241963555_106998885063280_872923318885144177_n.jpg'
import brand3 from '../logo/Bin-Saeed-logo.jpg'
import brand4 from '../logo/Capture.PNG'
import brand5 from '../logo/download (1).png'
import brand6 from '../logo/download (2).png'
import brand7 from '../logo/download (3).png'
import brand8 from '../logo/download (4).png'
import brand9 from '../logo/download (5).jpg'
import brand10 from '../logo/download (6).png'
import brand11 from '../logo/download (7).png'
import brand12 from '../logo/download (8).png'
import brand13 from '../logo/download (9).png'
import brand14 from '../logo/download.jpg'
import brand15 from '../logo/download.png'
import brand16 from '../logo/Firdous-Lawn-Collections-Logo.jpg'
import brand17 from '../logo/hz-letter-initial-luxurious-brand-logo-template-vector-32201455.jpg'
import brand18 from '../logo/logo.png'
import brand19 from '../logo/MTF.jpg'
import logo from '../images/logo.png'


export default function BrandSubMain() {
    return (
        <>
        <Header />
            <Box sx={{ margin: 5, display: "flex", flexWrap: "nowrap", alignItem: "center", alignSelf: "center", alignContent: "center" }}>
                <Grid container spacing={2}>
                    {/* ======================================== */}
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Surkhab" className='textBrand'>
                            <img src={logo} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Ziwayat</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Rivayat" className='textBrand'>
                            <img src={brand1} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Ziwayat</p> */}
                        </Link>
                    </Grid>

                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Yameen" className='textBrand'>
                            <img src={brand2} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Yameen</p> */}
                        </Link>
                    </Grid>

                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Saeed" className='textBrand'>
                            <img src={brand3} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Bin Saeed</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Zarif" className='textBrand'>
                            <img src={brand4} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Zarif</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Borque" className='textBrand'>
                            <img src={brand5} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Boroque</p> */}
                        </Link>
                    </Grid>

                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Jazmin" className='textBrand'>
                            <img src={brand6} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Jazmin</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Tawakal" className='textBrand'>
                            <img src={brand7} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">Tawakal</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Zohaib" className='textBrand'>
                            <img src={brand8} width="150rem" alt='images' />
                            {/* <p className="brandLogoText"></p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Khadija" className='textBrand'>
                            <img src={brand9} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">aifa</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Adam" className='textBrand'>
                            <img src={brand10} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">al-karim</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Rashid" className='textBrand'>
                            <img src={brand11} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">azure</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Riyaz" className='textBrand'>
                            <img src={brand12} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">azalea</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Grace" className='textBrand'>
                            <img src={brand13} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">peridot</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Johra" className='textBrand'>
                            <img src={brand14} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">aifa</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Vs" className='textBrand'>
                            <img src={brand15} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">al-karim</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Firdous" className='textBrand'>
                            <img src={brand16} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">aifa</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Hz" className='textBrand'>
                            <img src={brand17} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">al-karim</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Pasha" className='textBrand'>
                            <img src={brand18} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">al-karim</p> */}
                        </Link>
                    </Grid>
                    <Grid className="brandLogoCard" item xl={2} xs={6}>
                        <Link href="/Mt" className='textBrand'>
                            <img src={brand19} width="150rem" alt='images' />
                            {/* <p className="brandLogoText">al-karim</p> */}
                        </Link>
                    </Grid>
                    {/* ======================================== */}

                </Grid>
            </Box>
            <Footer />
        </>
    )
}
