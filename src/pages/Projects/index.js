import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";


function Projects() {
  const { colors } = useContext(ThemeContext);

  const itemData = [
    {
      img: '../../../public/images/pattern-1.jpg',
      title: 'Project 1',
      github: 'GH1',
    },
    {
      img: '../../../public/images/pattern-2.jpg',
      title: 'Project 2',
      github: 'GH2',
    },
    {
      img: '../../../public/images/pattern-3.jpg',
      title: 'Project 3',
      github: 'GH3',
    },
    {
      img: '../../../public/images/pattern-4.jpg',
      title: 'Project 4',
      github: 'GH4',
    }
  ];

  return (
    <ImageList 
      sx={{ 
        width: 800, 
        height: 650,
        }}
        >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
  );
}

export default Projects;