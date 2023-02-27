import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Socials } from './helpers/Social';

export function Footer({}) {
  return (
    <Box id={'footer'} className={'footer_block'}>
      <Container maxWidth="fixed">
        <Box
          sx={{
            textAlign: 'center',
            padding: '1rem',
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
