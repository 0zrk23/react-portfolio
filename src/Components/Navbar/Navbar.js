
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Morf from '../Morf/NavbarMorf';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const linkStyle = {textDecoration: 'none', color: '#273c6d'}

const scrollOffset = -69;

const scrollDuration = 1000;

const pages = ['Home', 'Work', 'About','Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const links = ['LinkedIn Profile','Github Profile']
const linkUrl = [
    'https://www.linkedin.com/in/gustavo-carrillo-1a9141257/',
    'https://github.com/0zrk23'
];
const networkIcons = [faLinkedin,faGithub];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNetwork, setAnchorElNetwork] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleOpenNetworkMenu = (event) => {
    setAnchorElNetwork(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleCloseNetworkMenu = () => {
    setAnchorElNetwork(null);
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="2xl" >
        <Toolbar disableGutters >
          {/* <AdbIcon color='color3'  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: 'none', md: 'flex' , justifyContent: 'center', alignItems: 'center'}, mr: 1 }}>
            {/* <FontAwesomeIcon icon={faCircleNodes} style={{color: "#273c6d"}}/> */}
            <div style={{marginBottom:'10%'}}>
              <Morf scale='15px' duration='20' border='2px solid #273c6d'/>
            </div>

          </Box>
          <Typography
            
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#273c6d',
              textDecoration: 'none',
            }}
            // color='color4'
          >
            REACT PORTFOLIO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              // aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color='color3' />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,key) => (
                <Link key={`${key}`} style={linkStyle} to={`${page}`} spy={true} smooth={true} offset={scrollOffset+15} duration={scrollDuration}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" color='color3'>{page}</Typography>
                    </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box sx={{ display: { xs: 'flex', md: 'none', justifyContent: 'center', alignItems: 'center'}, mr: 1 }}>
            {/* <FontAwesomeIcon icon={faCircleNodes} style={{color: "#354d80"}}/> */}
            <div style={{marginBottom:'10%'}}>
              <Morf scale='15px' duration='20' border='2px solid #273c6d'/>
            </div>
          </Box>
          <Typography
            // color='color3'
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#273c6d',
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,key) => (
                <Link key={page} style={linkStyle} to={`${page}`} spy={true} smooth={true} offset={scrollOffset} duration={scrollDuration}>
                    <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, display: 'block' }}
                        color='color3'
                    >          
                          {page}
                    </Button>
                </Link>
            ))}
          </Box>
  
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              {linkUrl.map((url,index) => {
                return (
                  <Box sx={{mx: 1}} key={index}>
                    <motion.a 
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      initial={{
                        opacity: 0.8,
                      }}
                      whileHover={{
                        opacity: 1,
                      }}
                    >
                      <FontAwesomeIcon icon={networkIcons[index]} style={{fontSize: '30px', color: "#354d80"}}/>
                    </motion.a>
                  </Box>
                )
              })}
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 0}}>
              <Tooltip title='Network Appbar'>
                <IconButton onClick={handleOpenNetworkMenu}>
                  <FontAwesomeIcon icon={faNetworkWired} style={{fontSize: '20px', color: "#354d80"}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: '45px'}}
                id="network-appbar"
                anchorEl={anchorElNetwork}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNetwork)}
                onClose={handleCloseNetworkMenu}
                
              >
                {links.map((link,key) => (
                    <MenuItem key={key} onClick={handleCloseNetworkMenu}>
                      <a style={linkStyle} href={linkUrl[key]} rel="noreferrer" target="_blank">
                        {links[key]}
                      </a>
                    </MenuItem>
                  )
                )}
              </Menu>
            </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;