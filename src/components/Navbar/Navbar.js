import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './style.css';


// const navItems = ['About', 'Projects', 'Resume', 'Contact'];

function Navbar() {
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
              fontSize: '18px'
            }}
            >
              About
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
              paddingLeft: '17px'
            }}
            >
              Projects
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
              paddingLeft: '17px'
            }}
            >
              Resume
            </Button>
            <Button sx={{
              color: 'white',
              fontSize: '18px',
              paddingLeft: '17px'
            }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;