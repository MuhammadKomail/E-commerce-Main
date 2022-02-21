import React from 'react';
import Link from '@mui/material/Link';
import logo from '../images/bacola-logo.png'
import b1 from '../images/b1.png'

export default function dropdownCard() {
    return (
        <>
            <div className='dropdownMain'>
                <div className='dropdownCardMainBrand'>
                    <div className='dropdownCardMainFirst'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <div className='dropdownCardMainFirstSub'>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                            <div className='b1'><img src={b1} width='50px' /><Link href="#" className='dropDownLinkSub' sx={{ marginTop: 1, marginLeft: 2 }}> AABYAAN</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
