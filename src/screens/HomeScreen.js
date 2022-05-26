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
import bannerImages1 from '../bannerImages/1.jpeg'
import bannerImages2 from '../bannerImages/2.jpeg'
import bannerImages3 from '../bannerImages/3.jpeg'
import bannerImages4 from '../bannerImages/4.jpeg'
import bannerImages5 from '../bannerImages/11.jpeg'
import bannerImages6 from '../bannerImages/6.jpeg'
import bannerImages7 from '../bannerImages/7.jpeg'
import bannerImages8 from '../bannerImages/8.jpeg'
import menImage from '../images/men.jpg'
import { fileteredData } from '../helper/filter_data';
import { useSelector } from 'react-redux'

function HomeScreen() {

    const navigate = useNavigate();
    const [data, setData] = React.useState([])
    const [loader, setLoader] = React.useState(true)
    const [filterDataMen, setFilterDataMen] = React.useState([])


    const state = useSelector(state=>state)


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

    React.useEffect(() => {
        axios.get('https://surkhab.herokuapp.com/cards/')
        .then((res) => {
            setData(res.data)
            setFilterDataMen(fileteredData(res.data,'category','Men'))
            setLoader(false)
        })

        
    }, [])

    // axios.get('https://surkhab.herokuapp.com/cards/')
    //     .then((res) => {
    //         setData(res.data)
    //         setLoader(false)
    //     })
    // let filterDataMen = data.length == 0 ? 0 : data.filter((fil) => fil.category == 'Men')

    return <div>
        <Header />

        <Grid container spacing={2} mb={2}>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Shop By Fabric</Typography>
            </Grid>

            <Grid item md={3} sm={4} xs={4}>
                <Link href='/FabricCambric'> <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/3.png" /></Link>
            </Grid>
            <Grid item md={3} xs={4}
                sm={4}>
                <Link href='/FabricVelvet'><img alt="img" className="category" src={cotton} /></Link>
            </Grid>
            <Grid item md={3} sm={4} xs={4}>
                <Link href='/FabricChiffon'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/04.webp" /></Link>
            </Grid>
            <Grid item md={3} sm={4} xs={4}>
                <Link href='/FabricBanarsi'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/05.webp" /></Link>
            </Grid>
            <Grid item md={3} sm={4} xs={4}>
                <Link href='/FabricLinen'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/03.webp" /></Link>
            </Grid>
            <Grid item md={3} sm={4} xs={4}>
                <Link href='/FabricKhaddar'><img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/06.webp" /></Link>
            </Grid>
            <Grid item md={3} sm={4} xs={4}>
                <Link href='/'><img alt="img" className="category" src={lawn} /></Link>
            </Grid>

        </Grid>

        <hr />




        {/* carousal grid */}



        <Grid container spacing={2} mt={2}>
            <Grid item md={4} >
                <CarouselComp pic1={bannerImages1}
                    pic2={bannerImages2} />
            </Grid>
            <Grid item md={4} >
                <CarouselComp pic1={bannerImages3}
                    pic2={bannerImages4} />
            </Grid>
            <Grid item md={4} >
                <CarouselComp pic1={bannerImages5}
                    pic2={bannerImages6} />
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
                            <Cards onClick1={() => addToCard(e)} onClick={() => viewDetails(e)} pic={e.imageUrl1} pic2={e.imageUrl2} title={e.title} price={e.orignalPrice} price2={e.dorignalPrice}
                            
                            // ======
                            cardData={e} 
                            // =======
                            
                            />
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
                <img alt="img" className='category' src={menImage} height="50%" />
            </Grid>
        </Grid>


        <Grid container p={3} spacing={2}>
            {loader ? <Grid item xs={12} md={12}><Loader /> </Grid> : filterDataMen && filterDataMen.length !== 0 ? filterDataMen.slice(0, 4).map((e) => {
                return (
                    <>
                        <Grid item xs={6} md={3}>
                            <Cards onClick1={() => addToCard(e)} onClick={() => viewDetails(e)} pic={e.imageUrl1} pic2={e.imageUrl2} title={e.title} price={e.orignalPrice} price2={e.dorignalPrice} />
                        </Grid>
                    </>
                )
            }) : <NoDataFound />}

        </Grid>
        <Footer />

    </div>;


}

export default HomeScreen;

