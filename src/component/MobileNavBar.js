import React, { useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { useNavigate } from "react-router";
import { Link as LinkRoute } from "react-router-dom";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from "react-redux";


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const navigate = useNavigate()

    const NavigatingTologin = () => {
        navigate("/login")
    }
    const NavigatingToBrandSubMain = () => {
        navigate("/BrandSubMain")
    }
    const NavigatingToCartScreen = () => {
        navigate("/CartScreen");
    }

    const {cart,loading} = useSelector(state=>state.cartDataReducer)
    console.log(cart);


    const StoredcartData = JSON.parse(localStorage.getItem('myCartData'))
    // const [cart, setCart] = useState([])


    // React.useEffect(() => {
        // if (StoredcartData) {
        //     if (StoredcartData.length !== 0) {
        //         setCart(StoredcartData)
        //     } else {
        //         setCart([])
        //     }
        // } else {
        //     setCart([])
        // }
    // }, [StoredcartData])


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [leadershipTriadMenuOpen, setLeadershipTriadMenuOpen] = useState(false);
    const [leadershipTriadMenuOpenWoMen, setLeadershipTriadMenuOpenWoMen] = useState(false);
    const [leadershipTriadMenuOpenMen, setLeadershipTriadMenuOpenMen] = useState(false);
    const [leadershipTriadMenuOpenShop, setLeadershipTriadMenuOpenShop] = useState(false);

    const handleLeadershipTriadClick = () => {
        setLeadershipTriadMenuOpen(!leadershipTriadMenuOpen);
    };
    const handleLeadershipTriadClickWoMen = () => {
        setLeadershipTriadMenuOpenWoMen(!leadershipTriadMenuOpenWoMen);
    };
    const handleLeadershipTriadClickMen = () => {
        setLeadershipTriadMenuOpenMen(!leadershipTriadMenuOpenMen);
    };
    const handleLeadershipTriadClickShop = () => {
        setLeadershipTriadMenuOpenShop(!leadershipTriadMenuOpenShop);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar  className="MobileNavBarMainFirst" sx={{backgrounCOlor: "white !important" }}>
                    <IconButton
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }), color: "black", }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link component={LinkRoute} to="/"><img src={logo} alt="Logo" className="imgMobileLogo" sx={{ marginTop: 5 }} width="60rem" /></Link>
                    </Typography>
                    <div onClick={NavigatingToCartScreen} className='firstNavIcon'>
                        <Link component={LinkRoute} to="/CartScreen" className='personIcon' sx={{ paddingLeft: 4 }}  ><LocalMallIcon />&nbsp;</Link>{cart.length} items
                    </div>

                    <div onClick={NavigatingTologin} className='firstNavIcon'>
                        <Link className='personIcon' href="#" ><PersonOutlinedIcon /></Link>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem
                        button
                        onClick={() => handleLeadershipTriadClick()}
                    >

                        <ListItemText primary="ALL CATEGORIES" />
                        {leadershipTriadMenuOpen ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItem>
                    <Collapse
                        in={leadershipTriadMenuOpen}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => handleLeadershipTriadClickWoMen()}>
                                <p className="mobileNavBarDrawerFontSize">WOMEN</p>
                                {leadershipTriadMenuOpenWoMen ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse
                                in={leadershipTriadMenuOpenWoMen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItem button>
                                        <Link className='linkText' href="/WprintedShirt" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />PRINTED SHIRT</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/WEmbro" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />EMBROIDERED</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/Wshirt" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />SHIRT</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/Wduppata" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />DUPATTA</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/W2piece" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />2 PIECE</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/W3piece" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />3 PIECE</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/WprintedShirt" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />TROUSERS</p></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button onClick={() => handleLeadershipTriadClickMen()}>
                                <p className="mobileNavBarDrawerFontSize">MEN</p>
                                {leadershipTriadMenuOpenMen ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )}
                            </ListItem>
                            <Collapse
                                in={leadershipTriadMenuOpenMen}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    <ListItem button>
                                        <Link className='linkText' href="/Mpasha" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />PASHA</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/MELANGE" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />MELANGE</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/Mgrace" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />GRACE</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/Mahmed" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />AHMAD FABRICS</p></Link>
                                    </ListItem>
                                    <ListItem button>
                                        <Link className='linkText' href="/Myameen" ><p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BIN YAMEEN</p></Link>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/NewArrival" ><b className="mobileNavBarDrawerFontSize"> NEW ARRIVAL </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/Eid" ><b className="mobileNavBarDrawerFontSize"> EID COLLECTION </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/Summer" ><b className="mobileNavBarDrawerFontSize"> SUMMER COLLECTION </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/WeddingWear" ><b className="mobileNavBarDrawerFontSize"> WEDDING WEAR </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/Winter" ><b className="mobileNavBarDrawerFontSize"> WINTER COLLECTION </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />

                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/ReadyToWear" ><b className="mobileNavBarDrawerFontSize"> READY TO WEAR </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>

                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="Women" ><b className="mobileNavBarDrawerFontSize"> WOMEN </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>

                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/Childrens" ><b className="mobileNavBarDrawerFontSize"> KIDS </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>

                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/FabricBanarsi" ><b className="mobileNavBarDrawerFontSize"> SALE </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <Link className='linkText' href="/Men" ><b className="mobileNavBarDrawerFontSize"> MEN </b></Link>
                        </ListItemIcon>
                        <ListItemText />
                    </ListItem>
                </List>
                <Divider />

                <List onClick={NavigatingToBrandSubMain} className="mobileNavBarDrawerFontSize">
                    <ListItem
                        button
                        onClick={() => handleLeadershipTriadClickShop()}
                    >
                        <Link className='linkText' href="#" ><p className="mobileNavBarDrawerFontSize">SHOP BY BRANDS</p></Link>
                        {leadershipTriadMenuOpenShop ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItem>
                    <Collapse
                        in={leadershipTriadMenuOpenShop}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List component="div" disablePadding>
                            <ListItem button>
                                <p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BRAND 1</p>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BRAND 2</p>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BRAND 3</p>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BRAND 4</p>
                            </ListItem>
                        </List>
                        <List component="div" disablePadding>
                            <ListItem button>
                                <p className="mobileNavBarDrawerFontSize"><ArrowForwardIosSharpIcon className='icons' />BRAND 5</p>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
            </Drawer >

            <Main open={open}>
                <DrawerHeader />


            </Main>

        </Box >
    );
}




