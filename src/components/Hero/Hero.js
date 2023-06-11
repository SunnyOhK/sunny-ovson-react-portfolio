import React, { useContext } from "react";
import Card from '@mui/material/Card';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import './style.css';
// import { Icon } from "@mui/material";
import { ThemeContext } from "../../providers/ThemeProvider";
import HeroCarousel from "../ImgCarousel/HeroCarousel";


function Hero() {
  const { colors } = useContext(ThemeContext);
  console.log(colors);

  return (
    <div className='hero-container'>
      <Card sx={{
        width: '99vw',
        backgroundColor: colors.tertiary,
        height: 'auto',
        marginTop: '1.1em',
        marginBottom: '-0.9em'
      }}
      >
        <HeroCarousel />
      </Card>
    </div>
  )
};

export default Hero;