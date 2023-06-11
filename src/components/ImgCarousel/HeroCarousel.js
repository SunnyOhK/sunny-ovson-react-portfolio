import React, { useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CardActions from '@mui/material/CardActions';
import { IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import BusinessWoman from '../../images/businesswoman.png';
import Stressed from '../../images/sales2.png';
import Quit from '../../images/quit.png';
import Coder from '../../images/coding.png';
import Me from '../../images/this-is-me.png';
import Finn from '../../images/finn.png';
import Annabelle from '../../images/annabelle-1.png';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


function HeroCarousel() {

  const [index, setIndex] = useState(0);
  const myImages = [
    {
      image: Me,
      headline: 'Let me tell you a story...',
      text: 'This is me, Sunny.',
      subtext: 'I am a full-stack MERN Web Developer with a passion for the creativity of UX/UI.'
    },
    {
      image: Annabelle,
      headline: 'Annabelle',
      text: `This is Annabelle, my eldest fur child. She found me when I was visiting a shelter in Tupelo, MS circa August, 2011.`,
      subtext: `And she's graciously allowed me to live with her and pay her bills ever since.`
    },
    {
      image: Finn,
      headline: 'Finn',
      text: 'This is Finn. He adopted me in Austin, TX on 12/20/12 (the night before the world was predicted to end).',
      subtext: 'Hence the name... "Le Fin!" / "The end!"'
    },
    {
      image: BusinessWoman,
      headline: 'Career History',
      text: 'For many years, I worked my way up the Sales & Marketing professional ladder.',
      subtext: 'And I was successful...financially speaking.'
    },
    {
      image: Stressed,
      headline: 'How it felt',
      text: 'But this life of small talk and schmoozing was exhausting and unfulfilling for an introvert whose brain craves analytical reasoning.',
      subtext: 'I was always more intrigued by what our Dev Team was working on than how I could "upsell" a client.'
    },
    {
      image: Quit,
      headline: 'Leap of faith',
      text: `I quit my job and left the industry to find out what really makes me tick.`,
      subtext: `After all, life is too short (& too long) to do something everyday that you don't love!`
    },
    {
      image: Coder,
      headline: 'Back to school',
      text: `After about the 70th person told me, "You know what you'd be good at...CODING," I enrolled in Coding Bootcamp at UT Austin.`,
      subtext: 'And, immediately, my mind came alive with excitement and eagerness to learn more.'
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

  function beforeImage() {
    if (index === myImages.length - 1) {
      setIndex(0)
    } else if (index === 0) {
      setIndex(0)
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
    } 
  }

  return (
    <div>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          textAlign: 'center',
          marginTop: '0.8em',
          marginBottom: '0.7em',
          fontSize: '30px',
          textTransform: 'uppercase'
        }}
      >
        {myImages[index].headline}
      </Typography>
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            fontSize: '21px',
            backgroundColor: '#faebd73f',
            width: '55%',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          {myImages[index].text}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            fontSize: '21px',
            backgroundColor: '#faebd73f',
            width: '55%',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          {myImages[index].subtext}
        </Typography>
      </CardContent>
      <CardActions sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <IconButton
          aria-label="back"
          onClick={beforeImage}
          sx={{
            marginTop: '-0.9em'
          }}
        >
          <NavigateBeforeIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="next"
          onClick={rotateImage}
          sx={{
            marginTop: '-0.9em'
          }}
        >
          <NavigateNextIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </div>
  )
};

export default HeroCarousel;
