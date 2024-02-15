import React, { useContext } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../../providers/ThemeProvider';
import './style.css';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Footer() {
  const { colors } = useContext(ThemeContext);
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container maxWidth='100vw' sx={{
      backgroundColor: colors.primary,
    }}>
      <div className='footIcons'>
        <Tooltip
          title='GitHub'
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -20],
                  },
                },
              ],
            },
          }}
        >
          <IconButton
            onClick={() => handleRedirect('https://github.com/SunnyOhK/sunny-ovson-react-portfolio.git')}
          >
            <GitHubIcon
              fontSize='large'
              className='icon'
              sx={{ color: colors.quaternary }} />
          </IconButton>
        </Tooltip>

        <Tooltip
          title='Email'
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -20],
                  },
                },
              ],
            },
          }}
        >
          <IconButton
            onClick={() => handleRedirect('mailto:127900916+SunnyOhK@users.noreply.github.com')}
          >
            <EmailIcon
              fontSize='large'
              className='icon'
              sx={{ color: colors.quaternary }} />
          </IconButton>
        </Tooltip>

        <Tooltip
          title='LinkedIn'
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -20],
                  },
                },
              ],
            },
          }}
        >
          <IconButton
            onClick={() => handleRedirect('https://www.linkedin.com/in/sunnyovson/')}
          >
            <LinkedInIcon
              fontSize='large'
              className='icon'
              sx={{ color: colors.quaternary }} />
          </IconButton>
        </Tooltip>
      </div>
      <Typography className='footText' sx={{
        color: colors.quaternary
      }}>
        🔆 © 2023 Sunny Ovson WebDev 🔆
      </Typography>
    </Container>
  )
};

export default Footer;