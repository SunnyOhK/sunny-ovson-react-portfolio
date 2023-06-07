import React from "react";
import Card from '@mui/material/Card';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import { IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import './style.css';
import ImgCarousel from "../ImgCarousel/ImgCarousel";
// import { Icon } from "@mui/material";


function Hero() {
  return (
    <div className='hero-container'>
      <Card sx={{
        width: '99vw',
        backgroundColor: '#78586F',
        height: '27em',
        marginTop: '1.1em',
      }}
      >
        <CardContent sx={{
          textAlign: 'center'
        }}>
          <Typography variant="h6" color="text.secondary">
            Headliner
          </Typography>
        </CardContent>

        <ImgCarousel />

      </Card>
    </div>
  )
};

export default Hero;