import React, { useState } from "react";
import ProfileOne from '../../images/profile-pic.png'
import ProfileTwo from '../../images/profile-pic2.png'
import ProfileThree from '../../images/ralph-nose.png'
import ChangeIcon from '../../images/change-icon.png'
import './style.css'

function ProfileImg() {

  const [index, setIndex] = useState(0);
  const profileImages = [
    {
      image: ProfileOne,
      title: 'Headshot'
    },
    {
      image: ProfileTwo,
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
    <div>
      <img
        className='profilePic'
        src={profileImages[index].image}
        alt={profileImages[index].title}
        onClick={switchImage}
      />
      <img 
        src={ChangeIcon}
        alt='changeIcon'
        className='changeIcon' />
    </div>
  )
};

export default ProfileImg;