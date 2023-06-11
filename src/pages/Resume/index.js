import React from "react";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import './style.css'
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthIcon from '@mui/icons-material/South';


function Resume() {
  console.log('Contact Me')
  const { colors } = useContext(ThemeContext);
  const borderColor = '#FAEBD7';

  return (
    <Container className='letterContainer' maxWidth='lg'>
      <Typography sx={{
        textAlign: 'center !important',
        color: colors.primary
      }}
      >
        <h1 className="letterHead">
          Coming Soon!
        </h1>
        <body1 className="letterBody">
          My updated resume is currently under construction.
          <br></br>
          In the meantime, please reach out to me directly for resume details.   
          <SouthIcon />
          <CallMadeIcon />
          <p>  </p>
        </body1>
        <body2 className="signature">- Sunny Ovson</body2>
        <br></br><br></br>
      </Typography>
    </Container>
  )
};

export default Resume;