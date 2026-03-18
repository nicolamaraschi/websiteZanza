import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';

const servicesList = [
    {
        title: 'APERITIVO VENETO',
        subtitle: 'A TASTE OF TRADITION',
        desc: 'Experience the authentic Venetian aperitif right here in Milan. Enjoy our selection of Spritz, Prosecco, and fine wines paired with traditional "cicchetti" and small bites that transport you to the Venetian lagoon.',
        links: ['Spritz Selection', 'Cicchetti', 'Venetian Wines'],
        img: '/images/service-1.jpg'
    },
    {
        title: 'SIGNATURE COCKTAILS',
        subtitle: 'CRAFTED WITH PASSION',
        desc: 'Our expert mixologists create unique signature cocktails using premium spirits and fresh ingredients. From timeless classics to innovative new blends, discover your next favorite drink in our vibrant atmosphere.',
        links: ['Signature Menu', 'Classic Cocktails', 'Mocktails'],
        img: '/images/service-2.jpg'
    },
    {
        title: 'VENETIAN CUISINE',
        subtitle: 'AUTHENTIC FLAVORS',
        desc: 'Savor the rich culinary heritage of Veneto. We serve a carefully curated menu of traditional dishes and snacks, prepared with high-quality ingredients to give you a true taste of home.',
        links: ['Traditional Dishes', 'Seasonal Specials', 'Bar Snacks'],
        img: '/images/service-3.jpg'
    },
];

const Services = () => {
    return (
        <Box sx={{ bgcolor: '#111', color: 'white', overflowX: 'hidden' }}>
            {/* Hero Header with Background */}
            <Box sx={{
                position: 'relative',
                height: '60vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end'
            }}>
                <Box
                    component="img"
                    src="/images/hero.jpg"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)'
                }} />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, pb: 8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" sx={{
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 900,
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '7rem' },
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: 'white',
                            lineHeight: 0.9
                        }}>
                            Our Services
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Checkerboard Layout */}
            {servicesList.map((service, index) => (
                <Grid container key={index} direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                    {/* Text Section */}
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 4, md: 12 },
                        bgcolor: '#151515'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography variant="overline" sx={{ color: '#ffb300', letterSpacing: '0.2em', fontSize: '0.9rem', display: 'block', mb: 2 }}>
                                {service.subtitle}
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontFamily: '"Outfit", sans-serif',
                                fontWeight: 700,
                                mb: 3,
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase'
                            }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body1" sx={{
                                color: '#aaa',
                                lineHeight: 1.8,
                                mb: 4,
                                fontSize: '1.1rem',
                                maxWidth: '500px'
                            }}>
                                {service.desc}
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                {service.links.map((link, i) => (
                                    <Typography key={i} variant="button" sx={{
                                        color: '#ffb300',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        fontSize: '0.9rem',
                                        transition: 'opacity 0.2s',
                                        '&:hover': { opacity: 0.7 }
                                    }}>
                                        {link} &rarr;
                                    </Typography>
                                ))}
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Image Section */}
                    <Grid item xs={12} md={6} sx={{ height: { xs: '400px', md: '700px' } }}>
                        <Box
                            component="img"
                            src={service.img}
                            alt={service.title}
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(20%) contrast(1.1)'
                            }}
                        />
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};

export default Services;
