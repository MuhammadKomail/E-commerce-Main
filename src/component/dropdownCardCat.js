import React from 'react';
import Link from '@mui/material/Link';
import logo from '../images/logo.png'


export default function dropdownCard() {
    return (
        <>
            <div className='dropdownMain'>
                <div className='dropdownCardMain'>
                    <div className='dropdownCardMainFirst'>
                        <Link href="#" className='dropDownLink'>MEN</Link>
                        <div className='dropdownCardMainFirstSub'>
                            <Link href="#" className='dropDownLinkSub'>PRINTED SHIRT</Link>
                            <Link href="#" className='dropDownLinkSub'>EMBROIDERED</Link>
                            <Link href="#" className='dropDownLinkSub'>SHIRT</Link>
                            <Link href="#" className='dropDownLinkSub'>DUPATTA</Link>
                            <Link href="#" className='dropDownLinkSub'>2 PIECE</Link>
                            <Link href="#" className='dropDownLinkSub'>3 PIECE</Link>
                            <Link href="#" className='dropDownLinkSub'>TROUSERS</Link>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <Link href="#" className='dropDownLink'>WOMEN</Link>
                        <div className='dropdownCardMainFirstSub'>
                            <Link href="#" className='dropDownLinkSub'>PASHA</Link>
                            <Link href="#" className='dropDownLinkSub'>MELANGE</Link>
                            <Link href="#" className='dropDownLinkSub'>GRACE</Link>
                            <Link href="#" className='dropDownLinkSub'>AHMAD FABRICS</Link>
                            <Link href="#" className='dropDownLinkSub'>BIN YAMEEN</Link>
                        </div>
                    </div>
                    <div className='dropdownCardMainThird'>
                        <img src={logo} width="200px" />
                    </div>
                </div>
            </div>
        </>
    )
}
