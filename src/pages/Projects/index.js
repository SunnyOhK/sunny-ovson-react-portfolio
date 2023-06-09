import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";
import PatternOne from '../../images/pattern-1.jpg';
import PatternTwo from '../../images/pattern-2.jpg';
import PatternThree from '../../images/pattern-3.jpg';
import PatternFour from '../../images/pattern-4.jpg';
import Container from "@mui/material/Container";


function Projects() {
  const { colors } = useContext(ThemeContext);

  const itemData = [
    {
      img: PatternOne,
      title: 'Project 1',
      github: 'GH1',
    },
    {
      img: PatternTwo,
      title: 'Project 2',
      github: 'GH2',
    },
    {
      img: PatternThree,
      title: 'Project 3',
      github: 'GH3',
    },
    {
      img: PatternFour,
      title: 'Project 4',
      github: 'GH4',
    }
  ];

  return (
<Container maxWidth='100vw' sx={{
  display: 'flex',
  justifyContent: 'center'
}} >
    <ImageList 
      sx={{ 
        width: 1550, 
        height: 1000,
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
            subtitle={item.github}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
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