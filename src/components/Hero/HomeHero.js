import React, { useContext } from "react";
import Card from '@mui/material/Card';
import './style.css';
import { ThemeContext } from "../../providers/ThemeProvider";
import ProfileImg from "../ProfileImg/ProfileImg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function Hero() {
  const { colors } = useContext(ThemeContext);
  console.log(colors);

  return (
    <div className='hero-container'>
      <Card sx={{
        width: '99vw',
        backgroundColor: colors.tertiary,
        height: '32em',
        marginTop: '1.1em',
        marginBottom: '-0.9em',
      }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid
              xs={3}
              sx={{
                alignItems: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
                paddingLeft: '5em'
              }}
            >
              <ProfileImg />
            </Grid>
            <Grid xs={13} sx={{
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '3em',
              paddingRight: '2em'
            }}>
              <Container
                className='letterContainer'
                maxWidth='lg'
              >
                <Typography sx={{
                  textAlign: 'center !important',
                  color: colors.primary,
                  paddingLeft: '2em',
                  paddingRight: '2em',
                }}
                >
                  <h1 className="letterHead">
                    Welcome to my portfolio!                  </h1>
                  <body1 className="letterBody">
                    My updated resume is currently under construction.
                    se reach out to me directly for resume details.
                    <p>  </p>
                  </body1>
                  <body2 className="signature">- Sunny Ovson</body2>
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