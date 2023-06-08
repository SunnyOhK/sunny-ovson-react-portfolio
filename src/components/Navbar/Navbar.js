import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import moment from "moment"
// import NavigationButtons from "../Buttons/AboutButton";
import './style.css';
import { ThemeContext } from "../../ThemeProvider";


// const colorSchemes = [
//   { id: 'purple', name: 'Purple' },
//   { id: 'grey', name: 'Grey' },
//   { id: 'other', name: 'Other' }
// ];

function Navbar() {
  console.log("navbar rendered")
  const { colors, toggleMode } = useContext(ThemeContext);
  console.log(colors);

  return (
    <AppBar position="static" sx={{
      backgroundColor: colors.primary,
      height: '4.5em',
      // display: "flex",
      // alignContent: 'center',
    }}>
      <Container maxWidth='x1'>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              // flex: "1 0 auto",
              display: { xs: "none", md: "flex" },
              // ml: -20,
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
          <div className='menuItems'>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              marginTop: '0.8em'
            }}
            >
              About
            </Button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              paddingLeft: '17px',
              marginTop: '0.8em'
            }}
            >
              Projects
            </Button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              paddingLeft: '17px',
              marginTop: '0.8em'
            }}
            >
              Resume
            </Button>
            <Button sx={{
              color: colors.secondary,
              fontSize: '18px',
              paddingLeft: '17px',
              marginTop: '0.8em'
            }}
            >
              Contact
            </Button>
            <FormControl variant="standard" sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: '#ffffff3b',
              border: 'none'
            }}>
              <InputLabel id="demo-simple-select-helper-label" sx={{
                color: '#ffffff',
              }}
              >
                Theme
                </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={colors}
                onChange={toggleMode}
                label="Theme"
                sx={{
                  border: 'none',
                  color: '#ffffff'
                }}
              >
                <MenuItem value={1} sx={{
                  color: '#414449'
                }}>
                  Earthy Purple
                </MenuItem>
                <MenuItem value={2} sx={{
                  color: '#414449'
                }}>
                  The Blues
                </MenuItem>
                <MenuItem value={3} disabled={true} sx={{
                  color: '#414449'
                }}>
                  Other
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;