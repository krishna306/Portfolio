import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { publications } from "../data/index.js";

export default function Publications() {
    return (
        <Box component="section" id="publications" className="publications reveal">
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Writing</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Publications &amp; articles
                </Typography>
            </Box>

            <Stack gap={3} className="pub-list" sx={{ mt: 3 }}>
                {publications.map((pub, i) => (
                    <Box
                        key={pub.title}
                        component="a"
                        href={pub.href}
                        target="_blank"
                        rel="noopener"
                        className={`card pub-card reveal reveal-delay-${i + 1}`}
                        sx={{
                            display: "block",
                            textDecoration: "none",
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
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                            <Box className="pub-body">
                                <Box className="pub-tag" sx={{ mb: 2, display: "inline-block", bgcolor: "rgba(139, 92, 246, 0.15)", color: "#a78bfa", px: 1.5, py: 0.5, borderRadius: "4px", fontSize: "0.75rem", fontWeight: 600 }}>
                                    {pub.source}
                                </Box>
                                <Typography variant="h3" sx={{ m: 0, mb: 1, fontSize: "1.2rem", color: "text.primary", lineHeight: 1.4 }}>
                                    {pub.title}
                                </Typography>
                                {pub.description && (
                                    <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6, mt: 2 }}>
                                        {pub.description}
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "text.secondary", transition: "color 0.2s, background 0.2s", ".pub-card:hover &": { background: "rgba(59, 130, 246, 0.15)", color: "#60a5fa" } }}>
                                ↗
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
