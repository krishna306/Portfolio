import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { skills } from "../data/index.js";

export default function Skills() {
    return (
        <Box component="section" id="skills" className="reveal" sx={{ mt: "28px" }}>
            <Box className="section-heading reveal-group">
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, mb: 0 }}>
                    Technical Skills
                </Typography>
                <Typography className="eyebrow" sx={{ mt: 1, textTransform: "none", color: "text.secondary", fontSize: "1rem" }}>
                    Where I've made an impact
                </Typography>
            </Box>
            
            <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 3 }}>
                {skills.map((group, i) => (
                    <Box key={group.category} className={`card skill-group reveal reveal-delay-${i + 1}`} sx={{
                        p: 3.5,
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
                        <Typography variant="h3" sx={{ fontSize: "1.1rem", mb: 2, color: "text.primary" }}>
                            {group.category}
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1.5} className="skill-pills">
                            {group.items.map((item) => (
                                <Chip key={item} label={item} size="medium" sx={{
                                    background: "transparent",
                                    border: "none",
                                    color: "text.primary",
                                    fontSize: "0.85rem",
                                    px: 1, py: 2,
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                    "&:hover": {
                                        background: "transparent",
                                        color: "#60a5fa"
                                    }
                                }} />
                            ))}
                        </Stack>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
