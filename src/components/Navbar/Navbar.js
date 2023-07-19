import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './style.css';
import { ThemeContext } from '../../providers/ThemeProvider';
import { PageContext } from '../../providers/PageProvider';


function Navbar() {
  console.log('navbar rendered')
  const { colors, toggleMode } = useContext(ThemeContext);
  const { page, togglePage } = useContext(PageContext);
  const menuItems = ['About', 'Projects', 'Contact', 'Resume']
  const borderColor = '#FAEBD7';

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  console.log(colors);
  console.log(page);

  return (
    <AppBar position='static' sx={{
      backgroundColor: colors.primary,
      height: '4.5em',
    }}>
      <Container maxWidth='99'>
        <Toolbar disableGutters sx={{
          width: '100%',
          paddingTop: '.1em'
        }}>
          <IconButton
            label='Page'
            size='large'
            onClick={() => togglePage('Home')}
            sx={{
              display: 'flex',
              color: colors.secondary,
              marginRight: 'auto',
            }}
          >
            <HomeOutlinedIcon
              sx={{
                height: { xs: '1.2em', md: '1.5em', lg: '1.8em' },
                width: { xs: '1.2em', md: '1.5em', lg: '1.8em' },
                marginBottom: { xs: '-.7em', sm: '-.4em', md: '.1em', lg: '.4em' },
              }}
            />
          </IconButton>
          <div className='menuDropdown'>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ marginBottom: '-.7em' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', sm: 'none' },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => togglePage(item)}
                    label='Page'
                  >
                    <Typography
                      textAlign="center"
                      sx={{ color: colors.primary, }}
                    >
                      {item}
                      <Divider sx={{
                        color: colors.primary,
                        width: '80px',
                        marginLeft: '-10px',
                        marginRight: '-10px',
                        paddingTop: '10px',
                        marginBottom: '-5px',
                      }} />
                    </Typography>
                  </MenuItem>
                ))}

              </Menu>
            </Box>
          </div>

          <div className='menuItems'>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' } }}>
              {menuItems.map(item => (
                <Button
                  key={item}
                  onClick={() => togglePage(item)}
                  label='Page'
                  sx={{
                    color: colors.secondary,
                    fontSize: { xs: '13px', sm: '14px', md: '16px', lg: '18px' },
                    marginTop: '0.8em',
                    '&:hover': {
                      boxShadow: `1px 2px 7px 0px ${borderColor}`
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <FormControl variant='standard' sx={{
              m: 1,
              minWidth: 120,
              backgroundColor: '#ffffff3b',
              border: 'none',
              display: { xs: 'none', sm: 'inline-flex' }
            }}>
              <InputLabel id='demo-simple-select-helper-label' sx={{
                color: '#ffffff',
              }}
              >
                Theme
              </InputLabel>
              <Select
                labelId='demo-simple-select-standard-label'
                id='demo-simple-select-standard'
                value={colors}
                onChange={toggleMode}
                label='Theme'
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