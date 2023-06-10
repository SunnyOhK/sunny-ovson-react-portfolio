import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import moment from "moment"
// import NavigationButtons from "../Buttons/AboutButton";
import './style.css';
import { ThemeContext } from "../../providers/ThemeProvider";
import { PageContext } from "../../providers/PageProvider";


function Navbar() {
  console.log("navbar rendered")
  const { colors, toggleMode } = useContext(ThemeContext);
  const { page, togglePage } = useContext(PageContext);
  const menuItems = [ "About", "Projects", "Contact", "Resume" ]
  const borderColor = '#FAEBD7';

  console.log(colors);
  console.log(page);

  return (
    <AppBar position="static" sx={{
      backgroundColor: colors.primary,
      height: '4.5em',
    }}>
      <Container maxWidth='99'>
        <Toolbar disableGutters sx={{
          width: '100%',
          paddingTop: '.1em'
        }}>
          <IconButton
            label="Page"
            size="large"
            onClick={() => togglePage("Home")}
            sx={{
              display: 'flex',
              color: colors.secondary,
              marginRight: 'auto',
            }}
          >
            <HomeOutlinedIcon
              sx={{
                height: { xs: '1.2em', md: '1.5em', lg: '1.8em' },
                width: { xs: '1.2em', md: '1.5em', lg: '1.8em' }
              }}
            />
          </IconButton>
          <div className='menuItems'>
            {menuItems.map(item => (
              <Button
                key={item}
                onClick={() => togglePage(item)}
                label="Page"
                sx={{
                  color: colors.secondary,
                  fontSize: { xs: '14px', md: '16px', lg: '18px' },
                  marginTop: '0.8em',
                  '&:hover': {
                    boxShadow: `1px 2px 7px 0px ${borderColor}`
                  }
                }}
              >
                {item}
              </Button>
            ))}
            <FormControl variant="standard" sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: '#ffffff3b',
              border: 'none',
              display: { xs: 'none', sm: 'inline-flex' }
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
                  color: '#ffffff',
                  height: '25px'
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
                <MenuItem value={3} disabled='true' sx={{
                  color: '#414449'
                }}>
                  Retro
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