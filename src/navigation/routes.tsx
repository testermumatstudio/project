import * as React from 'react';
import {Routes, Route, Link } from "react-router-dom";
import { useMoralis } from 'react-moralis';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

import Appbar from '@components/appbar';

const Home = React.lazy(() => import('@screens/home'));


export default function Navigator() {

  return (
    <React.Suspense 
    fallback={
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{backgroundColor: '#000000',width: '100%', height: '100%'}}
    >
      <CardMedia
        component="img"
        image={require('@assets/svg/singulart-logo.svg')}
        alt="Singulart Logo"
        sx={{ width: { xs: 150, sm: 150, md: 200, lg: 200, xl: 200 }, objectFit: 'cover', }}
      />
      <CircularProgress
        style={{ 'color': 'white' }}
        sx={{ m: 2 }}
        size="1.5rem"
      />
    </Grid>
    
    }>
      <Appbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </React.Suspense>
  );
};