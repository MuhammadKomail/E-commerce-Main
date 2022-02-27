import * as React from 'react';
import Grid from '@mui/material/Grid';
import Cards from "../component/Cards"
import CarouselComp from "../component/Carousel"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./homeScreen.css";
import Header from '../component/Header'
import Footer from '../component/Footer1'
import { useNavigate } from 'react-router'
import { connect, useDispatch } from "react-redux"
import axios from 'axios';
import Loader from '../component/Loader'
import { Link } from '@mui/material';
import lawn from '../images/01.jpg'
import cotton from '../images/02.jpg'
import { addCartData } from '../redux/shoppingCart/shopping-cart-actions';
import NoDataFound from './NoDataFound';
import swal from 'sweetalert';


function HomeScreen() {

    const navigate = useNavigate();
    const [data, setData] = React.useState([])
    const [loader, setLoader] = React.useState(true)

    
    const viewDetails = (id) => {
        navigate("/CardInsideView", { state: id });
    }
    const dispatch = useDispatch();
    
    const addToCard = (e) => {
        console.log("Add To Cart")
        addCartData(dispatch, e._id)
        swal({
            title: "Successfully!",
            text: "Your Item Has Been Added To Your Cart list!",
            icon: "success",
            button: "Ok!",
          });
    }
    
    axios.get('https://surkhab.herokuapp.com/cards/')
    .then((res) => {
        setData(res.data)
        setLoader(false)
    })
    let filterDataMen = data.length == 0 ? 0 : data.filter((fil) => fil.category == 'Men')
    
    return <div>
        <Header />

        <Grid container spacing={2} mb={2}>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Shop By Fabric</Typography>
            </Grid>

            <Grid item md={2} sm={4} xs={4}>
                <Link href='/FabricLinen'> <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/3.png" /></Link>
            </Grid>
            <Grid item md={2} xs={4}
                sm={4}>
                <Link href='/FabricVelvet'><img alt="img" className="category" src={cotton} /></Link>
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <Link href='/FabricChiffon'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/04.webp" /></Link>
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <Link href='/FabricBanarsi'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/05.webp" /></Link>
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <Link href='/FabricLinen'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/03.webp" /></Link>
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <Link href='/FabricKhaddar'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/06.webp" /></Link>
            </Grid>

        </Grid>

        <hr />




        {/* carousal grid */}



        <Grid container spacing={2} mt={2}>
            <Grid item md={5} >
                <CarouselComp pic1="https://www.alkarimfabric.com/pub/media/homepageslider/slide1-0001.webp"
                    pic2="https://www.alkarimfabric.com/pub/media/homepageslider/slide2-0001.webp" />
            </Grid>
            <Grid item md={3} >
                <CarouselComp pic1="https://www.alkarimfabric.com/pub/media/homepageslider/slide1-0002.webp"
                    pic2="https://www.alkarimfabric.com/pub/media/homepageslider/slide2-0002.webp" />
            </Grid>
            <Grid item md={4}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"

                >
                </Grid>
                <Grid item md={12}>
                    <CarouselComp pic1="https://www.alkarimfabric.com/pub/media/homepageslider/slide2-0003.webp"
                        pic2="https://www.alkarimfabric.com/pub/media/homepageslider/slide1-0003.webp" />
                </Grid>
                <Grid item md={12}>
                    <CarouselComp pic1="https://www.alkarimfabric.com/pub/media/homepageslider/slide2-0004.webp"
                        pic2="https://www.alkarimfabric.com/pub/media/homepageslider/slide1-0004.webp" />
                </Grid>
            </Grid>
        </Grid>




        {/* shop by category grid */}

        <Grid container spacing={2}>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Shop By Category</Typography>
            </Grid>

            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3} sm={3}>
                <Link href='/Childrens'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/01.webp" /></Link>
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3}
                sm={3}>
                <Link href='/NewArrival'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/02.webp" /></Link>
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3} sm={3}>
                <Link href='/Mpasha'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/03.png" /></Link>
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3} sm={3}>
                <Link href='/FabricKhaddar'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/04.webp" /></Link>
            </Grid>
        </Grid>





        {/* cards grid */}
        <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Newest-In Collection</Typography>
            </Grid>
        </Grid>
        <Grid container p={3} spacing={1}>
            {loader ? <Grid item xs={12} md={12}><Loader /> </Grid> : data && data.length !== 0 ? data.slice(0, 4).map((e) => {
                return (
                    <>
                        <Grid item xs={6} md={3}>
                            <Cards onClick1={() => addToCard(e)} onClick={() => viewDetails(e)} pic={e.imageUrl1} pic2={e.imageUrl2} title={e.title} price={e.orignalPrice} />
                        </Grid>
                    </>
                )
            }) : <NoDataFound />}


        </Grid>






        <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >MEN'S COLLECTION</Typography>
            </Grid>
            <Grid item md={12} sm={12} >
                <img alt="img" className='category' src="https://www.alkarimfabric.com/pub/media/banner/men.webp" />
            </Grid>
        </Grid>


        <Grid container p={3} spacing={2}>
            {loader ? <Grid item xs={12} md={12}><Loader /> </Grid> : filterDataMen && filterDataMen.length !== 0 ? filterDataMen.slice(0, 4).map((e) => {
                return (
                    <>
                        <Grid item xs={6} md={3}>
                            <Cards onClick1={() => addToCard(e)} onClick={() => viewDetails(e)} pic={e.imageUrl1} pic2={e.imageUrl2} title={e.title} price={e.orignalPrice} />
                        </Grid>
                    </>
                )
            }) : <NoDataFound />}

        </Grid>
        <Footer />

    </div>;


}

export default HomeScreen;

