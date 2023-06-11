import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import { ThemeContext } from "../../providers/ThemeProvider";
// import { useContext } from "react";
import PatternOne from '../../images/pattern-1.jpg';
import PatternTwo from '../../images/pattern-2.jpg';
import PatternThree from '../../images/pattern-3.jpg';
import PatternFour from '../../images/pattern-4.jpg';
import Container from "@mui/material/Container";


function Projects() {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const itemData = [
    {
      img: PatternOne,
      title: 'Quizify',
      subtitle: 'GH1',
      url: 'https://github.com/SunnyOhK/QuiZify.git'
    },
    {
      img: PatternTwo,
      title: `Snack n' Dash`,
      subtitle: 'GH2',
      url: 'https://github.com/SunnyOhK/snack-n-dash.git'
    },
    {
      img: PatternThree,
      title: 'Ready. Pet. Go!',
      subtitle: 'GH3',
      url: 'https://github.com/SunnyOhK/QuiZify.git'
    },
    {
      img: PatternFour,
      title: 'COMING SOON',
      subtitle: 'GH4',
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
        width: '70%',
        height: 'auto',
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
            title={item.title}
            subtitle={item.subtitle}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.74)' }}
                aria-label={`info about ${item.title}`}
                onClick={() => handleRedirect(`${item.url}`)}
              >
                <OpenInNewIcon />
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