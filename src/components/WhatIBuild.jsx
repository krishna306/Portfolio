import React from "react";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const specializations = [
    {
        title: "System Software",
        icon: "⚡️",
        items: [
            "macOS system automation APIs",
            "File system performance engineering"
        ],
        tags: ["Swift", "Objective-C", "C++"]
    },
    {
        title: "Backend Systems",
        icon: "☁️",
        items: [
            "RESTful APIs and microservices",
            "Scalable data processing architectures"
        ],
        tags: ["Node.js", "Express", "MongoDB"]
    },
    {
        title: "Developer Infrastructure",
        icon: "🛠️",
        items: [
            "CI/CD orchestration systems",
            "Developer utility tools on macOS"
        ],
        tags: ["Docker", "GitLab CI", "Linux"]
    }
];

export default function WhatIBuild() {
    return (
        <Box component="section" id="specializations" className="reveal" sx={{ mt: "100px", padding: "0 20px" }}>
            <Box sx={{ mb: 6 }}>
                <Typography className="eyebrow" sx={{ textAlign: "center", mb: 2 }}>Specializations</Typography>
                <Typography variant="h2" sx={{ textAlign: "center", fontSize: "clamp(2rem, 3vw, 2.8rem)", mb: 0 }}>
                    What I Build
                </Typography>
            </Box>

            <Grid2 container spacing={3} justifyContent="center" className="stack-grid">
                {specializations.map((spec, index) => (
                    <Grid2 key={spec.title} size={{ xs: 12, md: 4 }}>
                        <Box className={`card exp-card reveal reveal-delay-${index + 1}`} sx={{ 
                            height: "100%", 
                            display: "flex", 
                            flexDirection: "column",
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
                            <Box sx={{ fontSize: "2rem", mb: 3 }}>
                                {spec.icon}
                            </Box>
                            <Typography variant="h3" sx={{ fontSize: "1.2rem", mb: 2 }}>
                                {spec.title}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0, mb: 4, color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.7, flexGrow: 1 }}>
                                {spec.items.map(item => (
                                    <li key={item} style={{ marginBottom: "8px" }}>{item}</li>
                                ))}
                            </Box>
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
                                {spec.tags.map(tag => (
                                    <Box key={tag} sx={{ 
                                        px: 1.5, py: 0.5, 
                                        borderRadius: "4px", 
                                        fontSize: "0.75rem", 
                                        fontWeight: 600,
                                        bgcolor: "rgba(255,255,255,0.05)",
                                        color: "text.primary"
                                    }}>
                                        {tag}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
}
