import React, { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CardActions from '@mui/material/CardActions';
import { IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import carImageA from '../../images/ralph-pjs.png';
import carImageB from '../../images/ralph-banana.png';
import carImageC from '../../images/ralph-nose.png';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function ImgCarousel() {

  const [index, setIndex] = useState(0);
  const myImages = [
    {
      image: carImageA,
      text: '1 - Some kind of subtitle.'
    },
    {
      image: carImageB,
      text: '2 - Some kind of subtitle.'
    },
    {
      image: carImageC,
      text: '3 - Some kind of subtitle.'
    },
  ]

  function rotateImage() {
    if (index === myImages.length - 1) {
      setIndex(0)
    } else {
      let newIndex = index + 1
      setIndex(newIndex);
    }
  };

  return (
    <div>
      <CardMedia
        component="img"
        height="350px"
        image={myImages[index].image}
        alt="img"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '29em',
          objectFit: 'contain',
          margin: 'auto',
          paddingBottom: '-1em'
        }}
        />
      <CardContent sx={{
        textAlign: 'center'
      }}>
        <Typography variant="subtitle1" color="text.secondary">
          {myImages[index].text}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton aria-label="next" onClick={rotateImage} sx={{
          marginTop: '-0.9em',
        }}
        >
          <NavigateNextIcon />
        </IconButton>
      </CardActions>
    </div>
  )
};

export default ImgCarousel;
