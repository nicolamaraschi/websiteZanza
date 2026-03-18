import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <Box sx={{ width: '100%', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '60vh',
                width: '100%',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/hero.jpg"
                    alt="Contact Hero"
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
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '7rem' },
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                lineHeight: 0.9,
                                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}>
                                Contact Us
                            </Typography>
                        </motion.div>
                    </Box>
                </Container>
            </Box>

            {/* Content Section */}
            <Box sx={{ py: 12, bgcolor: '#f9f9f9', position: 'relative', zIndex: 1 }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Paper
                            elevation={24}
                            sx={{
                                borderRadius: 4,
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                background: 'white',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.12)'
                            }}
                        >
                            {/* Left Side: Contact Info (Dark) */}
                            <Box sx={{
                                p: { xs: 4, md: 8 },
                                bgcolor: '#1a1a1a',
                                color: 'white',
                                width: { xs: '100%', md: '40%' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Decorative Elements */}
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -100,
                                    right: -100,
                                    width: 300,
                                    height: 300,
                                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)',
                                    borderRadius: '50%'
                                }} />

                                <Box>
                                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontFamily: '"Outfit", sans-serif', letterSpacing: '-0.02em' }}>
                                        Let's Chat
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 6, lineHeight: 1.7, fontSize: '1.1rem' }}>
                                        Have a project in mind? We'd love to hear about it. Tell us your story.
                                    </Typography>

                                    <Stack spacing={5}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: '12px',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                mr: 2.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <LocationOnIcon sx={{ color: 'white' }} />
                                            </Box>
                                            <Box>
                                                <Typography variant="overline" color="rgba(255,255,255,0.5)" fontWeight="600" letterSpacing="0.1em">VISIT US</Typography>
                                                <Typography variant="body1" fontWeight={500} fontSize="1.1rem" sx={{ mt: 0.5 }}>
                                                    Viale Monte Nero, 75<br />
                                                    20135 Milano MI
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: '12px',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                mr: 2.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <PhoneIcon sx={{ color: 'white' }} />
                                            </Box>
                                            <Box>
                                                <Typography variant="overline" color="rgba(255,255,255,0.5)" fontWeight="600" letterSpacing="0.1em">CALL US</Typography>
                                                <Typography variant="body1" fontWeight={500} fontSize="1.1rem" sx={{ mt: 0.5 }}>+39 344 344 7520</Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: '12px',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                mr: 2.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <EmailIcon sx={{ color: 'white' }} />
                                            </Box>
                                            <Box>
                                                <Typography variant="overline" color="rgba(255,255,255,0.5)" fontWeight="600" letterSpacing="0.1em">EMAIL US</Typography>
                                                <Typography variant="body1" fontWeight={500} fontSize="1.1rem" sx={{ mt: 0.5 }}>contact@example.com</Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Box sx={{
                                                p: 1.5,
                                                borderRadius: '12px',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                                mr: 2.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <AccessTimeIcon sx={{ color: 'white' }} />
                                            </Box>
                                            <Box>
                                                <Typography variant="overline" color="rgba(255,255,255,0.5)" fontWeight="600" letterSpacing="0.1em">OPENING HOURS</Typography>
                                                <Typography variant="body1" fontWeight={500} fontSize="1.1rem" sx={{ mt: 0.5 }}>
                                                    Mon - Sat: 12:00 - 15:00<br />
                                                    18:00 - 00:00<br />
                                                    Sun: Closed
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>

                            {/* Right Side: Form (Light) */}
                            <Box sx={{
                                p: { xs: 4, md: 8 },
                                width: { xs: '100%', md: '60%' },
                                bgcolor: '#ffffff'
                            }}>
                                <Typography variant="h4" fontWeight="bold" sx={{ mb: 1, color: '#1a1a1a', fontFamily: '"Outfit", sans-serif' }}>
                                    Send a Message
                                </Typography>
                                <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                                    We'll get back to you within 24 hours.
                                </Typography>

                                <form noValidate autoComplete="off">
                                    <Typography variant="overline" sx={{ color: '#00af10', fontWeight: 'bold', mb: 4, display: 'block' }}>
                                        Service options: Serves food at bar
                                    </Typography>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Your Name"
                                                fullWidth
                                                variant="outlined"
                                                placeholder="John Doe"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Email Address"
                                                fullWidth
                                                variant="outlined"
                                                placeholder="john@company.com"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Subject"
                                                fullWidth
                                                variant="outlined"
                                                placeholder="How can we help?"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Message"
                                                fullWidth
                                                variant="outlined"
                                                multiline
                                                rows={4}
                                                placeholder="Tell us a bit more about your needs..."
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                disableElevation
                                                sx={{
                                                    mt: 2,
                                                    py: 2,
                                                    px: 6,
                                                    fontSize: '1rem',
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                                    }
                                                }}
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </Paper>

                        {/* Full Width Map Strip */}
                        <Box sx={{ mt: 8, borderRadius: 4, overflow: 'hidden', height: 400, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <iframe
                                title="map"
                                src="https://maps.google.com/maps?q=Viale+Monte+Nero+75+Milano&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default Contact;
