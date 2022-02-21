import React from 'react';
import HouseIcon from '@mui/icons-material/House';

export default function ShippingAddress() {
    return (
        <>
            <div className='shippingAddressMain'>
                <div className='shippingAddressMainFirst'>
                    <div> <HouseIcon /> </div> <div className='shippingAddressMainFirstHeadingName'> SHIPPING ADDRESS </div>
                </div>
                <div className='shippingAddressMainSecond'>
                    <form className='mainFormShippingAddress'>
                        <label className='mainEMailAdress'>
                            <p className='emailAddress'>Email Address: *</p>
                            <input type="email" className='emailAddressInput' name="emailAddress" />
                        </label>
                        <div className='mainName'>
                            <div className='firstName'>
                                <label className='mainfirstName'>
                                    <p className='firstName'>First Name: *</p>
                                    <input type="text" className='firstNameInput' name="firstName" />
                                </label>
                            </div>
                            <div className='lastName'>
                                <label className='mainLastName'>
                                    <p className='lastName'>Last Name: *</p>
                                    <input type="text" className='lastNameInput' name="lastName" />
                                </label>
                            </div>
                        </div>
                        <label className='main'>
                            <p className='emailAddress'>Street Address: *</p>
                            <input type="text" className='emailAddressInput' name="streetAddress" />
                        </label>
                        <label className='main'>
                            <p className='country'>Country: *</p>
                            <select className='countryInput'>
                                <option >Select Country</option>
                                <option value="pakistan">Pakistan</option>
                            </select>
                        </label>
                        <div className='mainName'>
                            <div className='firstName'>
                                <label className='main'>
                                    <p className='StateOrProvince'>State/Province: </p>
                                    <select className='StateOrProvinceSelect'>
                                        <option >Select Province</option>
                                        <option value="Sindh">Sindh</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="balochistan">balochistan</option>
                                        <option value="KPK">KPK</option>
                                    </select>
                                </label>
                            </div>
                            <div className='lastName'>
                                <label className='mainLastName'>
                                    <p className='lastName'>Phone Number: *</p>
                                    <input type="number" className='lastNameInput' name="lastName" />
                                </label>
                            </div>
                        </div>
                        <div className='mainName'>
                            <div className='lastName'>
                                <label className='mainzipPostalCode'>
                                    <p className='lastName'>Zip Or Postal Code: *</p>
                                    <input type="number" className='lastNameInput' name="lastName" />
                                </label>
                            </div>
                            <div className='firstName'>
                                <label className='main'>
                                    <p className='StateOrProvince'>City: </p>
                                    <select className='StateOrProvinceSelect'>
                                        <option >Select City</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Peshawar">Peshawar</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
