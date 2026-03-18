import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check for scroll to add background if needed (optional feature for usability)
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20; // Reduced threshold for mobile snappiness
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: '#1a1a1a', color: 'white' }}>
            <Typography variant="h4" sx={{ my: 4, fontFamily: '"Playball", "Brush Script MT", cursive', color: '#ffb300' }}>
                Xe Bon
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ justifyContent: 'center' }}>
                        <Button
                            component={Link}
                            to={item.path}
                            sx={{
                                color: 'white',
                                fontSize: '1.2rem',
                                py: 2
                            }}
                        >
                            {item.label}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            component="nav"
            position="fixed"
            elevation={scrolled ? 4 : 0}
            sx={{
                bgcolor: scrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease-in-out',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
                py: 1
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ position: 'relative', justifyContent: 'center', height: '80px' }}>

                    {/* Logo Area - Absolute Left */}
                    <Box sx={{ position: 'absolute', left: 0, display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h5"
                            component={Link}
                            to="/"
                            sx={{
                                fontFamily: '"Outfit", sans-serif', // Clean minimalist font
                                fontWeight: 700,
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                fontSize: '1.5rem',
                            }}
                        >
                            Xe Bon
                        </Typography>
                    </Box>

                    {/* Desktop Nav - Centered */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 6, alignItems: 'center' }}>
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography
                                        sx={{
                                            color: isActive ? 'rgba(255,255,255,0.5)' : 'white',
                                            fontWeight: 400,
                                            fontSize: '1.1rem',
                                            fontFamily: '"Inter", sans-serif',
                                            transition: 'color 0.2s',
                                            '&:hover': {
                                                color: 'rgba(255,255,255,0.7)'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Typography>
                                </Link>
                            );
                        })}
                    </Box>

                    {/* Mobile Menu Icon - Absolute Right */}
                    <Box sx={{ position: 'absolute', right: 0, display: { md: 'none' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'white' }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Box>



                </Toolbar>
            </Container>
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: '#1a1a1a', overflowY: 'auto' },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
