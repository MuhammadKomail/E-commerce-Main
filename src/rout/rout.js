import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Home, BrandSubMain, Signup, Login, CartScreen, CardInsideView,
    ReadyToWear,
    Accountinfo, Myaccount, Myorders, MainOrderForm, PageNotFound, Category,
    Women,
    Surkhab,
    Eid,
    WprintedShirt,
    WEmbro,
    Wshirt,
    Wduppata,
    W2piece,
    W3piece,
    Wtrouser,
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
    NoDataFound,
    
    Adam,
    Zohaib,
    Borque,
    Saeed,
    Khadija,
    Firdous,
    Grace,
    Hz,
    Jazmin,
    Johra,
    Mt,
    Pasha,
    Rashid,
    Rivayat,
    Riyaz,
    Surkhad,
    Tawakal,
    Vs,
    Yameen,
    Zarif
} from ".";
import { getLocalcartData } from "../redux/shoppingCart/shopping-cart-actions";


export default function AppRouter() {

    const dispatch = useDispatch()

    useEffect(() => {
        getLocalcartData(dispatch)
      
    }, [])
    






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
                    <Route path="/Eid" element={<Eid />} />
                    <Route path="/FabricCambric" element={<FabricCambric />} />
                    <Route path="/FabricLinen" element={<FabricLinen />} />
                    <Route path="/FabricChiffon" element={<FabricChiffon />} />
                    <Route path="/FabricBanarsi" element={<FabricBanarsi />} />
                    <Route path="/FabricKhaddar" element={<FabricKhaddar />} />
                    <Route path="/FabricVelvet" element={<FabricVelvet />} />
                    <Route path="/WeddingWear" element={<WeddingWear />} />
                    <Route path="/ReadyToWear" element={<ReadyToWear />} />
                    <Route path="/Wtrouser" element={<Wtrouser />} />
                    <Route path="/NoDataFound" element={<NoDataFound />} />
                    <Route path="/Adam" element={<Adam />} />
                    <Route path="/Zohaib" element={<Zohaib />} />
                    <Route path="/Borque" element={<Borque />} />
                    <Route path="/Saeed" element={<Saeed />} />
                    <Route path="/Khadija" element={<Khadija />} />
                    <Route path="/Firdous" element={<Firdous />} />
                    <Route path="/Grace" element={<Grace />} />
                    <Route path="/Hz" element={<Hz />} />
                    <Route path="/Jazmin" element={<Jazmin />} />
                    <Route path="/Johra" element={<Johra />} />
                    <Route path="/Mt" element={<Mt />} />
                    <Route path="/Pasha" element={<Pasha />} />
                    <Route path="/Rashid" element={<Rashid />} />
                    <Route path="/Rivayat" element={<Rivayat />} />
                    <Route path="/Riyaz" element={<Riyaz />} />
                    <Route path="/Surkhad" element={<Surkhad />} />
                    <Route path="/Tawakal" element={<Tawakal />} />
                    <Route path="/Vs" element={<Vs />} />
                    <Route path="/Yameen" element={<Yameen />} />
                    <Route path="/Zarif" element={<Zarif />} />
                    <Route path="/Surkhab" element={<Surkhab />} />
                </Routes>
            </div>
        </Router>
    )
}
