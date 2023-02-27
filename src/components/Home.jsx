import React, { useEffect, useRef, useState } from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Slide from '@mui/material/Slide';
import { Background } from './helpers/background';

export function Home({ light }) {
  const [checked, setChecked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);

  const breakpoint = 1200;

  useEffect(() => {
    setChecked(true);
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
      let lengthDiv = document.getElementsByClassName('ball').length; //кол-во летающих обьектов
      if (lengthDiv > 60) {
        for (let i = 1; i < 51; i++) {
          document.getElementsByClassName('ball')[i].remove();
        }
      }
    };
  }, [light, width]);

  return (
    <div className={'home_wrapper'} id={'about'}>
      {width > breakpoint && <Background />}
      <Box sx={{ mt: 14 }}>
        <Container maxwidth="sm">
          <Box
            sx={{
              mt: 32,
              mb: 14,
              display: { xs: 'none', md: 'none', lg: 'block' },
            }}
          >
            <Grid container direction="row" spacing={2} alignItems="center" justifyContent="center">
              <Slide direction="right" in={checked} container={containerRef.current}>
                <Grid item xs={12} md={8}>
                  <Box>
                    <Typography variant="h1">
                      <b>Hey there👋</b>
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h2">My name is</Typography>
                  </Box>
                  <Typography variant="h2">Sergey Lazarkov</Typography>
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h3">
                      <b>And I'm a Frontend Developer</b>
                    </Typography>
                  </Box>
                </Grid>
              </Slide>
              <Slide direction="left" in={checked} container={containerRef.current}>
                <Grid item xs={12} md={4}>
                  <Avatar
                    alt="Avatar"
                    src="https://i.ibb.co/hVhFsDd/IMG-20230214-003934-003-01-01.jpg"
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Grid>
              </Slide>
            </Grid>
          </Box>
          <Box sx={{ mt: 16, mb: 10, display: { lg: 'none' } }}>
            <Grid
              container
              spacing={5}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Slide direction="left" in={checked} container={containerRef.current}>
                <Grid item xs={12} md={12}>
                  <Box>
                    <Box>
                      <Typography variant="h1" align="center">
                        <b>Hey there👋</b>
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h2" align="center">
                        My name is Sergey Lazarkov
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Slide>
              <Slide direction="right" in={checked} container={containerRef.current}>
                <Grid item xs={12} md={12}>
                  <Avatar
                    alt="Avatar"
                    src="https://i.ibb.co/hVhFsDd/IMG-20230214-003934-003-01-01.jpg"
                    sx={{ width: 240, height: 240 }}
                  />
                </Grid>
              </Slide>
            </Grid>
            <Slide direction="up" in={checked} container={containerRef.current}>
              <Grid item xs={12} md={12}>
                <Box sx={{ mt: 5 }}>
                  <Box>
                    <Typography variant="h3" align="center">
                      <b>And I'm a Frontend Developer</b>
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Slide>
          </Box>
          <Box sx={{ width: 200 }}></Box>
        </Container>
      </Box>
    </div>
  );
}

//<Slide direction="left" in={checked} container={containerRef.current}>

//</Slide>;
