import React from "react";
import Card from '@mui/material/Card';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import { IconButton } from "@mui/material";
import Typography from '@mui/material/Typography';
import './style.css';
// import { Icon } from "@mui/material";

function Hero() {
  return (
    <div className='hero-container'>
      <Card sx={{
        width: '99vw',
        backgroundColor: '#78586F',
        height: '20em',
        marginTop: '1.5em',
      }}
      >
        <CardContent sx={{
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardMedia
        sx={{ height: '220px' }}
        image='./images/profile-pic.png'
        />

        <CardActions sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <IconButton aria-label="next">
            <NavigateNextIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
};

export default Hero;