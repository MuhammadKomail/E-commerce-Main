import React, { useState } from 'react'
import Link from '@mui/material/Link';
import Dropdown from './DropdownCat';
import Dropdown2 from './DropdownBrand';
import { Link as LinkRoute} from "react-router-dom";

export default function Navbar() {
  const [currentFruit, setCurrentFruit] = useState('oranges')

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }
  return (
    <>
      <div  className='SecondNavBarMain'>
        <div className='SecondNavBarMainSub'>
          <div className='SecondNavBarMainFirst'>
            <Dropdown />
          </div>
          <div className='SecondNavBarMainSecond'>
            <Link href="/NewArrival" className='link'>NEW ARRIVAL</Link>
          </div>
          <div className='SecondNavBarMainFourth'>
            <Link href="/Summer" className='link'>SUMMER COLLECTION</Link>
          </div>
          <div className='SecondNavBarMainThird'>
            <Link href="/Winter" className='link'>WINTER COLLECTION</Link>
          </div>
          <div className='SecondNavBarMainFifth'>
            <Link href="/FabricCambric" className='link'>READY TO WEAR</Link>
          </div>
          <div className='SecondNavBarMainSixth'>
            <Link href="/Women" className='link'>WOMEN</Link>
          </div>
          <div className='SecondNavBarMainSeven'>
            <Link href="/Childrens" className='link'>KID</Link>
          </div>
          <div className='SecondNavBarMainEight'>
            <Link href="/FabricBanarsi" className='link'>SALE</Link>
          </div>

          <div className='SecondNavBarMainNine'>
            <Link href="/Men" className='link'> MEN</Link>
          </div>
          <div className=''>
            <Link component={LinkRoute} to="/BrandSubMain" className='link'> <Dropdown2 className="link" /></Link>
          </div>
        </div>
      </div>
    </>)
}
