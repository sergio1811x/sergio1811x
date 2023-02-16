import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Socials } from './helpers/Social';

export function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            textAlign: 'center',
            padding: '1rem',
            marginTop: `${
              window.innerWidth > 760 ? window.innerHeight - 920 : window.innerHeight - 600
            }px`,
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Socials />
          </Box>
          <Typography variant="h6">sergio1811x / 2023 / ©</Typography>
        </Box>
      </Container>
    </Box>
  );
}
// marginTop: 'calc(10% + 10px)'
