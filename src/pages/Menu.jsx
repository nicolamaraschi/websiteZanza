import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Tabs, Tab, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import WineBarIcon from '@mui/icons-material/WineBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Menu = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const categories = [
        { id: 0, name: 'Vini', icon: <WineBarIcon /> },
        { id: 1, name: 'Birre & Spritz', icon: <LocalBarIcon /> },
        { id: 2, name: 'Cocktail & Soft', icon: <RestaurantIcon /> },
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#fcfcfc', pb: 10 }}>
            {/* Hero Section */}
            <Box sx={{
                height: '40vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#000',
                color: 'white',
                overflow: 'hidden'
            }}>
                <Box
                    component="img"
                    src="/images/hero.jpg" // Reusing hero image or fallback
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6
                    }}
                />
                <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="h1" sx={{
                            fontFamily: '"Outfit", sans-serif',
                            fontWeight: 900,
                            fontSize: { xs: '3rem', md: '6rem' },
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}>
                            Menu
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 300, letterSpacing: '0.2em', mt: 2 }}>
                            SELEZIONE DI VINI, BIRRE E COCKTAIL
                        </Typography>
                    </motion.div>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -5, position: 'relative', zIndex: 2 }}>
                <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden' }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        sx={{
                            bgcolor: 'white',
                            '& .MuiTab-root': {
                                py: 3,
                                fontSize: '1.1rem',
                                fontWeight: 600
                            }
                        }}
                    >
                        {categories.map((cat) => (
                            <Tab key={cat.id} icon={cat.icon} iconPosition="start" label={cat.name} />
                        ))}
                    </Tabs>

                    <Box sx={{ p: { xs: 2, md: 6 }, bgcolor: '#fff' }}>
                        {activeTab === 0 && <WineSection />}
                        {activeTab === 1 && <BeerSpritzSection />}
                        {activeTab === 2 && <CocktailSoftSection />}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

const MenuItem = ({ name, priceGlass, priceBottle, description, highlight }) => (
    <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px dashed #eee', pb: 2 }}>
        <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
                {name} {highlight && <Chip label={highlight} size="small" color="primary" sx={{ ml: 1, height: 20, fontSize: '0.6rem' }} />}
            </Typography>
            {description && (
                <Typography variant="body2" sx={{ color: '#777', fontStyle: 'italic' }}>
                    {description}
                </Typography>
            )}
        </Box>
        <Box sx={{ textAlign: 'right', minWidth: '80px' }}>
            {priceGlass && (
                <Typography variant="h6" component="span" sx={{ fontWeight: 600, color: '#000' }}>
                    € {priceGlass}
                </Typography>
            )}
            {priceBottle && (
                <Typography variant="body2" component="span" sx={{ color: '#777', ml: 1 }}>
                    / € {priceBottle}
                </Typography>
            )}
        </Box>
    </Box>
);

const SectionTitle = ({ title }) => (
    <Typography variant="h4" sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 800, mb: 4, mt: 2, color: '#1a1a1a', borderLeft: '5px solid #000', pl: 2 }}>
        {title}
    </Typography>
);

