import React from 'react';
import Link from '@mui/material/Link';
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';


export default function dropdownCard() {

    return (
        <>
            <div className='dropdownMain'>
                <div className='dropdownCardMain'>
                    <div className='dropdownCardMainFirst'>
                        <Link href="/Women" className='dropDownLink'>WOMEN</Link>
                        <div className='dropdownCardMainFirstSub'>
                            <Link href="/WprintedShirt" className='dropDownLinkSub'>PRINTED SHIRT</Link>
                            <Link href="/WEmbro" className='dropDownLinkSub'>EMBROIDERED</Link>
                            <Link href="/Wshirt" className='dropDownLinkSub'>SHIRT</Link>
                            <Link href="/Wduppata" className='dropDownLinkSub'>DUPATTA</Link>
                            <Link href="/W2piece" className='dropDownLinkSub'>2 PIECE</Link>
                            <Link href="/W3piece" className='dropDownLinkSub'>3 PIECE</Link>
                            <Link href="/WEmbro" className='dropDownLinkSub'>TROUSERS</Link>
                        </div>
                    </div>
                    <div className='dropdownCardMainSecond'>
                        <Link href="/Men" className='dropDownLink'>MEN</Link>
                        <div className='dropdownCardMainFirstSub'>
                            <Link href="/Mpasha" className='dropDownLinkSub'>PASHA</Link>
                            <Link href="/MELANGE" className='dropDownLinkSub'>MELANGE</Link>
                            <Link href="/Mgrace" className='dropDownLinkSub'>GRACE</Link>
                            <Link href="/Mahmed" className='dropDownLinkSub'>AHMAD FABRICS</Link>
                            <Link href="/Myameen" className='dropDownLinkSub'>BIN YAMEEN</Link>
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
