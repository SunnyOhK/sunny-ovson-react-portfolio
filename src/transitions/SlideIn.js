import React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

function SlideTransition() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}

export default SlideTransition;