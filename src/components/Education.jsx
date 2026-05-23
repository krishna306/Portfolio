import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { education, certifications } from "../data/index.js";
import { SiUdemy, SiHackerrank, SiCoursera } from "../icons/index.js";

const platformIcons = {
    udemy: SiUdemy,
    hackerrank: SiHackerrank,
    coursera: SiCoursera,
};

export default function Education() {
    const getPlatformIcon = (iconName) => {
        const IconComponent = platformIcons[iconName];
        return IconComponent ? <IconComponent size={28} /> : null;
    };
    return (
        <Box component="section" id="education" className="education reveal">
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Academic Background</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Education
                </Typography>
            </Box>

            <Box className="edu-grid" sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                {education.map((item, i) => (
                    <Box key={item.degree} className={`card edu-card reveal reveal-delay-${i + 1}`} sx={{
                        p: 3.5,
                        borderRadius: "24px",
                        background: "rgba(11, 17, 32, 0.4)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 3,
                        "&:hover": {
                            transform: "translateY(-6px)",
                            borderColor: "rgba(255,255,255,0.15)",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                        }
                    }}>
                        <Box sx={{ fontSize: "2rem", width: 56, height: 56, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
                            {item.icon}
                        </Box>
                        <Box>
                            <Typography className="edu-period" sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1 }}>{item.period}</Typography>
                            <Typography variant="h3" sx={{ margin: "0 0 6px", fontSize: "1.15rem", color: "text.primary" }}>
                                {item.degree}
                            </Typography>
                            <Typography className="edu-inst" sx={{ color: "#60a5fa", fontWeight: 600, fontSize: "0.95rem", mb: item.description ? 2 : 0 }}>{item.institution}</Typography>
                            {item.description && (
                                <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                                    {item.description}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="section-heading reveal-group" sx={{ mt: 8 }}>
                <Typography className="eyebrow">Professional Development</Typography>
                <Typography variant="h2" sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "14ch", mt: 1, mb: 0 }}>
                    Certifications
                </Typography>
            </Box>

            <Box className="cert-grid" sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>
                {certifications.map((item, i) => (
                    <Box
                        key={item.degree}
                        component={item.url ? "a" : "div"}
                        href={item.url || undefined}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`card cert-card reveal reveal-delay-${i + 1}`}
                        sx={{
                            p: 3.5,
                            borderRadius: "24px",
                            background: "rgba(11, 17, 32, 0.4)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 3,
                            textDecoration: "none",
                            cursor: item.url ? "pointer" : "default",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                borderColor: "rgba(255,255,255,0.15)",
                                boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                            }
                        }}>
                        <Box sx={{ width: 56, height: 56, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.03)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", color: item.icon === "udemy" ? "#a435f0" : item.icon === "hackerrank" ? "#2ec866" : "#1f73b7" }}>
                            {getPlatformIcon(item.icon)}
                        </Box>
                        <Box>
                            <Typography className="cert-period" sx={{ color: "text.secondary", fontSize: "0.85rem", mb: 1 }}>{item.period}</Typography>
                            <Typography variant="h3" sx={{ margin: "0 0 6px", fontSize: "1.15rem", color: "text.primary", textDecoration: item.url ? "underline" : "none" }}>
                                {item.degree}
                            </Typography>
                            <Typography className="cert-inst" sx={{ color: "#60a5fa", fontWeight: 600, fontSize: "0.95rem", mb: item.description ? 2 : 0 }}>{item.institution}</Typography>
                            {item.description && (
                                <Typography sx={{ color: "text.secondary", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                                    {item.description}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
