import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FaFire, FaGithub, SiLeetcode, SiCodeforces, SiHackerrank } from "../icons/index.js";

/* ─── Static data from your profiles ─── */
const github = {
    totalContributions: 242,
    currentStreak: 0,
    longestStreak: 4,
    since: "Jun 14, 2020 – Present",
    longestRange: "Jan 29, 2022 – Feb 1, 2022",
};

const leetcode = {
    handle: "krishna2023",
    rank: "#97183",
    totalSolved: 672,
    easy: { solved: 274, total: 944 },
    medium: { solved: 332, total: 2057 },
    hard: { solved: 66, total: 934 },
};

const codeforces = {
    handle: "noobcoder9196",
    profileUrl: "https://codeforces.com/profile/noobcoder9196",
    currentRating: 869,
    maxRating: 1034,
    rank: "Newbie",
    problemsSolved: 178,
    contests: 64,
    submissions: 432,
    bestContestRank: "#5670",
    status: "Active",
};

const hackerrank = {
    handle: "krishna9196",
    profileUrl: "https://www.hackerrank.com/krishna9196",
    totalPoints: 1210,
    badges: 6,
    domains: [
        { name: "Problem Solving", solved: 25, stars: 3, maxStars: 6, color: "#f0abfc", pct: 50 },
        { name: "SQL",             solved: 45, stars: 5, maxStars: 6, color: "#f0abfc", pct: 83, gold: true },
        { name: "Python",          solved: 13, stars: 3, maxStars: 5, color: "#34d399", pct: 60 },
    ],
};

/* ─── Sub-components ─── */

function SectionLabel({ icon, label, sub, href }) {
    return (
        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 1.5 }}>
            <Box sx={{ fontSize: "1.2rem", lineHeight: 1 }}>{icon}</Box>
            <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "0.92rem", lineHeight: 1.2 }}>{label}</Typography>
                {sub && (
                    <Typography
                        component={href ? "a" : "span"}
                        href={href}
                        target={href ? "_blank" : undefined}
                        rel={href ? "noopener noreferrer" : undefined}
                        sx={{ fontSize: "0.72rem", color: "text.secondary", textDecoration: "none", "&:hover": href ? { color: "#60a5fa" } : {} }}
                    >
                        {sub}
                    </Typography>
                )}
            </Box>
        </Stack>
    );
}

function Bar({ pct, color }) {
    return (
        <Box sx={{ flex: 1, height: "6px", borderRadius: "999px", background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
            <Box sx={{ height: "100%", width: `${pct}%`, borderRadius: "999px", background: color, transition: "width 1s ease" }} />
        </Box>
    );
}

function StatPill({ label, value, color }) {
    return (
        <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontSize: "0.66rem", color: "text.secondary", mb: 0.2, fontWeight: 600 }}>{label}</Typography>
            <Typography sx={{ fontSize: "1.15rem", fontWeight: 800, color: color || "text.primary", letterSpacing: "-0.02em", lineHeight: 1 }}>
                {value}
            </Typography>
        </Box>
    );
}

/* ─── GitHub Streak Card ─── */
function GitHubPanel() {
    return (
        <Box className="card coding-card reveal reveal-delay-1" sx={{ p: 2, borderRadius: "16px" }}>
            <SectionLabel icon={<FaGithub color="#fff" />} label="GitHub Contributions" sub="krishna306" href="https://github.com/krishna306" />
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 1.5, alignItems: "center" }}>
                {/* Total */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#f472b6", lineHeight: 1 }}>
                        {github.totalContributions}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#f472b6", fontWeight: 600, mt: 0.4 }}>Total Contributions</Typography>
                    <Typography sx={{ fontSize: "0.66rem", color: "text.secondary", mt: 0.3 }}>{github.since}</Typography>
                </Box>

                {/* Current Streak – ring */}
                <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ position: "relative", width: 64, height: 64, mx: "auto" }}>
                        <Box component="svg" viewBox="0 0 64 64" sx={{ width: 64, height: 64, transform: "rotate(-90deg)" }}>
                            <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                            <circle
                                cx="32" cy="32" r="26" fill="none"
                                stroke="#f472b6" strokeWidth="5"
                                strokeDasharray={`${2 * Math.PI * 26}`}
                                strokeDashoffset={`${2 * Math.PI * 26 * (1 - Math.min(github.currentStreak / 30, 1))}`}
                                strokeLinecap="round"
                            />
                        </Box>
                        <Box sx={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <FaFire color="#f472b6" size={10} />
                            <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "#f9c77b", lineHeight: 1 }}>{github.currentStreak}</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontSize: "0.72rem", color: "#f9c77b", fontWeight: 600, mt: 0.5 }}>Current Streak</Typography>
                    <Typography sx={{ fontSize: "0.66rem", color: "text.secondary" }}>May 23</Typography>
                </Box>

                {/* Longest */}
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "2rem", fontWeight: 800, color: "#f472b6", lineHeight: 1 }}>
                        {github.longestStreak}
                    </Typography>
                    <Typography sx={{ fontSize: "0.72rem", color: "#f472b6", fontWeight: 600, mt: 0.4 }}>Longest Streak</Typography>
                    <Typography sx={{ fontSize: "0.66rem", color: "text.secondary", mt: 0.3 }}>{github.longestRange}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

