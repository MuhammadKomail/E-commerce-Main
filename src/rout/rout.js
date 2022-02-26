import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Home, BrandSubMain, Signup, Login, CartScreen, CardInsideView,
    Accountinfo, Myaccount, Myorders, MainOrderForm, PageNotFound, Category,
    Women,
    WprintedShirt,
    WEmbro,
    Wshirt,
    Wduppata,
    W2piece,
    W3piece,
    Men,
    Mpasha,
    MELANGE,
    Mgrace,
    Mahmed,
    Myameen,
    Childrens,
    NewArrival,
    Winter,
    Summer,
    FabricCambric,
    FabricLinen,
    FabricChiffon,
    FabricBanarsi,
    FabricKhaddar,
    FabricVelvet,
    WeddingWear,
    NoDataFound
} from ".";


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
                    <Route path="/Category" element={<Category />} />
                    <Route path="/Women" element={<Women />} />
                    <Route path="/WprintedShirt" element={<WprintedShirt />} />
                    <Route path="/WEmbro" element={<WEmbro />} />
                    <Route path="/Wshirt" element={<Wshirt />} />
                    <Route path="/Wduppata" element={<Wduppata />} />
                    <Route path="/W2piece" element={<W2piece />} />
                    <Route path="/W3piece" element={<W3piece />} />
                    <Route path="/Men" element={<Men />} />
                    <Route path="/Mpasha" element={<Mpasha />} />
                    <Route path="/MELANGE" element={<MELANGE />} />
                    <Route path="/Mgrace" element={<Mgrace />} />
                    <Route path="/Mahmed" element={<Mahmed />} />
                    <Route path="/Myameen" element={<Myameen />} />
                    <Route path="/Childrens" element={<Childrens />} />
                    <Route path="/NewArrival" element={<NewArrival />} />
                    <Route path="/Winter" element={<Winter />} />
                    <Route path="/Summer" element={<Summer />} />
                    <Route path="/FabricCambric" element={<FabricCambric />} />
                    <Route path="/FabricLinen" element={<FabricLinen />} />
                    <Route path="/FabricChiffon" element={<FabricChiffon />} />
                    <Route path="/FabricBanarsi" element={<FabricBanarsi />} />
                    <Route path="/FabricKhaddar" element={<FabricKhaddar />} />
                    <Route path="/FabricVelvet" element={<FabricVelvet />} />
                    <Route path="/WeddingWear" element={<WeddingWear />} />
                    <Route path="/NoDataFound" element={<NoDataFound />} />
                </Routes>
            </div>
        </Router>
    )
}
