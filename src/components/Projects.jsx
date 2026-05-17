import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { projects } from "../data/index.js";

export default function Projects() {
    return (
        <Box component="section" id="projects" className="projects reveal">
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Selected Work</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Projects built for speed, clarity, and scale
                </Typography>
            </Box>

            <Box className="project-grid">
                {projects.map((project, i) => (
                    <Box
                        key={`${project.title}-${i}`}
                        component="article"
                        className={`card project-card reveal reveal-delay-${i + 1}${project.featured ? " featured" : ""}`}
                        sx={{
                            p: 3.5,
                            borderRadius: "24px",
                            background: "rgba(11, 17, 32, 0.4)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                            display: "flex",
                            flexDirection: "column",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                borderColor: "rgba(255,255,255,0.15)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                            }
                        }}
                    >
                        <Box className="project-tag" sx={{ alignSelf: "flex-start", mb: 2, bgcolor: "rgba(59, 130, 246, 0.15)", color: "#60a5fa", px: 1.5, py: 0.5, borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
                            {project.tag}
                        </Box>
                        <Typography variant="h3" sx={{ mt: 0, mb: 1, fontSize: "1.25rem", color: "text.primary" }}>
                            {project.title}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", lineHeight: 1.6, fontSize: "0.95rem", mb: 3, flexGrow: 1 }}>
                            {project.description}
                        </Typography>

                        {project.url ? (
                            <Button
                                component="a"
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                size="small"
                                sx={{
                                    alignSelf: "flex-start",
                                    mb: 2,
                                    textTransform: "none",
                                    borderRadius: "999px",
                                    borderColor: "rgba(96,165,250,0.4)",
                                    color: "#93c5fd",
                                    "&:hover": {
                                        borderColor: "rgba(96,165,250,0.7)",
                                        background: "rgba(59,130,246,0.12)"
                                    }
                                }}
                            >
                                View Live
                            </Button>
                        ) : null}
                        
                        <Stack direction="row" flexWrap="wrap" alignItems="center" gap={1.5} sx={{ mt: "auto", pt: 2, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                            <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "text.secondary" }}>Tech Stack</Typography>
                            {project.tech.map((t) => (
                                <Chip key={t} label={t} size="small" sx={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "text.secondary",
                                    fontSize: "0.75rem",
                                    fontWeight: 600
                                }} />
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
