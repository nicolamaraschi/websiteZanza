import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a1a1a',
            light: '#333333',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#3f51b5', // Elegant Indigo
            light: '#757de8',
            dark: '#002984',
            contrastText: '#ffffff',
        },
        background: {
            default: '#fcfcfc', // Warm white
            paper: '#ffffff',
        },
        text: {
            primary: '#1e1e1e',
            secondary: '#555555',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 800,
            fontSize: '3.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            letterSpacing: '-0.01em',
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
        },
        h3: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        h5: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
        },
        h6: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
        },
        button: {
            fontFamily: '"Outfit", sans-serif',
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.02em',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '10px 28px',
                    borderRadius: 50,
                    boxShadow: 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    },
                },
                contained: {
                    boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
                }
            },
        },
        MuiPaper: {
            styleOverrides: {
                elevation1: {
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                },
                elevation3: {
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0px 1px 0px rgba(0,0,0,0.05)',
                    color: '#1a1a1a',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    },
                },
            },
        },
    },
});

export default theme;
