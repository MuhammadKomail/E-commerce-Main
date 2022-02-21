import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function ShippingMethod() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color,
                backgroundColor: color,
                height: 1,
                opacity:0.1
            }}
        />
    );
    return (
        <>
            <div className='shippingMethodMain'>
                <div className='shippingMethodMainFirst'>
                    <div> <LocalShippingIcon /> </div> <div className='shippingMethodMainFirstHeadingName'>  SHIPPING METHODS </div>
                </div>
                <div className='shippingMethodMainSecond'>
                    <div>
                        <ColoredLine color="black" />
                    </div>
                    <div className='shippingMethodMainSecondFirst'>
                        <div> <input type="radio" value="Cash On Delivery" name="shippingMethod" /> </div>
                        <div> Cash On Delivery </div>
                    </div>
                    <div className='shippingMethodMainSecondFirstText'>Place order and make the payment while receiving your order.</div>
                    <div>
                        <ColoredLine color="black" />
                    </div>
                    <div>
                        <ColoredLine color="black" />
                    </div>
                    <div className='shippingMethodMainSecondFirst'>
                        <div> <input type="radio" value="Western Union" disabled name="shippingMethod" /> </div>
                        <div>  CREDIT CARD <b>(Will be Announced Soon)</b></div>
                    </div>
                    <div>
                        <ColoredLine color="black" />
                    </div>
                </div>
            </div>
        </>
    )
}
