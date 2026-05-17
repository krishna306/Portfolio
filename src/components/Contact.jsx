import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=152jcg5mzNXb99MxrAs9MncV6yyZu5dub";

export default function Contact() {
    return (
        <Box component="section" id="contact" className="reveal" sx={{ mt: "28px" }}>
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Let's Connect</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Open to impactful engineering roles
                </Typography>
            </Box>

            <Box className="card contact-card reveal reveal-delay-1" sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                p: 3.5,
                borderRadius: "24px",
                background: "rgba(11, 17, 32, 0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "space-between"
            }}>
                <Box>
                    <Typography variant="h3" sx={{ fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.2, mb: 1.5, color: "text.primary" }}>
                        Bengaluru, Karnataka, India
                    </Typography>
                    <Typography sx={{ fontSize: "0.98rem", color: "text.secondary", maxWidth: "52ch", lineHeight: 1.7, mb: 1 }}>
                        Open to SDE-2 and full-stack opportunities with a strong engineering culture.
                    </Typography>
                    <Typography sx={{ fontSize: "0.95rem", color: "text.secondary" }}>Phone: +91 7665179196</Typography>
                    <Typography sx={{ fontSize: "0.95rem", color: "text.secondary" }}>Email: kumarkrishna2576@gmail.com</Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, minWidth: { md: "270px" }, width: { xs: "100%", md: "auto" } }}>
                    <Button variant="contained" href="mailto:kumarkrishna2576@gmail.com" sx={{ textTransform: "none", borderRadius: "99px", py: 1.5, fontSize: "1rem" }}>
                        Email Me
                    </Button>
                    <Button
                        component="a"
                        href={RESUME_DOWNLOAD_URL}
                        download="Krishna_Kumar_Resume.pdf"
                        variant="outlined"
                        sx={{ textTransform: "none", borderRadius: "99px", py: 1.5, fontSize: "1rem" }}
                    >
                        Download Resume
                    </Button>
                    <Stack direction="row" justifyContent="center" gap={2} sx={{ mt: 1 }}>
                        <Box component="a" href="https://www.github.com/krishna306" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", fontSize: "1.5rem", "&:hover": { color: "#fff" } }}><FaGithub /></Box>
                        <Box component="a" href="https://www.linkedin.com/in/krishnakumar2701/" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", fontSize: "1.5rem", "&:hover": { color: "#0077b5" } }}><FaLinkedin /></Box>
                        <Box component="a" href="https://leetcode.com/u/krishna2023/" target="_blank" rel="noopener noreferrer" sx={{ color: "text.secondary", fontSize: "1.5rem", "&:hover": { color: "#f59e0b" } }}><SiLeetcode /></Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
