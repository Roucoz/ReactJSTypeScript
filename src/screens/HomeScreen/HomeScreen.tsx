import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { useStyles } from "./HomeScreen.styles";

function HomeScreen() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography variant="h5" color="secondary" className={classes.header}>
          Welcome!
          <Typography variant="body2" color="black" >
            We are ready to go.. we have installed material ui with Theme.
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" style={{ marginRight: 20 }}>Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
      </Container>
    </div>
  );
}

export default HomeScreen;