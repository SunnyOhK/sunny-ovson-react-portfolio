import React, {useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import moment from "moment"
// import NavigationButtons from "../Buttons/AboutButton";
import './style.css';
import { ThemeContext } from "../../ThemeProvider";


// const navItems = ['About', 'Projects', 'Resume', 'Contact'];

function Navbar() {
  console.log("navbar rendered")
const {colors, toggleMode} = useContext(ThemeContext);
  console.log(colors);

  return (
    <AppBar position="static" sx={{
      backgroundColor: colors.primary,
      height: '4.5em',
      display: "flex",
      alignContent: 'center',
    }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              flex: "1 0 auto",
              display: { xs: "none", md: "flex" },
              // ml: -20,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Neucha',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: colors.secondary,
              textDecoration: 'none',
              marginRight: 'auto',
            }}
          >
            Sunny Ovson
          </Typography>
          <div className='menuItems' sx={{ flex: "0 1 auto" }}>
            <button onClick={toggleMode}> Change Theme</button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px'
            }}
            >
              About
            </Button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              paddingLeft: '17px'
            }}
            >
              Projects
            </Button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              paddingLeft: '17px'
            }}
            >
              Resume
            </Button>
            <Button sx={{
              color: colors.secondary,
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