import React from "react";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Hero({ onOpenResume }) {
    return (
        <Box component="section" className="hero reveal reveal-delay-2" sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "80px 20px" }}>
            <Typography variant="h2" className="reveal-child" sx={{
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                mb: 2,
                backgroundImage: "linear-gradient(180deg, #ffffff 0%, #a5b4fc 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
            }}>
                Krishna Kumar
            </Typography>
            <Typography className="lead reveal-child" sx={{ color: "#d1d5db", fontWeight: 600, fontSize: "1.4rem", mb: 3 }}>
                Software Engineer @ IDrive | C/C++ · Swift · Objective-C · MCP Tooling
            </Typography>
            <Typography className="lead reveal-child" sx={{ color: "text.secondary", fontSize: "1.1rem", maxWidth: "65ch", mx: "auto", mb: 2, lineHeight: 1.7 }}>
                I build high-performance backup and restore systems, production-grade backend services, and automation tooling for macOS platforms.
            </Typography>
            <Typography className="lead reveal-child" sx={{ color: "text.secondary", fontSize: "1.1rem", maxWidth: "70ch", mx: "auto", mb: 5, lineHeight: 1.7 }}>
                Recent work includes a Wimlib-based modernization that delivered 2.5x faster backups and 3x faster restores, plus a Node.js MCP server that enables natural-language backup orchestration.
            </Typography>

            <Stack direction="row" gap={2} justifyContent="center" flexWrap="wrap" className="hero-actions reveal-child" sx={{ mb: 6 }}>
                <Button
                    variant="contained"
                    className="button primary"
                    href="#projects"
                    disableElevation
                    sx={{ textTransform: "none", borderRadius: "99px", padding: "12px 28px", fontSize: "1rem" }}
                >
                    View Projects
                </Button>
                <Button
                    variant="outlined"
                    className="button secondary"
                    onClick={onOpenResume}
                    sx={{ textTransform: "none", borderRadius: "99px", padding: "12px 28px", fontSize: "1rem" }}
                >
                    View Resume
                </Button>
                <Button
                    variant="outlined"
                    className="button secondary"
                    href="#contact"
                    sx={{ textTransform: "none", borderRadius: "99px", padding: "12px 28px", fontSize: "1rem" }}
                >
                    Contact Me
                </Button>
            </Stack>

            <Stack direction="row" gap={3} justifyContent="center" flexWrap="wrap" className="reveal-child" sx={{ opacity: 0.6, fontSize: "0.9rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#3b82f6" }} /> macOS Systems
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#8b5cf6" }} /> Backend Engineering
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#10b981" }} /> System Architecture
                </Box>
            </Stack>
        </Box>
    );
}
