import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Container, Toolbar, IconButton, Button, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TerminalIcon from '@mui/icons-material/Terminal';
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { ChangeDarkOrLight } from './helpers/ChangeTheme';
import Grid from '@mui/material/Grid';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 6,
    marginTop: theme.spacing(3),
    minWidth: 180,
    color: theme.palette.text.primary,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.35) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 24,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const ThemeButton = styled(Button)(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.button.primary,
  borderRadius: 25,
  height: 44,
  padding: '0 16px',
  zIndex: '10',
}));

export function Header({ light, setLight }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{
          boxShadow: 7,
          display: { xs: 'block', md: 'none', justifyContent: 'space-between ' },
        }}
      >
        <Container maxwidth="sm">
          <Grid>
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon style={{ fontSize: 30 }} />
                </IconButton>
                <StyledMenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <Link to={'about'} spy={true} smooth={true} offset={-130} duration={1000}>
                    <MenuItem onClick={handleClose}>
                      <FaceIcon />
                      <ListItemText>About me</ListItemText>
                    </MenuItem>
                  </Link>
                  <Divider />
                  <Link to={'portfolio'} spy={true} smooth={true} offset={-55} duration={1000}>
                    <MenuItem onClick={handleClose}>
                      <BadgeIcon />
                      <ListItemText>Portfolio</ListItemText>
                    </MenuItem>
                  </Link>
                  <Link to={'skills'} spy={true} smooth={true} offset={-110} duration={1000}>
                    <MenuItem onClick={handleClose}>
                      <TerminalIcon />
                      <ListItemText>Skills</ListItemText>
                    </MenuItem>
                  </Link>

                  <Link to={'footer'} spy={true} smooth={true} offset={-70} duration={1000}>
                    <MenuItem onClick={handleClose}>
                      <AlternateEmailIcon />
                      <ListItemText>Contacts</ListItemText>
                    </MenuItem>
                  </Link>
                </StyledMenu>
              </Box>
              <Box sx={{ mr: -2 }}>
                <ChangeDarkOrLight light={light} setLight={setLight} /> {/*Смена темы*/}
              </Box>
            </Toolbar>
          </Grid>
        </Container>
      </AppBar>

      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{ boxShadow: 7, display: { xs: 'none', md: 'block' } }}
      >
        <Container maxwidth="sm">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="r2312321ow" spacing={1} justifyContent="center">
                <Link to={'about'} spy={true} smooth={true} offset={-320} duration={1000}>
                  <ThemeButton startIcon={<FaceIcon style={{ fontSize: 40 }} />}>
                    About me
                  </ThemeButton>
                </Link>
                <Link to={'portfolio'} spy={true} smooth={true} offset={-58} duration={1000}>
                  <ThemeButton startIcon={<BadgeIcon style={{ fontSize: 40 }} />}>
                    Portfolio
                  </ThemeButton>
                </Link>
                <Link to={'skills'} spy={true} smooth={true} offset={-200} duration={1000}>
                  <ThemeButton startIcon={<TerminalIcon style={{ fontSize: 40 }} />}>
                    Skills
                  </ThemeButton>
                </Link>
                <Link to={'footer'} spy={true} smooth={true} offset={-80} duration={1000}>
                  <ThemeButton startIcon={<AlternateEmailIcon style={{ fontSize: 40 }} />}>
                    Contacts
                  </ThemeButton>
                </Link>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
        <Box sx={{ position: 'absolute', mt: -8, right: 0 }}>
          <ChangeDarkOrLight light={light} setLight={setLight} />
        </Box>
      </AppBar>
    </header>
  );
}
