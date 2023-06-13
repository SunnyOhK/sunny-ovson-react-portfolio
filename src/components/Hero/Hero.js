import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import './style.css';
import { ThemeContext } from '../../providers/ThemeProvider';
import HeroCarousel from '../ImgCarousel/HeroCarousel';


function Hero() {
  const { colors } = useContext(ThemeContext);
  console.log(colors);

  return (
    <div className='heroContainer'>
      <Card className='aboutHeroCard' sx={{
        backgroundColor: colors.tertiary,
        height: 'auto',
        marginTop: '1.1em',
        marginBottom: '-0.9em',
      }}
      >
        <HeroCarousel />
      </Card>
    </div>
  )
};

export default Hero;