import * as React from 'react';
import Grid from '@mui/material/Grid';
import Cards from "../component/Cards"
import CarouselComp from "../component/Carousel"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./homeScreen.css";
import Header from '../component/Header'
import Footer from '../component/Footer1'
import {  useNavigate } from 'react-router'
import {connect} from "react-redux"

const obj = [
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-1_pvpqibajmtuugcbg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-2_otnsvvp8titpejzd.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: "$37"
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-1_adojxkcvrdju0juj.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-2_x60hpit822aadk9h.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price: "$37"
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-3_erv4lhvdb748esw7.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-4_klbfzb6yeji3dxtw.jpg",
        title: "3 Pc Embroidered Lawn Suit With Silk Dupatta",
        price: "$40"
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-1_wr8lrxzjlzegey5a.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-2_u4mupk3wqebphmxu.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: "$37"
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-1_mesilofgkfktcazt.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-2_dhiwan0rcadmf2fi.jpg",
        title: "3 Pc Embroidered Lawn Suit With Jacquard Poly Net Dupatta",
        price: "$37"
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-1_mm7htdfpjptaagzg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-2_yvvslyjcqyk5bdw5.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price: "$24"
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-2_dh27nirgvzin6jg9.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-1_kttswpzdudrmrefk.jpg",
        title: "2 Pc Printed Lawn Suit With Cambric Trouser",
        price: "$20"
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/272443310cb21d8ec31039970ef56deb/s/s/ss-44.1-22-red-2_uzen79kkqqop7ibs.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-44.1-22-red-1_33uu8bmgoltk49gm.jpg",
        title: "2 Pc Embroidered Yarn Dyed Suit With Cambric Trouser",
        price: "$26"
    }]

const Men = [
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/w/e/web_cover_300x400_3_.jpg",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/w/e/web_cover_300x400_3_.jpg",
        title: "Misri Cotton",
        price: "$37"
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/m/e/melange_cvc_texture_front_cover_300x400.png",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/m/e/melange_cvc_texture_front_cover_300x400.png",
        title: "CVC Texture",
        price: "$37"
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/z/a/zarnain_web_cover_300x400_1.png",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/z/a/zarnain_web_cover_300x400_1.png",
        title: "ZARNAIN",
        price: "$37"
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/c/o/cover_image.jpg",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/c/o/cover_image.jpg",
        title: "MUNA SALVA",
        price: "$37"
    },

]

function HomeScreen(products) {

    const navigate = useNavigate();
    const viewDetails = (id) =>{
        navigate("/CardInsideView",{state: id});
    }
    return <div>
        <Header />

        <Grid container spacing={2} mb={2}>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Shop By Fabric</Typography>
            </Grid>

            <Grid item md={2} sm={4} xs={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/01.webp" />
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/03.webp" />
            </Grid>
            
            <Grid item md={2} sm={4} xs={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/04.webp" />
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/05.webp" />
            </Grid>
            <Grid item md={2} sm={4} xs={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/06.webp" />
            </Grid>
            <Grid item md={2} xs={4}
                sm={4}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/fabric/02.webp" />
            </Grid>
        </Grid>

        <hr />




        {/* carousal grid */}



        <Grid container spacing={2} mt ={2}>
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
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/01.webp" />
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3}
                sm={3}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/02.webp" />
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3} sm={3}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/01.webp" />
            </Grid>
            <Grid item sx={{
                display: { xs: "none", md: "block", sm: "block" }
            }} md={3} sm={3}>
                <img alt="img" className="category" src="https://www.alkarimfabric.com/pub/media/category/04.webp" />
            </Grid>
        </Grid>





        {/* cards grid */}
        <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >Newest-In Collection</Typography>
            </Grid>
        </Grid>

        <Container style={{ justifyContent: 'center', alignItems: 'center' }} >

            <Grid container p={3} spacing={1}>
                {products.products.map((e) => {
                    return (
                        <>
                            <Grid item xs={6} md={3}>
                                <Cards  onClick = {() => viewDetails(e)} notnew={true} pic={e.img1} pic2={e.img2} title={e.title} price={e.price} />
                            </Grid>
                        </>
                    )
                })}


            </Grid>

        </Container>





        <Grid container spacing={2}>
            <Grid item md={12} sm={12} m={4}>
                <Typography variant="h4" className="fancy" >MEN'S COLLECTION</Typography>
            </Grid>
            <Grid item md={12} sm={12} >
                <img alt="img" className='category' src="https://www.alkarimfabric.com/pub/media/banner/men.webp" />
            </Grid>
        </Grid>


        <Grid container p={3} spacing={2}>
            {Men.map((e) => {
                return (
                    <>
                        <Grid item xs={6} md={3}>
                            <Cards onClick = {() => viewDetails(e)} pic={e.img1} pic2={e.img2} title={e.title} price={e.price} />
                        </Grid>
                    </>
                )
            })}


        </Grid>
        <Footer />

    </div>;
}

const mapStateToProps =(state)=>{
    return{
        products:state.shop.products,
    };
}

export default connect(mapStateToProps)( HomeScreen);

