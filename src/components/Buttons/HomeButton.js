import React from "react";
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { ThemeContext } from "../../providers/ThemeProvider";
import { PageContext } from "../../providers/PageProvider";


function HomeButton() {
  const { colors } = useContext(ThemeContext);
  const { togglePage } = useContext(PageContext);
  return (
    <IconButton
      label="Home"
      size="large"
      onClick={() => togglePage("Home")}
      sx={{
        display: { xs: "flex", md: "flex" },
        color: colors.secondary,
        marginRight: 'auto',
      }}
    >
      <HomeOutlinedIcon
        sx={{
          height: { xs: '1.2em', md: '1.5em', lg: '1.8em' },
          width: { xs: '1.2em', md: '1.5em', lg: '1.8em' }
        }}
      />
    </IconButton>
  )
};

export default HomeButton; 