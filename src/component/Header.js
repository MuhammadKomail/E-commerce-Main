import * as React from 'react';
import json2mq from 'json2mq';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from './Navbar';
import NavFirst from './NavFirst';
import MobileNavBar from './MobileNavBar'

export default function JavaScriptMedia() {
    const matches = useMediaQuery(
        json2mq({
            minWidth: 1100,
        }),
    );
    return (matches ? <><NavFirst /><Navbar /></> : <><MobileNavBar /></>)
}
