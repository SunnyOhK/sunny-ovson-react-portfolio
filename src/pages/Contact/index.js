import React from "react";
import { Typography, Container } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import './style.css';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function Contact() {
  console.log('Contact Me')
  const { colors } = useContext(ThemeContext);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container className='letterContainer' maxWidth='lg'>
      <Typography sx={{
        textAlign: 'center !important',
        color: colors.primary
      }}
      >
        <h1 className="letterHead">
          Get in touch. Stay in touch.
        </h1>
        <body1 className="letterBody">
          Thank you for visiting my Developer Portfolio.
          <br></br>
          If you have any questions or would like to connect, please reach out.
          <p>  </p>
        </body1>
        <body2 className="signature">- Sunny Ovson</body2>
        <br></br><br></br>
      </Typography>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          mt: 'auto',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>

    </Container>


  )
};

export default Contact;