import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import CarouselExplore from '@components/carousel/carousel-explore';
import CarouselFullWidth from '@components/carousel/carousel-full-width';
import CarouselCollections from '@components/carousel/carousel-hot-collections';
import CarouselLiveAuctions from '@components/carousel/carousel-live-auctions';

import PreFooter from '@components/pre-footer';
import TopSellers from '@components/top-sellers';


export default function Home() {

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#FAF9FA',
          width: "100%",
          alignItems: 'center',
          justifyContent: 'center',
          // maxWidth: 1700,
        }}
      >
        <Grid
          container
          sx={{  backgroundColor: '#FAF9FA',
          width: "100%",
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 1, sm: 1, md: 1 } }}
        >

        <Grid
          item
          xs={12}
          md={6}
          lg={5}
        >

        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
        >

        </Grid>
        
        </Grid>
        
        <Grid
          container
          sx={{  backgroundColor: '#FAF9FA',
          width: "100%",
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 1, sm: 1, md: 1 } }}
        >

        <Grid
          item
          xs={12}
          md={6}
          lg={5}
        >

        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
        >

        </Grid>
        
        </Grid>

      </Box>
    </Box>
  );
};