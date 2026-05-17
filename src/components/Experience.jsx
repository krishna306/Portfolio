import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { experience } from "../data/index.js";

export default function Experience() {
    return (
        <Box component="section" id="experience" className="experience reveal">
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Work History</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Experience that shaped my craft
                </Typography>
            </Box>

            <Stack gap={3} className="experience-list">
                {experience.map((job, i) => {
                    return (
                    <Box key={`${job.company}-${job.role}-${job.period}`} className={`card exp-card reveal reveal-delay-${i + 1}`} sx={{
                        p: 4,
                        borderRadius: "24px",
                        background: "rgba(11, 17, 32, 0.4)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            borderColor: "rgba(255,255,255,0.15)",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                        }
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", mb: 2 }}>
                            <Box>
                                <Typography variant="h3" sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 1, color: "text.primary" }}>
                                    {job.companyUrl ? (
                                        <Box
                                            component="a"
                                            href={job.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: "inherit",
                                                textDecoration: "none",
                                                borderBottom: "1px dashed rgba(148, 163, 184, 0.5)",
                                                "&:hover": { color: "#93c5fd", borderBottomColor: "rgba(147, 197, 253, 0.85)" }
                                            }}
                                        >
                                            {job.company}
                                        </Box>
                                    ) : (
                                        job.company
                                    )}
                                </Typography>
                                <Stack direction="row" gap={1} flexWrap="wrap">
                                    {job.role.split(" ").map((word, idx) => (
                                        <Box key={idx} sx={{ px: 1.5, py: 0.5, borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600, bgcolor: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" }}>
                                            {word}
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                            <Box sx={{ textAlign: "right", color: "text.secondary", fontSize: "0.85rem", pt: 0.5 }}>
                                {job.period} {job.type && `• ${job.type}`}
                            </Box>
                        </Box>
                        
                        <Box sx={{ mt: 3, mb: 3 }}>
                            <Box component="ul" sx={{ paddingLeft: "20px", margin: 0, color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.7 }}>
                                {Array.isArray(job.description)
                                    ? job.description.map((desc, idx) => (
                                        <Typography component="li" key={idx} sx={{ mb: 1 }}>{desc}</Typography>
                                    ))
                                    : <Typography component="li">{job.description}</Typography>
                                }
                            </Box>
                        </Box>

                        {job.projectUrl ? (
                            <Button
                                component="a"
                                href={job.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                size="small"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: "999px",
                                    mb: 2,
                                    borderColor: "rgba(96,165,250,0.4)",
                                    color: "#93c5fd",
                                    "&:hover": {
                                        borderColor: "rgba(96,165,250,0.7)",
                                        background: "rgba(59,130,246,0.12)"
                                    }
                                }}
                            >
                                {job.projectLabel || "View Project"}
                            </Button>
                        ) : null}

                        <Stack
                            direction="row"
                            flexWrap="nowrap"
                            alignItems="center"
                            gap={1.5}
                            sx={{
                                mt: "auto",
                                pt: 2,
                                width: "100%",
                                borderTop: "1px solid rgba(255,255,255,0.05)",
                                justifyContent: "flex-start",
                                overflowX: "auto",
                                whiteSpace: "nowrap",
                                gridColumn: "2 / 3"
                            }}
                        >
                            <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "text.secondary", whiteSpace: "nowrap", flexShrink: 0 }}>
                                Tech Stack
                            </Typography>
                            {job.tech.map((t) => (
                                <Chip key={t} label={t} size="small" sx={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "text.secondary",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    flexShrink: 0
                                }} />
                            ))}
                        </Stack>
                    </Box>
                );
                })}
            </Stack>
        </Box>
    );
}
