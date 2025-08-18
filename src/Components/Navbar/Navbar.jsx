import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  InputBase,
  Drawer,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import Logo from '../../assets/LogoImages/logo.png';

const Search = styled('div')({
  position: 'relative',
  borderRadius: '4px',
  backgroundColor: '#f1f1f1',
  marginLeft: '16px',
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  alignItems: 'center',
});

const SearchIconWrapper = styled('div')({
  position: 'absolute',
  pointerEvents: 'none',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
});

const Input = styled(InputBase)({
  paddingLeft: '30px',
  width: '100%',
});

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(500px)',
        color: 'black',
        overflowX: 'hidden',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centering the content
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center the content within this box
            maxWidth: '1200px', // Optional: Limit the width for larger screens
            width: '100%',
          }}
        >
          {/* Logo and Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src={Logo}
              alt='Logo'
              style={{ height: '40px', width: 'auto', cursor: 'pointer' }}
            />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
                marginLeft: '16px',
              }}
            >
              <Button color='inherit'>Courses</Button>
              <Button color='inherit'>About Us</Button>
              <Button color='inherit'>Contact Us</Button>
            </Box>
          </Box>

          {/* Search Icon and Search Bar */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}
          >
            {searchBarOpen ? (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <Input
                  placeholder='Search...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <IconButton color='inherit' onClick={toggleSearchBar}>
                  <CloseIcon />
                </IconButton>
              </Search>
            ) : (
              <IconButton color='inherit' onClick={toggleSearchBar}>
                <SearchIcon />
              </IconButton>
            )}
          </Box>

          {/* Login and Signup Buttons (Desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Sign Up</Button>
          </Box>

          {/* Mobile Menu Toggle Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color='inherit'
              onClick={handleMobileMenuToggle}
              aria-label='menu'
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor='right'
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        sx={{
          '& .MuiDrawer-paper': {
            width: '250px',
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6'>Menu</Typography>
          <IconButton onClick={closeMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button onClick={closeMobileMenu}>Courses</Button>
          <Button onClick={closeMobileMenu}>About Us</Button>
          <Button onClick={closeMobileMenu}>Contact Us</Button>
          <Button onClick={closeMobileMenu}>Login</Button>
          <Button onClick={closeMobileMenu}>Sign Up</Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
