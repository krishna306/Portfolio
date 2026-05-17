import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Header({ onOpenResume }) {
    return (
        <Box component="header" className="topbar reveal reveal-delay-1" sx={{ flexWrap: "wrap" }}>
            <Stack direction="row" alignItems="center" gap={1.5} className="brand">
                <Box sx={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)", display: "grid", placeItems: "center", color: "#fff", fontSize: "12px" }}>
                    KK
                </Box>
                <Typography variant="h1" sx={{ fontSize: "1.1rem", margin: 0, fontWeight: 700 }}>
                    Krishna Kumar
                </Typography>
            </Stack>

            <Box component="nav" className="nav" aria-label="Primary navigation" sx={{ margin: "0 auto", background: "transparent", border: "none" }}>
                {[
                    { label: "Projects", href: "#projects" },
                    { label: "Experience", href: "#experience" },
                    { label: "Skills", href: "#skills" },
                    { label: "Publications", href: "#publications" },
                    { label: "Contact", href: "#contact" },
                ].map((link) => (
                    <Box key={link.label} component="a" href={link.href} sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
                        {link.label}
                    </Box>
                ))}
            </Box>

            <Stack direction="row" alignItems="center" gap={2}>
                <Box component="a" href="https://www.github.com/krishna306" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", "&:hover": { color: "#fff" } }}>
                    <FaGithub size={20} />
                </Box>
                <Box component="a" href="https://www.linkedin.com/in/krishnakumar2701/" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", "&:hover": { color: "#fff" } }}>
                    <FaLinkedin size={20} />
                </Box>
                <Box component="a" href="https://leetcode.com/u/krishna2023/" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", "&:hover": { color: "#f59e0b" } }}>
                    <SiLeetcode size={20} />
                </Box>
                <Box component="button" type="button" onClick={onOpenResume} sx={{ fontSize: "0.85rem", fontWeight: 700, padding: "6px 14px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.2s", "&:hover": { background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }, color: "inherit", fontFamily: "inherit", cursor: "pointer" }}>
                    Resume
                </Box>
            </Stack>
        </Box>
    );
}
