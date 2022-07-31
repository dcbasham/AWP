import React from 'react';
import { Container, Grid } from '@mui/material';
import Description from './Description';
import IconMenu from './IconMenu';

export default function DescriptionMenu() {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <IconMenu />
      </Grid>
      <Grid item>
        <Description />
      </Grid>
    </Grid>
  );
}
