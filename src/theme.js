import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#ffffff" },
        secondary: { main: "#3b82f6" },
        background: { default: "#030614", paper: "rgba(11, 17, 32, 0.4)" },
        text: { primary: "#f8fafc", secondary: "#94a3b8" },
    },
    typography: {
        fontFamily: '"Manrope", sans-serif',
        h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
        button: { fontFamily: '"Manrope", sans-serif', fontWeight: 700 },
    },
    components: {
        MuiCssBaseline: { styleOverrides: { body: { overflowX: "hidden" } } },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 700,
                    padding: "14px 22px",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: { borderRadius: "999px", fontWeight: 600 },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: { backgroundImage: "none" },
            },
        },
    },
});

export default theme;
