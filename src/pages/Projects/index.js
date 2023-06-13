import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PatternOne from '../../images/pattern-1.jpg';
import PatternTwo from '../../images/pattern-2.jpg';
import PatternThree from '../../images/pattern-3.jpg';
import PatternFour from '../../images/pattern-4.jpg';
import Container from "@mui/material/Container";
import './style.css'


function Projects() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const itemData = [
    {
      img: PatternOne,
      title: 'Quizify',
      subtitle: 'Full-Stack',
      url: 'https://github.com/SunnyOhK/QuiZify.git',
      github: ''
    },
    {
      img: PatternTwo,
      title: `Snack n' Dash`,
      subtitle: 'Front-End',
      url: 'https://github.com/SunnyOhK/snack-n-dash.git',
      github: ''
    },
    {
      img: PatternThree,
      title: 'Ready. Pet. Go!',
      subtitle: 'MERN Stack',
      url: 'https://github.com/SunnyOhK/QuiZify.git',
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
          width: ['98%' , '95%', '90%', '80%'],
          height: 'auto',
          '& .MuiImageListItem-root': {
            margin: '10px',
          }
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
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
                  <OpenInNewIcon className="openIcon" sx={{ marginRight: '15px' }}/>
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