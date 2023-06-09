import React from 'react';
import { Typography, Container } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import './style.css';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';

function Contact() {
  console.log('Contact Me')
  const { colors } = useContext(ThemeContext);
  const borderColor = '#FAEBD7';

  const buttonStyle = {
    backgroundColor: colors.primary,
    width: '90px',
    color: colors.secondary,
    '&:hover': {
      backgroundColor: colors.headlinerText,
      border: `1px solid ${borderColor}`
    }
  }

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container className='letterContain' maxWidth='lg'>
      <Typography sx={{
        textAlign: 'center !important',
        color: colors.primary
      }}
      >
        <h1 className='letterTop'>
          Get in touch || Stay in touch.
        </h1>
        <body1 className='letterMiddle'>
          Thank you for visiting my Developer Portfolio.
          <br></br>
          If you have any questions or would like to connect, please reach out.
          <p>  </p>
        </body1>
        <body2 className='signature'>- Sunny Ovson</body2>
        <br></br><br></br>
      </Typography>
      <Stack
        direction='row'
        spacing={4}
        sx={{
          mt: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
          marginRight: '-17px',
          marginBottom: '-10px'
        }}
      >
        <h4>GitHub</h4>
        <StarPurple500Icon />
        <h4>Email</h4>
        <StarPurple500Icon />
        <h4>LinkedIn</h4>
      </Stack>
      <Stack
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}
        spacing={3}
        sx={{
          mt: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.tertiary,
          height: '4rem',
        }}
      >
        <Button
          variant='contained'
          sx={buttonStyle}
          onClick={() => handleRedirect('https://github.com/SunnyOhK/sunny-ovson-react-portfolio.git')}
        >
          <GitHubIcon />
        </Button>
        <Button
          variant='contained'
          sx={buttonStyle}
          onClick={() => handleRedirect('mailto:127900916+SunnyOhK@users.noreply.github.com')}
        >
          <EmailIcon />
        </Button>
        <Button
          variant='contained'
          sx={buttonStyle}
          onClick={() => handleRedirect('https://www.linkedin.com/in/sunnyovson/')}
        >
          <LinkedInIcon />
        </Button>
      </Stack>

    </Container>


  )
};

export default Contact;