import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './style.css';
import { colors } from "@mui/material";

const navItems = ['About', 'Projects', 'Resume', 'Contact'];

function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: 'black',
      height: '4.5em',
      alignContent: 'center',
    }}>
      <Container maxWidth='xl' sx={{
        height: '4.5em',
      }}
      >
        <Toolbar disableGutters sx={{
          height: '4.5em',
        }}
        >
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              ml: -20,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Neucha',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              marginRight: 'auto',
            }}
          >
            Sunny Ovson
          </Typography>
          <div className='menuItems'>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
            }}
            >
              About
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
            }}
            >
              Projects
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
            }}
            >
              Resume
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
            }}
            >
              Contact
            </Button>
          </div>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;