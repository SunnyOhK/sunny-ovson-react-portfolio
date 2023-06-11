import React, { useContext } from "react";
import Card from '@mui/material/Card';
import './style.css';
import { ThemeContext } from "../../providers/ThemeProvider";
import ProfileImg from "../ProfileImg/ProfileImg";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


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
            <Grid xs={3}>
              <ProfileImg />
            </Grid>
            <Grid xs={13} sx={{
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '3em',
              paddingRight: '20em'
            }}>
              <Typography variant="h3">
                Welcome to my Portfolio!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  )
};

export default Hero;