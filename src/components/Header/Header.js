import React, { useContext } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeContext } from "../../providers/ThemeProvider";

function Header() {
  const { colors } = useContext(ThemeContext);
  
  return (
    <Container sx={{
      maxWidth: '100vw !important',
      height: ['8em', '11em'],
      backgroundColor: colors.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}
    >
      <Typography sx={{
        color: '#EEE8E8',
        fontFamily: 'Italianno',
        fontSize: { xs: '5rem', md: '6.5rem', lg: '8.5rem'},
      }}
      >
        Sunny Ovson
      </Typography>
    </Container>
  );
}

export default Header;