const WineSection = () => (
    <Grid container spacing={4}>
        {/* Column 1: Bollicine & Vino Casa */}
        <Grid item xs={12} md={4}>
            <SectionTitle title="Bollicine" />
            <MenuItem name="BRT" description="Brut" priceGlass="5" priceBottle="25" />
            <MenuItem name="XBRT" description="Extra Brut" priceGlass="6" priceBottle="30" />
            <MenuItem name="Brut Nature Sui Lieviti" priceGlass="6" priceBottle="30" />
            <MenuItem name="Torsé Rosé" priceGlass="6" priceBottle="30" />
            <MenuItem name="Serrai" description="Extra Dry" priceGlass="6" priceBottle="30" />
            <MenuItem name="Rosé" description="100% Pinot Nero" priceGlass="7" priceBottle="35" />
            <MenuItem name="Metodo Classico" highlight="Premium" priceGlass="10" priceBottle="60" />
            <MenuItem name="Raboso Ancestrale" priceGlass="6" priceBottle="30" />
            <MenuItem name="Fiori d'Arancio" description="Moscato" priceGlass="6" priceBottle="30" />

            <Box sx={{ mt: 6 }}>
                <SectionTitle title="Vino della Casa" />
                <MenuItem name="Bianco o Rosso" description="Goto / Quarto / Mezzo" priceGlass="3" priceBottle="6 / 12" />
            </Box>
        </Grid>

        {/* Column 2: Bianchi & Zanovello */}
        <Grid item xs={12} md={4}>
            <SectionTitle title="Bianchi" />
            <MenuItem name="Ribolla Gialla" priceGlass="6" priceBottle="30" />
            <MenuItem name="Lugana" priceGlass="6" priceBottle="35" />
            <MenuItem name="Vespaiolo Classico" priceGlass="6" priceBottle="30" />
            <MenuItem name="Vespaiolo Superiore" priceGlass="7" priceBottle="40" />
            <MenuItem name="Chardonnay" priceGlass="5" priceBottle="25" />
            <MenuItem name="Pinot Grigio" priceGlass="5" priceBottle="25" />
            <MenuItem name="Land" description="Pinot Bianco" priceGlass="6" priceBottle="30" />
            <MenuItem name="Sauvignon" priceGlass="5" priceBottle="25" />

            <Box sx={{ mt: 6 }}>
                <SectionTitle title="Zanovello" />
                <MenuItem name="Manzoni" priceGlass="6" priceBottle="35" />
                <MenuItem name="Roverello" priceGlass="7" priceBottle="35" />
                <MenuItem name="Sassonero" priceGlass="7" priceBottle="40" />
                <MenuItem name="Girapoggio" priceGlass="8" priceBottle="40" />
            </Box>
        </Grid>

        {/* Column 3: Rossi */}
        <Grid item xs={12} md={4}>
            <SectionTitle title="Rossi" />
            <MenuItem name="Fapulito" priceGlass="5" priceBottle="25" />
            <MenuItem name="Valpolicella" priceGlass="5" priceBottle="25" />
            <MenuItem name="Tai Rosso" priceGlass="5" priceBottle="25" />
            <MenuItem name="Merlot" priceGlass="5" priceBottle="25" />
            <MenuItem name="Valpolicella Ripasso" priceGlass="7" priceBottle="40" />
            <MenuItem name="Refosco dal Ped. Rosso" priceGlass="6" priceBottle="30" />
            <MenuItem name="Cabernet" priceGlass="5" priceBottle="25" />
            <MenuItem name="Doppia Anima 2016" priceGlass="6" priceBottle="30" />
            <MenuItem name="Pinot Nero" priceGlass="6" priceBottle="30" />
        </Grid>
    </Grid>
);

const BeerSpritzSection = () => (
    <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
            <SectionTitle title="Birra" />
            <Typography variant="overline" sx={{ display: 'block', mb: 2, color: '#aaa' }}>Alla Spina (0.2 / 0.4)</Typography>
            <MenuItem name="Theresianer Lager" priceGlass="3" priceBottle="5" />
            <MenuItem name="Theresianer IPA" priceGlass="4" priceBottle="6" />

            <Box sx={{ mt: 4 }}>
                <Typography variant="overline" sx={{ display: 'block', mb: 2, color: '#aaa' }}>In Bottiglia (33cl)</Typography>
                <MenuItem name="Birra Senza Alcool" priceGlass="5" />
                <MenuItem name="Birra Senza Glutine" priceGlass="5" />
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <SectionTitle title="Spritz" />
            <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: '#ff6b00' }}>€ 6</Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Aperol • P31 • Select • Luxardo<br />
                    Airone Rosso • Cynar • Campari
                </Typography>
            </Box>
        </Grid>
    </Grid>
);

const CocktailSoftSection = () => (
    <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
            <SectionTitle title="Cocktail" />
            <MenuItem name="I Classici" description="Gin Tonic, Negroni, Americano, etc." priceGlass="7" />
            <MenuItem name="Grappe • Amari • Liquori" priceGlass="5" />
        </Grid>
        <Grid item xs={12} md={6}>
            <SectionTitle title="Soft Drinks" />
            <MenuItem name="Bibite" description="Coca Cola, The, Succo Ace, Chinotto, Aranciata" priceGlass="3,5" />
            <MenuItem name="Acqua Minerale" description="0,5 cl" priceGlass="1" />
        </Grid>
    </Grid>
);

export default Menu;
