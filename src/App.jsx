import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WhatIBuild from "./components/WhatIBuild.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Publications from "./components/Publications.jsx";
import Contact from "./components/Contact.jsx";

const RESUME_PREVIEW_URL = "https://drive.google.com/file/d/152jcg5mzNXb99MxrAs9MncV6yyZu5dub/preview";
const RESUME_OPEN_URL = "https://drive.google.com/file/d/152jcg5mzNXb99MxrAs9MncV6yyZu5dub/view";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const openResumeModal = () => setResumeOpen(true);
  const closeResumeModal = () => setResumeOpen(false);

  useEffect(() => {
    document.body.classList.add("js-enhanced");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(".reveal");
    const interactiveCards = document.querySelectorAll(
      ".project-card, .exp-card, .skill-group, .edu-card, .pub-card, .contact-card"
    );

    const handleScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };

    const handlePointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const cardMoveHandlers = [];

    if (!prefersReducedMotion) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("scroll", handleScrollProgress, { passive: true });
      window.addEventListener("resize", handleScrollProgress);
      handleScrollProgress();

      for (const card of interactiveCards) {
        const handleCardMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          card.style.setProperty("--card-glow-x", `${x}px`);
          card.style.setProperty("--card-glow-y", `${y}px`);
        };

        const resetCardGlow = () => {
          card.style.removeProperty("--card-glow-x");
          card.style.removeProperty("--card-glow-y");
        };

        card.addEventListener("pointermove", handleCardMove, { passive: true });
        card.addEventListener("pointerleave", resetCardGlow);
        cardMoveHandlers.push({ card, handleCardMove, resetCardGlow });
      }
    }

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      for (const el of revealElements) el.classList.add("is-visible");
      document.body.classList.add("page-ready");
      return () => {
        for (const { card, handleCardMove, resetCardGlow } of cardMoveHandlers) {
          card.removeEventListener("pointermove", handleCardMove);
          card.removeEventListener("pointerleave", resetCardGlow);
        }
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("scroll", handleScrollProgress);
        window.removeEventListener("resize", handleScrollProgress);
        document.body.classList.remove("js-enhanced", "page-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );

    for (const el of revealElements) observer.observe(el);

    // Safety fallback: if any observer callback is missed, ensure sections still appear.
    const revealFallback = window.setTimeout(() => {
      for (const el of revealElements) {
        if (!el.classList.contains("is-visible")) {
          el.classList.add("is-visible");
        }
      }
    }, 1800);

    const frame = window.requestAnimationFrame(() => {
      document.body.classList.add("page-ready");
    });

    return () => {
      for (const { card, handleCardMove, resetCardGlow } of cardMoveHandlers) {
        card.removeEventListener("pointermove", handleCardMove);
        card.removeEventListener("pointerleave", resetCardGlow);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScrollProgress);
      window.removeEventListener("resize", handleScrollProgress);
      observer.disconnect();
      window.clearTimeout(revealFallback);
      window.cancelAnimationFrame(frame);
      document.body.classList.remove("js-enhanced", "page-ready");
    };
  }, []);

  return (
    <Box className="page-shell">
      <Box className="scroll-progress" aria-hidden="true" />
      <Box className="ambient ambient-one" />
      <Box className="ambient ambient-two" />
      <Box className="ambient ambient-three" />
      <Header onOpenResume={openResumeModal} />
      <Box component="main">
        <Hero onOpenResume={openResumeModal} />
        <WhatIBuild />
        <Experience />
        <Projects />
        <Skills />
        <Publications />
        <Education />
        <Contact onOpenResume={openResumeModal} />
      </Box>

      <Dialog
        open={resumeOpen}
        onClose={closeResumeModal}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: {
            background: "rgba(10, 15, 28, 0.96)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)"
          }
        }}
      >
        <DialogTitle sx={{ color: "text.primary", pb: 1 }}>Resume Preview</DialogTitle>
        <DialogContent sx={{ p: 0, height: { xs: "70vh", md: "78vh" } }}>
          <Box
            component="iframe"
            src={RESUME_PREVIEW_URL}
            title="Krishna Kumar Resume"
            sx={{ width: "100%", height: "100%", border: "none", background: "#0b1120" }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 2, pb: 2 }}>
          <Button
            component="a"
            href={RESUME_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{ textTransform: "none" }}
          >
            Open in New Tab
          </Button>
          <Button onClick={closeResumeModal} variant="contained" sx={{ textTransform: "none" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
