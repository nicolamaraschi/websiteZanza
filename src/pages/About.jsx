import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Box sx={{ width: '100vw', overflowX: 'hidden' }}>

            {/* 1. Massive Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '70vh',
                width: '100%',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/about.jpg"
                    alt="About Hero"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                />
                {/* Dark Gradient Overlay */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)'
                }} />

                <Container maxWidth="xl" sx={{ height: '100%', position: 'relative' }}>
                    <Box sx={{
                        position: 'absolute',
                        bottom: 60,
                        left: { xs: 20, md: 40 }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="h1" sx={{
                                color: 'white',
                                fontFamily: '"Outfit", sans-serif',
                                fontWeight: 900,
                                fontSize: { xs: '3.5rem', md: '7rem' },
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                lineHeight: 0.9,
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                About Us
                            </Typography>
                        </motion.div>
                    </Box>
                </Container>
            </Box>

            {/* 2. Split Content Section (White & Image) */}
            <Grid container sx={{ minHeight: '80vh' }}>

                {/* Left: Text Content */}
                <Grid item xs={12} md={6} sx={{
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 4, md: 12 }
                }}>
                    <Box sx={{ maxWidth: '600px', textAlign: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography variant="h3" sx={{
                                fontFamily: '"Outfit", sans-serif',
                                fontWeight: 800,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                mb: 4,
                                fontSize: { xs: '2rem', md: '3rem' },
                                color: '#000'
                            }}>
                                The Art of <br />
                                Digital Vibe
                            </Typography>

                            <Typography variant="body1" sx={{
                                color: '#333',
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                mb: 6,
                                fontWeight: 400
                            }}>
                                Stompino isn't just an agency; it's a movement. We blend cutting-edge technology with an unmistakable aesthetic to create digital experiences that don't just function—they resonate.
                                <br /><br />
                                Born from a passion for perfection, we are the architects of the new web, crafting solutions that are visibly superior and technically flawless.
                            </Typography>

                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: '#cca43b', // Gold color
                                    color: 'white',
                                    borderRadius: 0,
                                    py: 2,
                                    px: 5,
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        bgcolor: '#b08d33',
                                        boxShadow: 'none'
                                    }
                                }}
                            >
                                Join The Team
                            </Button>
                        </motion.div>
                    </Box>
                </Grid>

                {/* Right: Full Height Image */}
                <Grid item xs={12} md={6} sx={{ position: 'relative', minHeight: { xs: '400px', md: 'auto' } }}>
                    <Box
                        component="img"
                        src="/images/service-1.jpg" // Using an existing image that fits the vibe
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                    {/* Overlay of luxury items if we had them, for now clean image */}
                </Grid>

            </Grid>
        </Box>
    );
};

export default About;
