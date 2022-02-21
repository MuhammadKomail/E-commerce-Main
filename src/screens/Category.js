import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Cards from "../component/Cards"
import DropDown from '../component/DropDown';
import Grid from '@mui/material/Grid';
import Header from '../component/Header'
import Footer from '../component/Footer1'

import {useEffect } from 'react';


const obj = [
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-1_pvpqibajmtuugcbg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-grey-2_otnsvvp8titpejzd.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: 37
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-1_adojxkcvrdju0juj.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-48-22-purple-2_x60hpit822aadk9h.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price: 37
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-3_erv4lhvdb748esw7.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-12-22-mint-green-4_klbfzb6yeji3dxtw.jpg",
        title: "3 Pc Embroidered Lawn Suit With Silk Dupatta",
        price: 40
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-1_wr8lrxzjlzegey5a.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-10.1-22-peach-2_u4mupk3wqebphmxu.jpg",
        title: "3 Pc Embroidered Lawn Suit With Chiffon Dupatta",
        price: 37
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-1_mesilofgkfktcazt.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-09-22-beige-2_dhiwan0rcadmf2fi.jpg",
        title: "3 Pc Embroidered Lawn Suit With Jacquard Poly Net Dupatta",
        price: 37
    },
    {
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-1_mm7htdfpjptaagzg.jpg",
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-49-22-lime-green-2_yvvslyjcqyk5bdw5.jpg",
        title: "2 Pc Embroidered Dobby Suit With Cambric Trouser",
        price: 24
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-2_dh27nirgvzin6jg9.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-23.1-22-cream-1_kttswpzdudrmrefk.jpg",
        title: "2 Pc Printed Lawn Suit With Cambric Trouser",
        price: 20
    },
    {
        img2: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/272443310cb21d8ec31039970ef56deb/s/s/ss-44.1-22-red-2_uzen79kkqqop7ibs.jpg",
        img1: "https://dgbrz1yyanh5b.cloudfront.net/media/catalog/product/cache/cf642a7507385d48d80820fdf8ee696d/s/s/ss-44.1-22-red-1_33uu8bmgoltk49gm.jpg",
        title: "2 Pc Embroidered Yarn Dyed Suit With Cambric Trouser",
        price: 26
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/w/e/web_cover_300x400_3_.jpg",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/w/e/web_cover_300x400_3_.jpg",
        title: "Misri Cotton",
        price: 37
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/m/e/melange_cvc_texture_front_cover_300x400.png",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/m/e/melange_cvc_texture_front_cover_300x400.png",
        title: "CVC Texture",
        price: 37
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/z/a/zarnain_web_cover_300x400_1.png",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/z/a/zarnain_web_cover_300x400_1.png",
        title: "ZARNAIN",
        price: 37
    },
    {
        img1: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/c/o/cover_image.jpg",
        img2: "https://www.alkarimfabric.com/pub/media/catalog/product/cache/d3299a00606ae60debb57c99b9de6c83/c/o/cover_image.jpg",
        title: "MUNA SALVA",
        price: 37
    },
]


const drawerWidth = 240;

function Category(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [options, setOptions] = React.useState('');
  const [data, setData] = React.useState(obj);

  const handleChange = (event) => {
    setOptions(event.target.value);
    console.log("state updated")
    
  };

  // useEffect(() => {
  //   const sortArray = type => {
  //     const types = {
  //       price: 'price'
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
  //     setData(sorted);
  //   };
  //   sortArray(options);
  // }, [options]);

  useEffect(()=>{
    const sortedData = data.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
    setData(sortedData)
  },[options])

  // const drawer = (
  //   <div>
  //     <Toolbar />
  //     <Divider />
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>
  //             {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //           </ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  // const container = window !== undefined ? () => window().document.body : undefined;

 
  

  return (
    <>
    <Header />
    {/* <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        style={{ background: 'black', boxShadow: 'none'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Sort by
          </Typography>
          <DropDown onClick={handleChange} value={options} />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar /> */}
        <Grid container p={3} spacing={1}>
                {data.map((e) => {
                    return (
                        <>
                            <Grid item xs={6} md={3}>
                                <Cards notnew={true} pic={e.img1} pic2={e.img2} title={e.title} price={e.price} />
                            </Grid>
                        </>
                    )
                })}


            </Grid>
      </Box>
    </Box>
    <Footer />

    </>
  );
}

Category.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Category;
