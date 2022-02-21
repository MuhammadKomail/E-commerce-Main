import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, BrandSubMain, Signup, Login,CartScreen, CardInsideView, 
    Accountinfo, Myaccount, Myorders, MainOrderForm,PageNotFound,Category } from ".";


export default function AppRouter() {
    return (
        <Router >
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/BrandSubMain" element={<BrandSubMain />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CardInsideView" element={<CardInsideView />} />
                    <Route path="/Accountinfo/*" element={<Accountinfo />} >
                        <Route path="" element={<Myaccount />} />
                        <Route path="Myorders" element={<Myorders />} />
                    </Route>
                    <Route path="/mainOrderForm" element={<MainOrderForm />} />
                    <Route path="/CartScreen" element={<CartScreen />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="Category" element={<Category />} />
                    
                </Routes>
            </div>
        </Router>
    )
}