/* ─── LeetCode Card ─── */
function LeetCodePanel() {
    const totalProblems = leetcode.easy.total + leetcode.medium.total + leetcode.hard.total;
    const circumference = 2 * Math.PI * 36;
    const solved = leetcode.totalSolved;
    const pct = solved / totalProblems;

    return (
        <Box className="card coding-card reveal reveal-delay-2" sx={{ p: 2, borderRadius: "16px" }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
                <SectionLabel icon={<SiLeetcode color="#f59e0b" />} label={leetcode.handle} />
                <Typography sx={{ fontSize: "0.76rem", color: "text.secondary", fontWeight: 700 }}>{leetcode.rank}</Typography>
            </Stack>

            <Stack direction="row" gap={2} alignItems="center">
                {/* Donut */}
                <Box sx={{ position: "relative", width: 80, height: 80, flexShrink: 0 }}>
                    <Box component="svg" viewBox="0 0 80 80" sx={{ width: 80, height: 80, transform: "rotate(-90deg)" }}>
                        <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="7" />
                        <circle
                            cx="40" cy="40" r="36" fill="none"
                            stroke="url(#lcGrad)" strokeWidth="7"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference * (1 - pct)}
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="lcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#f472b6" />
                            </linearGradient>
                        </defs>
                    </Box>
                    <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography sx={{ fontSize: "1.2rem", fontWeight: 800, color: "#f9c77b" }}>{solved}</Typography>
                    </Box>
                </Box>

                {/* Bars */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                    {[
                        { label: "Easy",   color: "#34d399", d: leetcode.easy },
                        { label: "Medium", color: "#f59e0b", d: leetcode.medium },
                        { label: "Hard",   color: "#f87171", d: leetcode.hard },
                    ].map(({ label, color, d }) => (
                        <Box key={label}>
                            <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.3 }}>
                                <Typography sx={{ fontSize: "0.72rem", color, fontWeight: 600 }}>{label}</Typography>
                                <Typography sx={{ fontSize: "0.72rem", color: "text.secondary", fontWeight: 600 }}>
                                    {d.solved} / {d.total}
                                </Typography>
                            </Stack>
                            <Bar pct={(d.solved / d.total) * 100} color={color} />
                        </Box>
                    ))}
                </Box>
            </Stack>

            <Stack direction="row" justifyContent="space-between" sx={{ mt: 1.5, pt: 1.5, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Typography
                    component="a"
                    href={`https://leetcode.com/u/${leetcode.handle}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ fontSize: "0.66rem", color: "text.secondary", textDecoration: "none", "&:hover": { color: "#f59e0b" } }}
                >
                    leetcode.com/u/{leetcode.handle}
                </Typography>
                <Typography sx={{ fontSize: "0.66rem", color: "#f59e0b", fontWeight: 600 }}>
                    {leetcode.totalSolved} solved
                </Typography>
            </Stack>
        </Box>
    );
}

/* ─── Codeforces Card ─── */
function CodeforcesPanel() {
    return (
        <Box className="card coding-card reveal reveal-delay-3" sx={{ p: 2, borderRadius: "16px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1 }}>
                <SectionLabel
                    icon={<SiCodeforces color="#1890ff" />}
                    label="Codeforces Stats"
                    sub={codeforces.handle}
                    href={codeforces.profileUrl}
                />
            </Stack>

            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.5, mb: 1.5 }}>
                <StatPill label="Current Rating" value={codeforces.currentRating} color="#f472b6" />
                <StatPill label="Max Rating"     value={codeforces.maxRating}     color="#f9c77b" />
                <StatPill label="Rank"           value={codeforces.rank}          color="#34d399" />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1.5, mb: 1.5 }}>
                <StatPill label="Problems Solved" value={codeforces.problemsSolved} color="#f472b6" />
                <StatPill label="Contests"        value={codeforces.contests}       color="#f472b6" />
                <StatPill label="Submissions"     value={codeforces.submissions}    color="#f9c77b" />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
                <StatPill label="Best Contest Rank" value={codeforces.bestContestRank} color="#a78bfa" />
                <StatPill label="Profile"           value={codeforces.status}          color="#34d399" />
            </Box>

            <Box sx={{ mt: 1.5, pt: 1.5, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Box sx={{ height: "3px", borderRadius: "999px", background: "linear-gradient(90deg, #f472b6 0%, #a78bfa 50%, #60a5fa 100%)" }} />
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 0.8 }}>
                    <Typography
                        component="a" href={codeforces.profileUrl} target="_blank" rel="noopener noreferrer"
                        sx={{ fontSize: "0.66rem", color: "text.secondary", textDecoration: "none", "&:hover": { color: "#60a5fa" } }}
                    >
                        codeforces.com/profile/{codeforces.handle}
                    </Typography>
                    <Typography sx={{ fontSize: "0.66rem", color: "text.secondary" }}>API: codeforces.com</Typography>
                </Stack>
            </Box>
        </Box>
    );
}

/* ─── HackerRank Card ─── */
function HackerRankPanel() {
    return (
        <Box className="card coding-card reveal reveal-delay-4" sx={{ p: 2, borderRadius: "16px" }}>
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between" sx={{ mb: 1 }}>
                <SectionLabel
                    icon={<SiHackerrank color="#00ea64" />}
                    label="HackerRank Stats"
                    sub={hackerrank.handle}
                    href={hackerrank.profileUrl}
                />
                <Box sx={{ px: 1, py: 0.4, borderRadius: "6px", background: "rgba(139, 92, 246, 0.18)", border: "1px solid rgba(139, 92, 246, 0.35)" }}>
                    <Typography sx={{ fontSize: "0.7rem", fontWeight: 700, color: "#a78bfa" }}>
                        {hackerrank.totalPoints} pts total
                    </Typography>
                </Box>
            </Stack>

            <Typography sx={{ fontSize: "0.64rem", color: "text.secondary", fontWeight: 600, letterSpacing: "0.1em", mb: 1 }}>
                BADGES · STARS · PROBLEMS SOLVED
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.9 }}>
                {hackerrank.domains.map((d) => (
                    <Box key={d.name}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 0.3 }}>
                            <Box>
                                <Typography sx={{ fontSize: "0.76rem", fontWeight: 700, color: d.gold ? "#f9c77b" : "text.primary" }}>
                                    {d.name} {d.gold && "· GOLD"}
                                </Typography>
                                <Typography sx={{ fontSize: "0.66rem", color: "text.secondary" }}>
                                    {d.solved} solved · {"★".repeat(d.stars)}{"☆".repeat(d.maxStars - d.stars)}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontSize: "0.7rem", color: "text.secondary", fontWeight: 600, whiteSpace: "nowrap" }}>
                                {d.stars} / {d.maxStars}★ pts
                            </Typography>
                        </Stack>
                        <Bar pct={d.pct} color={d.color} />
                    </Box>
                ))}
            </Box>

            <Stack direction="row" justifyContent="space-between" sx={{ mt: 1.5, pt: 1.5, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <Typography
                    component="a" href={hackerrank.profileUrl} target="_blank" rel="noopener noreferrer"
                    sx={{ fontSize: "0.66rem", color: "text.secondary", textDecoration: "none", "&:hover": { color: "#00ea64" } }}
                >
                    hackerrank.com/{hackerrank.handle}
                </Typography>
                <Typography sx={{ fontSize: "0.66rem", color: "#00ea64", fontWeight: 600 }}>
                    {hackerrank.badges} badges earned
                </Typography>
            </Stack>
        </Box>
    );
}

/* ─── Main Export ─── */
export default function CodingStats() {
    return (
        <Box component="section" id="coding-stats" className="reveal" sx={{ mt: "28px" }}>
            <Box className="section-heading reveal-group">
                <Typography className="eyebrow">Competitive Programming</Typography>
                <Typography
                    variant="h2"
                    sx={{ fontSize: "clamp(2rem, 3vw, 3rem)", letterSpacing: "-0.04em", lineHeight: 1.02, maxWidth: "18ch", mt: 1, mb: 0 }}
                >
                    Coding Profiles &amp; Stats
                </Typography>
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5, mt: 2 }}>
                <GitHubPanel />
                <LeetCodePanel />
                <CodeforcesPanel />
                <HackerRankPanel />
            </Box>
        </Box>
    );
}
