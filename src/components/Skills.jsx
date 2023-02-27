import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';
import { motion } from 'framer-motion';

const icon = [
  'JavaScript',
  'TypeScript',
  'React JS',
  'Next JS',
  'Redux',
  'Html',
  'Css',
  'Sass',
  'Git',
  'Firebase',
  'Figma',
  'Photoshop',
];

export const SkillsBlock = ({}) => {
  return (
    <Box id={'skills'} className={'skills_wrapper'}>
      <Container fixed>
        <Box className={'skills_text'}>
          <Typography variant="h1">Skills</Typography>
        </Box>
        <Grid container justifyContent="center" alignItems="center">
          {icon.map((el, index) => {
            return (
              <Box className={'skills-item'}>
                <motion.div
                  whileInView={{ scale: [0.5, 1] }}
                  whileHover={{ scale: [1, 1.2] }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={require(`./assets/images/icon_skills/${el}.png`)} key={index} />
                  <Typography variant="h6">{el}</Typography>
                </motion.div>
              </Box>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
