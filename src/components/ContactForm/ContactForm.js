import React, { useContext, useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../providers/ThemeProvider';
import CheckIcon from '@mui/icons-material/Check';
import './style.css';

function ContactForm() {
  const { colors } = useContext(ThemeContext);
  const [isClicked, setIsClicked] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using emailjs
    emailjs.sendForm(
      'service_ohivlak', // service ID
      'template_orhky27', // template ID
      e.target,
      'RdxXsg_NCsd6ht9mz' // user ID (public key)
    )
      .then((result) => {
        console.log('Email sent successfully:', result);
        // Handle success, e.g., show a success message to the user
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: ''
        });
        setIsClicked(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id='first-name-field'
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onInvalid={() => {
              if (formData.firstName === '') {
                document
                .getElementById('first-name-field')
                .setCustomValidity('First name is required.')
              } else {
                document
                  .getElementById('first-name-field')
                  .setCustomValidity('')
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id='last-name-field'
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onInvalid={() => {
              if (formData.firstName === '') {
                document
                  .getElementById('last-name-field')
                  .setCustomValidity('Last name is required.')
              } else {
                document
                  .getElementById('last-name-field')
                  .setCustomValidity('')
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='email-text-field'
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onInvalid={() => {
              if (formData.firstName === '') {
                document
                  .getElementById('email-text-field')
                  .setCustomValidity('Email is required.')
              } else {
                document
                  .getElementById('email-text-field')
                  .setCustomValidity('')
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} className='btnPosition'>
          {isClicked ? (
            <div>
              <CheckIcon sx={{
              fontSize: {
                xs: '200%',
                md: '220%',
              },
              color: `${colors.primary}`,
            }}/>
            <Typography sx={{
              fontFamily: `'Italianno', sans-serif`,
              fontSize: {
                xs: '200%',
                md: '260%'
              },
            }}>Thank you!</Typography>
            </div>
          ) : (
            <Button
              className='submitBtn'
              type="submit"
              variant="text"
              sx={{
                color: colors.primary,
                width: {
                  xs: '30%',
                  md: '18%'
                },
                fontSize: {
                  xs: '100%',
                  sm: '140%',
                },
                paddingLeft: '30px',
                paddingRight: '30px',
                borderRadius: '40px',
                border: `2px dashed ${colors.primary}`,
                background: `linear-gradient(90deg, ${colors.tertiary}, ${colors.quaternary})`,
                '&:hover': {
                  background: `linear-gradient(90deg, ${colors.quaternary}, ${colors.tertiary})`,
                },
              }}>
              Submit
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;