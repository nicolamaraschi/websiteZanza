import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, TextField, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#111', color: 'white', py: 8, mt: 'auto', borderTop: '4px solid', borderColor: 'secondary.main' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    {/* Brand & Mission */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" gutterBottom fontWeight="800" sx={{ letterSpacing: '-0.02em', mb: 2 }}>
                            Xe Bon
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7, lineHeight: 1.8, maxWidth: 300 }}>
                            Crafting digital experiences that inspire and engage. We are committed to excellence in every pixel and code line.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                            {[<FacebookIcon />, <InstagramIcon />, <TwitterIcon />, <LinkedInIcon />].map((icon, index) => (
                                <IconButton
                                    key={index}
                                    color="inherit"
                                    sx={{
                                        opacity: 0.7,
                                        transition: 'all 0.2s',
                                        '&:hover': { opacity: 1, color: 'secondary.light', transform: 'translateY(-3px)' }
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
                            Company
                        </Typography>
                        <Stack spacing={1.5}>
                            {['About Us', 'Services', 'Careers', 'Contact'].map((text) => (
                                <Link key={text} href="#" color="inherit" sx={{ opacity: 0.7, textDecoration: 'none', '&:hover': { opacity: 1, color: 'secondary.light' } }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom fontWeight="600" sx={{ mb: 3 }}>
                            Support
                        </Typography>
                        <Stack spacing={1.5}>
                            {['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'].map((text) => (
                                <Link key={text} href="#" color="inherit" sx={{ opacity: 0.7, textDecoration: 'none', '&:hover': { opacity: 1, color: 'secondary.light' } }}>
                                    {text}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    {/* Newsletter */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom fontWeight="600" sx={{ mb: 2 }}>
                            Stay Updated
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                            Subscribe to our newsletter for the latest insights and news.
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <Stack direction="row" spacing={1}>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="Your email address"
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        borderRadius: 1,
                                        input: { color: 'white' },
                                        fieldset: { border: 'none' }
                                    }}
                                />
                                <Button variant="contained" color="secondary" sx={{ borderRadius: 1 }}>
                                    Join
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 8, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>
                        © {new Date().getFullYear()} Xe Bon. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.5 }}>
                        Designed with precision.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
