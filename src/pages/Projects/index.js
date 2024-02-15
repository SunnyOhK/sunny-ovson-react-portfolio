import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PatternOne from '../../images/pattern-1.jpg';
import PatternTwo from '../../images/pattern-2.jpg';
import PatternThree from '../../images/pattern-3.jpg';
import PatternFour from '../../images/pattern-4.jpg';
import Quizify from '../../images/quizify.png';
import RPG from '../../images/ready-pet-go.png';
import SND from '../../images/snack-n-dash.png';
import Container from '@mui/material/Container';
import './style.css'


function Projects() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const itemData = [
    {
      img: Quizify,
      title: 'Quizify',
      subtitle: 'Full-Stack',
      url: 'https://github.com/SunnyOhK/QuiZify.git',
      github: ''
    },
    {
      img: SND,
      title: `Snack n' Dash`,
      subtitle: 'Front-End',
      url: 'https://github.com/SunnyOhK/snack-n-dash.git',
      github: ''
    },
    {
      img: RPG,
      title: 'Ready. Pet. Go!',
      subtitle: 'MERN Stack',
      url: 'https://ready-pet-go-835e6edf1caa.herokuapp.com/home',
      github: ''
    },
    {
      img: PatternFour,
      title: 'COMING SOON',
      subtitle: 'TBD',
      url: 'https://github.com/SunnyOhK',
      github: ''
    }
  ];

  return (
    <Container maxWidth='1800px' sx={{
      display: 'flex',
      justifyContent: 'center',
      height: 'auto'
    }} >
      <ImageList
        sx={{
          width: ['98%', '95%', '90%', '80%'],
          height: 'auto',
          '& .MuiImageListItem-root': {
            margin: '10px',
          }
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}
            sx={{
              height: '400px !important',
              overflow: 'hidden',
              '&:hover img': {
                animation: 'scroll 5s linear infinite',
              },
              '@keyframes scroll': {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(calc(-100% + 300px))' },
                '100%': { transform: 'translateY(-200px)' },
              },
            }}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading='lazy'
              style={{
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <ImageListItemBar
              title={
                <span className='projectTitle'>{item.title}</span>}
              subtitle={
                <span className='projectSubtitle' style={{ marginLeft: '10px' }}>{item.subtitle}</span>}

              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.74)' }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => handleRedirect(`${item.url}`)}
                >
                  <OpenInNewIcon className='openIcon' sx={{ marginRight: '15px' }} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Projects;