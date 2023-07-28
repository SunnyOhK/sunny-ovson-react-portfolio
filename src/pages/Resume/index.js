import React from 'react';
import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import './style.css';
import ResumePreview from '../../images/resume-sunny.png';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import PDFResume from '../../pdf/sunny-resume.pdf'


function Resume() {
  console.log('Contact Me')
  const { colors } = useContext(ThemeContext);

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='fullWidthContainer' style={{ backgroundColor: colors.tertiary }}>

      <Typography sx={{
        textAlign: 'center !important',
        color: colors.resumeText
      }}
      >
          <div className='resumeContainer'>
          <img
            src={ResumePreview}
            alt='resume-preview'
            className='resumePreview' />
        </div>
        <br></br>
        <IconButton
          aria-label='export'
          size='large'
          onClick={() => handleRedirect(PDFResume)}
          sx={{ backgroundColor: '#faebd72a' }} >
          <FileDownloadOutlinedIcon sx={{ fontSize: ['24px', '34px'], color: colors.resumeText }} />
        </IconButton>
        <br></br>
        <body2 className='signature'>- Sunny Ovson</body2>
        <br></br>
      </Typography>

    </div>
  )
};

export default Resume;