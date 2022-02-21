import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function ShippingMethod() {
    return (
        <>
            <div className='shippingMethodMain'>
                <div className='shippingMethodMainFirst'>
                    <div> <LocalShippingIcon /> </div> <div className='shippingMethodMainFirstHeadingName'>  SHIPPING METHODS </div>
                </div>
                <div className='shippingMethodMainSecond'>
                    <div className='shippingMethodMainSecondFirst'>
                        <div> <input type="radio" value="Male" name="payment Method" /> </div>
                        <div> PKR0 </div>
                        <div className='shippingMethodMainSecondFirstText'>Karachi - Cash On Delivery Within 2 Working Days</div>
                    </div>
                    <div className='shippingMethodMainSecondSecond'>
                        <div> <input type="radio" value="Male" name="payment Method" /> </div>
                        <div> PKR290 </div>
                        <div className='shippingMethodMainSecondSecondText'>Nation Wide Cash on Delivery within 4 Working Days</div>
                    </div>
                </div>
                <div className='shippingMethodMainThird'>
                    <p>Comment: </p>
                    <textarea className='shippingMethodMainThirdTextArea' />
                </div>
            </div>
        </>
    )
}
