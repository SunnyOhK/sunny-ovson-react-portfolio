import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import './style.css';
import { ThemeContext } from '../../providers/ThemeProvider';
import ProfileImg from '../ProfileImg/ProfileImg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Hero() {
  const { colors } = useContext(ThemeContext);
  console.log(colors);

  return (
    <div className='heroContainer'>
      <Card
        sx={{
          display: 'flex',
          backgroundColor: colors.tertiary,
          height: 'auto',
          marginTop: '1.1em',
          marginBottom: '-0.9em',
          paddingBottom: '2em'
        }}
      >
        <Box sx={{ flexGrow: 1 }} className='heroCard'>
          <Grid container spacing={0} columns={12}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}
            >
              <ProfileImg />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={9}
              xl={9}
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Container className='letterContainer'>
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: colors.primary,
                  }}
                >
                  <h1 className='letterHead'>
                    Welcome to my portfolio!
                  </h1>
                  <h2 style={{ marginTop: '-18px', letterSpacing: '3px' }}>⭒  ✬  🔆  ✬  ⭒</h2>
                  <body1 className='letterBody'>
                    I am a Full Stack MERN Web Developer based in Austin, TX.
                  </body1>
                  <br></br><br></br>
                  <body2 className='letterSub'>
                    Take a look around! You can learn more about me and how I got into coding, see a few of my recent projects, and snag a copy of my resume. And, of course, you can check out my GitHub repository or connect on LinkedIn.
                    <p>  </p>
                  </body2>
                  <body2 className='signature'>- Sunny Ovson</body2>
                  <br></br><br></br>
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  )
};

export default Hero;