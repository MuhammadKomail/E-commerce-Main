import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import jwt from 'jsonwebtoken'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Button } from '@mui/material';
import { Outlet, Link as LinkRoute } from "react-router-dom";
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import axios from 'axios';


const drawerWidth = 240;



function AccountInfo(props) {
  const Navigate = useNavigate()
  const [data, setData] = React.useState()
  // ==================================================
  useEffect(() => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if (token && id) {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        Navigate('/login')
      } else {
        console.log(user)
        axios.get('https://surkhab.herokuapp.com/' + id)
          .then(res => setData(res.data))
      }
    } else {
      Navigate('/login')
    }
  }, [])
  // ==================================================


  function logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    Navigate('/login')
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <div>
      <Toolbar />
      <Button component={LinkRoute} to="/" style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
        <ArrowRightIcon fontSize='large' /><Typography >Home</Typography>
      </Button>
      <Divider />
      <Divider />
      <Button component={LinkRoute} to="" style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
        <ArrowRightIcon fontSize='large' /><Typography >Account Information</Typography>
      </Button>
      <Divider />
      <Button component={LinkRoute} to="Myorders" style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth>
        <ArrowRightIcon fontSize='large' /><Typography >My orders</Typography>
      </Button>
      <Divider />
      <Button component={LinkRoute} to="/" style={{ color: "black", textTransform: "capitalize", justifyContent: "left" }} fullWidth onClick={logOut}>
        <ArrowRightIcon fontSize='large' /><Typography >Log Out</Typography>
      </Button>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar style={{ background: "black" }}
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
          }}
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
            <Typography variant="div" noWrap component="div">
              MY ACCOUNT
            </Typography>
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
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Outlet />
        </Box>

      </Box>
    </>
  );
}

AccountInfo.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AccountInfo;
