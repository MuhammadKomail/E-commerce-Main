import React from 'react';
import Link from '@mui/material/Link';
import logo from '../images/bacola-logo.png'
import b1 from '../images/b1.png'
import brand1 from '../logo/42241130_2246402682077075_8556312372531167232_n.jpg'
import brand2 from '../logo/241963555_106998885063280_872923318885144177_n.jpg'
import brand3 from '../logo/Bin-Saeed-logo.jpg'
import brand4 from '../logo/Capture.PNG'
import brand5 from '../logo/download (1).png'
import brand6 from '../logo/download (2).png'
import brand7 from '../logo/download (3).png'
import brand8 from '../logo/download (4).png'
import brand9 from '../logo/download (5).png'
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

export default function dropdownCard() {
    return (
        <>
            <div className='dropdownMain'>
                <div className='dropdownCardMainBrand'>
                    <div className='dropdownCardMainFirst'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={brand1} width='50px' /><Link href="/Rivayat" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Rivayat</Link></div>
                            <div className='b1'><img src={brand2} width='50px' /><Link href="/Yameen" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> Yameen</Link></div>
                            <div className='b1'><img src={brand3} width='50px' /><Link href="/Saeed" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Saeed </Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={brand4} width='50px' /><Link href="/Zarif" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Zarif</Link></div>
                            <div className='b1'><img src={brand5} width='50px' /><Link href="/Borque" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Borque</Link></div>
                            <div className='b1'><img src={brand6} width='50px' /><Link href="/Jazmin" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Jazmin</Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={brand7} width='50px' /><Link href="/Tawakal" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> Tawakal</Link></div>
                            <div className='b1'><img src={brand8} width='50px' /><Link href="/Zohaib" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Zohaib </Link></div>
                            <div className='b1'><img src={brand9} width='50px' /><Link href="/Khadija" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> Khadija</Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={brand10} width='50px' /><Link href="/Adam" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Adam </Link></div>
                            <div className='b1'><img src={brand11} width='50px' /><Link href="/Rashid" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}>Rashid </Link></div>
                            <div className='b1'><img src={brand12} width='50px' /><Link href="/Riyaz" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> Riyaz</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
