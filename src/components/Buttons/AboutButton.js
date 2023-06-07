import React, { useState } from "react";
import { Button, Snackbar, Alert } from "@mui/material";


function NavigationButtons() {

  const labels = [
    {
      name: 'About',
      message: 'A Few Things About Sunny',
      action: () => {
        console.log('About button clicked.')
      }
    },
    {
      name: 'Projects',
      message: 'Just a Few of My Projects...',
      action: () => {
        console.log('Projects button clicked.')
      }
    },
    {
      name: 'Resume',
      message: 'Marketing Pro Turned Up-&-Coming Dev Master',
      action: () => {
        console.log('Resume button clicked.')
      }
    },
    {
      name: 'Contact',
      message: 'Get in Touch!',
      action: () => {
        console.log('Contact button clicked.')
      }
    }
  ];

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
    <div>
      {labels.map((label) => (
        <Button
          key={label.name}
          sx={{
            color: 'white',
            fontSize: '18px',
            paddingLeft: '17px'
          }}
          onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
        >
          {label.name}
        </Button>
      ))}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {labels.find((label) => label.name === horizontal)?.message}
        </Alert>
      </Snackbar>
    </div>
  )
};

export default NavigationButtons;