import React, { useRef } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const features = [
        {
            title: 'Innovation',
            desc: 'Harness the power of cutting-edge technology designed to propel your business into the future.',
            icon: <AutoAwesomeIcon fontSize="large" sx={{ color: 'white' }} />,
            color: 'linear-gradient(135deg, #FF0080 0%, #7928CA 100%)'
        },
        {
            title: 'Reliability',
            desc: 'Built on robust foundations ensuring 99.9% uptime and enterprise-grade security for peace of mind.',
            icon: <SecurityIcon fontSize="large" sx={{ color: 'white' }} />,
            color: 'linear-gradient(135deg, #4299E1 0%, #3182CE 100%)'
        },
        {
            title: 'Growth',
            desc: 'Scalable solutions that grow with you, providing the flexibility needed to adapt to market demands.',
            icon: <TrendingUpIcon fontSize="large" sx={{ color: 'white' }} />,
            color: 'linear-gradient(135deg, #00B5D8 0%, #319795 100%)'
        }
    ];

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            {/* Refined Hero Section - Workkit Style */}
            <Box sx={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
                background: '#000',
                color: 'white'
            }}>
                {/* Background Image */}
                <Box
                    component={motion.div}
                    style={{ y: y1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
                >
                    <Box component="img" src="/images/hero.jpg" sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.8)'
                    }} />
                </Box>

                {/* Central Horizontal Line */}
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    bgcolor: 'rgba(255,255,255,0.5)',
                    transform: 'translateY(-50%)',
                    zIndex: 2
                }} />

                {/* Top Content (Above Line) */}
                <Container maxWidth="xl" sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '50%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    pb: 2
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '1.2rem', fontWeight: 300 }}>
                                01 / 03
                            </Typography>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '1.2rem', fontWeight: 500 }}>
                                Future Concept Co.
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '1.1rem', fontWeight: 300 }}>
                                See Work Detail
                            </Typography>
                        </Box>
                    </Box>
                </Container>

                {/* Bottom Content (Below Line) */}
                <Container maxWidth="xl" sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '50%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    pb: 0
                }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        {/* Massive Brand Name */}
                        <Box
                            component="img"
                            src="/images/logo.png"
                            alt="Xe Bon"
                            sx={{
                                width: { xs: '80%', md: '50%' },
                                height: 'auto',
                                mb: 2,
                                display: 'block'
                            }}
                        />

                        {/* Scroll Down Arrow */}
                        <Box sx={{ mb: 4, mr: 2, display: { xs: 'none', md: 'block' } }}>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="square">
                                    <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
                                </svg>
                            </motion.div>
                        </Box>
                    </Box>
                </Container>
            </Box >

            {/* Elegant Content Section (IYO Style) */}
            < Box sx={{ bgcolor: '#fcfcfc', py: 15 }}>
                <Container maxWidth="md" sx={{ mb: 12 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="body1" sx={{
                            fontSize: '1.1rem',
                            lineHeight: 2,
                            color: '#555',
                            mb: 4,
                            fontWeight: 300
                        }}>
                            Since 2023, Xe Bon has been bringing the authentic Venetian spirit to the heart of Milan.
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: '1.1rem',
                            lineHeight: 2,
                            color: '#555',
                            mb: 4,
                            fontWeight: 300
                        }}>
                            We are more than just a bar; we are a meeting point where tradition meets conviviality. From our signature Spritz to our carefully selected wines, every sip tells a story of passion and heritage.
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: '1.1rem',
                            lineHeight: 2,
                            color: '#555',
                            fontWeight: 300
                        }}>
                            Experience the warmth of our hospitality and the excellence of our "cicchetti", crafted to elevate your aperitivo to a celebration of taste.
                        </Typography>
                    </motion.div>
                </Container>

                <Container maxWidth="lg">
                    {/* Carousel Section */}
                    <div style={{ position: 'relative', height: '600px', overflow: 'hidden', borderRadius: '16px', background: '#000' }}>
                        <HeroCarousel />
                    </div>
                </Container>
            </Box >
        </Box >
    );
};

// Carousel Component
const HeroCarousel = () => {
    const [page, setPage] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const images = [
        { title: 'VENETIAN VIBES', subtitle: 'AUTHENTIC APERITIVO', src: '/images/service-1.jpg' },
        { title: 'SIGNATURE SIPS', subtitle: 'CRAFT COCKTAILS', src: '/images/service-2.jpg' },
        { title: 'PURE ELEGANCE', subtitle: 'TIMELESS ATMOSPHERE', src: '/images/hero.jpg' }
    ];

    const imageIndex = Math.abs(page % images.length);
    const currentImage = images[imageIndex];

    const paginate = (newDirection) => {
        setPage(page + newDirection);
        setDirection(newDirection);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.8 }
            }
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        })
    };

    return (
        <>
            <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
            >
                <Box
                    component="img"
                    src={currentImage.src}
                    alt={currentImage.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
                }} />

                {/* Caption */}
                <Box sx={{
                    position: 'absolute',
                    bottom: 50,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    color: 'white',
                    width: '100%'
                }}>
                    <Typography variant="overline" sx={{ letterSpacing: '0.3em', fontSize: '0.9rem', opacity: 0.9 }}>
                        {currentImage.subtitle}
                    </Typography>
                    <Typography variant="h2" sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 300,
                        fontSize: { xs: '2.5rem', md: '4rem' },
                        mt: 1
                    }}>
                        {currentImage.title}
                    </Typography>
                </Box>
            </motion.div>

            {/* Navigation Arrows */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: { xs: 10, md: 30 },
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    p: 1,
                    '&:hover': { opacity: 0.7 }
                }}
                onClick={() => paginate(-1)}
            >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="square">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: { xs: 10, md: 30 },
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    p: 1,
                    '&:hover': { opacity: 0.7 }
                }}
                onClick={() => paginate(1)}
            >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="square">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </Box>
        </>
    );
};

export default Home;
