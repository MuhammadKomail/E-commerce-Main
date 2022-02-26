import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Loader from '../component/Loader'
import swal from 'sweetalert';

const theme = createTheme();

export default function ShippingUserAdrs() {
    const StoredcartData = JSON.parse(localStorage.getItem('myCartData'))
    const StoredDataOfUserId = localStorage.getItem('id')
    const location = useLocation()
    const initialValues = {
        email: "",
        firstName: "",
        lastName: "",
        Address: "",
        Country: "",
        Province: "",
        Phone: "",
        Zip: "",
        City: "",
        orderAmount: location.state,
        idOfItemAndQuantity: StoredcartData,
        idOfUser: StoredDataOfUserId,
        status: "In progress"
    };
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }



    useEffect(() => {
        // Errors of forms
        // console.log(formErrors)

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            //Form Object
            console.log(formValues)
        }
    }, [formErrors])



    React.useEffect(() => {
        if (StoredDataOfUserId) {
            if (location.state != null) {
                // console.log(location.state);
            } else {
                navigate('/')
            }
        } else {
            navigate('/login')
        }
    }, [])

    function routeToHome() {
        navigate('/')
    }

    // ====================================
    const [loading, setLoading] = useState(true)



    // console.log(location.state)
    // console.log(StoredcartData)

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        axios.post('http://localhost:5000/add/formData', formValues)
            .then(res => { 
                console.log(res.data)
                navigate('/Accountinfo/Myorders')
                localStorage.removeItem('myCartData')
                swal({
                    title: "Successfully!",
                    text: "Your Order Has Been Successfully Placed!",
                    icon: "success",
                    button: "Ok!",
                  });
             })
            .catch(err => { console.log(err) })
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.Phone) {
            errors.Phone = "Phone number is required";
        } else if (values.Phone.length < 11) {
            errors.Phone = "Phone number is incorrect!";
        }
        return errors;
    }



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" >
                <CssBaseline />
                <div>
                    <Button onClick={routeToHome} variant="contained" sx={{ background: "black", borderRadius: 10, mt: 3, mb: 2 }}> <ArrowBackIosNewIcon />  Canceal </Button>
                </div>
                <div className='shippingAddressMainFirst'>
                    <div> <HouseIcon /> </div> <div className='shippingAddressMainFirstHeadingName'> SHIPPING ADDRESS </div>
                </div>
                <form component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} >
                    <p className='emailAddress'>Email Address: *</p>

                    <input
                        onChange={handleChange} value={formValues.email}
                        required
                        id="email"
                        name="email"
                        autoComplete="email"
                        className='emailAddressInput'
                    />
                    <p style={{ fontSize: 12, color: "red" }}>{formErrors.email}</p>
                    <div className='mainName'>
                        <div className='firstName'>
                            <label className='mainfirstName'>
                                <p className='firstName'>First Name: *</p>

                                <input
                                    onChange={handleChange} value={formValues.firstName}

                                    className='firstNameInput'
                                    required
                                    name="firstName"
                                    type="text"
                                    id="firstName" />
                            </label>
                        </div>
                        <div className='lastName'>
                            <label className='mainLastName'>

                                <p className='emailAddress'>Last Name: *</p>
                                <input
                                    onChange={handleChange} value={formValues.lastName}
                                    className='lastNameInput'
                                    required
                                    name="lastName"
                                    type="text"
                                    id="lastName" />
                            </label>
                        </div>
                    </div>
                    <label className='main'>

                        <p className='emailAddress'>Street Address: *</p>
                        <input
                            onChange={handleChange} value={formValues.Address}
                            required
                            name="Address"
                            type="text"
                            id="Address"
                            className='emailAddressInput' /></label>
                    <label className='main'>
                        <p className='emailAddress'>Country</p>

                        <select
                            onChange={handleChange} value={formValues.Country}
                            id="Country"
                            name="Country"
                            className='emailAddressInput'
                        >
                            <option value="" disabled selected>
                                Select your Country
                            </option>
                            <option value={'Pakistan'}>Pakistan</option>
                        </select>
                    </label>
                    <div className='mainName'>
                        <div className='firstName'>
                            <label className='main'>
                                <p className='StateOrProvince'>State/Province: </p>
                                <select className='StateOrProvinceSelect'
                                    onChange={handleChange} value={formValues.Province}
                                    id="Province"
                                    name="Province">
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
                                <p className='emailAddress'>Phone Number: *</p>
                                <input
                                    onChange={handleChange} value={formValues.Phone}
                                    className='lastNameInput'
                                    required
                                    name="Phone"
                                    type="number"
                                    id="Phone" />
                                <p style={{ fontSize: 12, color: "red" }}>{formErrors.Phone}</p>

                            </label>
                        </div>
                    </div>
                    <div className='mainName'>
                        <div className='lastName'>
                            <label className='mainzipPostalCode'>
                                <p className='emailAddress'>ZIP/Postal Code: *</p>
                                <input
                                    onChange={handleChange} value={formValues.Zip}
                                    className='lastNameInput'
                                    required
                                    name="Zip"
                                    type="number"
                                    id="Zip" />
                            </label>
                        </div>
                        <div className='firstName'>
                            <label className='main'>
                                <p className='emailAddress'>City: *</p>

                                <select id="City"
                                    className='StateOrProvinceSelect'
                                    name="City"
                                    onChange={handleChange} value={formValues.City}
                                >
                                    <option >Select City</option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div><Button
                        type="submit" variant="contained" sx={{ background: "black", borderRadius: 0, mt: 3, mb: 2 }}>
                        Place the order
                    </Button>
                    </div>

                </form>
            </Container >
        </ThemeProvider >
    );
}





