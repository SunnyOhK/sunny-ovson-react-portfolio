import React, { useState } from "react";
import ProfileOne from '../../images/profile-pic.png'
import ProfileTwo from '../../images/profile-pic2.png'
import ProfileThree from '../../images/ralph-pjs.png'
import ChangeIcon from '../../images/change-icon.png'
import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import './style.css'

function ProfileImg() {

  const [index, setIndex] = useState(0);
  const profileImages = [
    {
      image: ProfileTwo,
      title: 'Headshot'
    },
    {
      image: ProfileOne,
      title: 'Nascar'
    },
    {
      image: ProfileThree,
      title: 'Ralph Wiggum'
    }
  ]

  function switchImage() {
    if (index === profileImages.length - 1) {
      setIndex(0)
    } else {
      let newIndex = index + 1
      setIndex(newIndex)
    }
  };
  return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            className='profilePic'
            src={profileImages[index].image}
            alt={profileImages[index].title}
          />
          <Button
            variant='text'
            className="changeBtn"
            sx={{
              width: '37px',
              height: '37px',
              minWidth: '32px',
              minHeight: '32px',
              borderRadius: '50%',
              marginTop: '6px'
            }}>
            <img
              src={ChangeIcon}
              alt='changeIcon'
              className='changeIcon'
              onClick={switchImage}
            />
          </Button>
        </div>
  )
};

export default ProfileImg;