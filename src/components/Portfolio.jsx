import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dataJson from './data/dataJson.json';

export const PortfolioBlock = ({ light }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataJson);
  }, []);

  return (
    <Box id={'portfolio'} className={'portfolio_wrapper'}>
      <Container fixed>
        <Box className={'portfolio_text'}>
          <Typography variant="h1">Portfolio</Typography>
        </Box>
        <Box>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            {data.map((item, index) => {
              return (
                <Box key={index} className={'portfolio-item'}>
                  <Box className="portfolio-img">
                    <img src={require(`${item.img}`)} />
                    <motion.div
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                        staggerChildren: 0.5,
                      }}
                      className="portfolio-hover"
                    >
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0, 1] }}
                          whileHover={{ scale: [1, 0.9] }}
                          transition={{ duration: 0.25 }}
                        >
                          <VisibilityIcon sx={{ fontSize: 40 }} />
                        </motion.div>
                      </a>
                      <a href={item.git} target="_blank" rel="noreferrer">
                        <motion.div
                          whileInView={{ scale: [0.8, 1] }}
                          whileHover={{ scale: [1, 0.8] }}
                          transition={{ duraction: 0.4 }}
                        >
                          <GitHubIcon sx={{ fontSize: 40, ml: 3 }} />
                        </motion.div>
                      </a>
                    </motion.div>
                  </Box>
                  <div className="portfolio-content">
                    <h3 style={{ color: 'black' }}>{item.title}</h3>
                    <p style={{ color: 'black' }}>{item.description}</p>
                  </div>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
