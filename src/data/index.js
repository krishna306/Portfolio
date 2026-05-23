export const stats = [
    { value: "2y11m", label: "Enterprise product engineering" },
    { value: "2.5x", label: "Backup speed improvement delivered" },
    { value: "3x", label: "Restore speed improvement delivered" },
];

export const focusAreas = [
    "macOS daemon reliability and system-level optimization",
    "MCP and AI-assisted developer tooling",
    "Backend APIs, CI/CD automation, and delivery pipelines",
];

export const deliveryTimeline = [
    { step: "01", title: "Architecture & Systems Design", description: "Design resilient systems, identify constraints, and define scalable data structures." },
    { step: "02", title: "Implementation & Optimization", description: "Build core functionalities with a strong focus on runtime efficiency and clean code." },
    { step: "03", title: "Testing & Automation", description: "Establish CI/CD pipelines and automate workflows to ensure stable, reliable releases." },
];

export const projects = [
    {
        tag: "System Modernization",
        title: "IDrive Backup/Restore Engine Upgrade",
        description: "Replaced legacy local backup and restore workflows by integrating Wimlib into the macOS stack, delivering measurable gains in performance and reliability.",
        tech: ["C", "C++", "Swift", "Objective-C", "macOS"],
        featured: true,
    },
    {
        tag: "AI + Automation",
        title: "MCP Server for Backup Operations",
        description: "Built a Node.js MCP server enabling Claude to orchestrate backup and restore operations on macOS through natural language, reducing multi-step flows to single-command actions.",
        tech: ["Node.js", "Model Context Protocol (MCP)", "Automation", "macOS"],
    },
    {
        tag: "MERN Project",
        title: "Blog App",
        description: "Built a MERN blog application with authentication, content management, and responsive UI flows for posting and engagement.",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
        url: "https://mernstackblogapp.netlify.app/",
    },
];

export const stackColumns = [
    { title: "Backend & Systems", description: "C/C++, Swift, Objective-C, Node.js, Express, REST APIs, macOS services." },
    { title: "Data & Architecture", description: "MongoDB, MySQL, system design, data structures, and production-grade reliability patterns." },
    { title: "Automation & Delivery", description: "GitLab CI/CD, MCP integrations, developer tooling, Xcode workflows, and release pipelines." },
];

export const experience = [
    {
        period: "June 2025 — Present",
        type: "Full-time",
        role: "Programmer Analyst",
        company: "IDrive Software India",
        companyUrl: "https://www.idrive.com/",
        description: [
            "Owned core macOS daemon reliability by optimizing file enumeration, exclusion handling, scheduling, and CDP logic.",
            "Integrated the Wimlib open-source library to replace legacy backup/restore internals, improving backup speed by 2.5x and restore speed by 3x.",
            "Designed and rolled out GitLab CI/CD pipelines that removed manual build steps and improved release consistency.",
            "Built an MCP server in Node.js that allows Claude to orchestrate backup/restore operations on macOS through natural language commands."
        ],
        tech: ["C", "C++", "Swift", "Objective-C", "CI/CD", "MCP"],
    },
    {
        period: "July 2023 — May 2025",
        type: "Full-time",
        role: "Trainee Programmer Analyst",
        company: "IDrive Software India",
        companyUrl: "https://www.idrive.com/",
        description: [
            "Onboarded into a large production C/C++ and Swift codebase and started shipping fixes and features within the first month.",
            "Implemented co-brand support across shared system logic, enabling partner onboarding without adding new infrastructure.",
            "Resolved critical defects in the macOS backup stack, lowering issue volume and improving product stability."
        ],
        tech: ["C", "C++", "Swift", "Objective-C", "Debugging"],
    },
    {
        period: "June 2022 — July 2022",
        type: "Internship",
        role: "Full Stack Web Developer",
        company: "Centre for Development of Advanced Computing (CDAC CINE)",
        description: [
            "Architected the backend from scratch with JWT-based authentication and protected APIs.",
            "Built structured form-driven data collection workflows for accurate, consistent capture.",
            "Developed graphical dashboards that improved interpretation and monitoring of collected data."
        ],
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        projectUrl: "https://mbdas.netlify.app/",
        projectLabel: "View Dashboard",
    },
];

export const skills = [
    { category: "Languages", items: ["C", "C++", "Swift", "Objective-C", "JavaScript", "Python"] },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT", "MongoDB", "MySQL"] },
    { category: "Systems", items: ["macOS Development", "Daemon Services", "System Design", "Data Structures", "OOP"] },
    { category: "AI Tooling", items: ["Model Context Protocol (MCP)", "Claude-integrated workflows", "Natural language automation"] },
    { category: "DevOps", items: ["GitLab CI/CD", "Docker", "Xcode", "Release Automation"] },
];

export const education = [
    {
        icon: "🎓",
        period: "Graduated Jun 2023 - CGPA: 8.39 / 10",
        degree: "B.Tech in Computer Science and Engineering",
        institution: "National Institute of Technology Silchar",
        description: "",
    },
    {
        icon: "🏫",
        period: "2015 - 2017",
        degree: "High School (Science and Mathematics)",
        institution: "Noble School, Falna",
        description: "",
    },
];

export const certifications = [
    {
        icon: "udemy",
        period: "Completed",
        degree: "The Complete 2022 Web Development Bootcamp",
        institution: "Udemy",
        description: "",
        url: "https://www.udemy.com/certificate/UC-b101d6a5-3fcc-417d-8b31-138070992e0b/",
    },
    {
        icon: "udemy",
        period: "Completed",
        degree: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        institution: "Udemy",
        description: "",
        url: "https://www.udemy.com/certificate/UC-871a6795-0e4a-4b4c-861d-42fb6302e0d6/",
    },
    {
        icon: "hackerrank",
        period: "Completed",
        degree: "MySQL",
        institution: "HackerRank",
        description: "",
        url: "https://www.hackerrank.com/certificates/f86480eac74d",
    },
    {
        icon: "coursera",
        period: "Issued Oct 2020",
        degree: "HTML, CSS, and Javascript for Web Developers",
        institution: "Coursera",
        description: "Credential ID: 96ATQ3K4MV8K",
        url: "https://www.coursera.org/account/accomplishments/certificate/96ATQ3K4MV8K",
    },
];

export const publications = [
    {
        source: "IET Publication · Aug 2024",
        title: "Comparative Analysis of Lumpy Skin Disease Detection Using Deep Learning Models",
        description: "Published research analyzing deep learning models for lumpy skin disease detection in medical imaging workflows.",
        href: "https://digital-library.theiet.org/doi/10.1049/pbhe059e_ch5",
    },
];

export const codingStats = [
    {
        platform: "LeetCode",
        handle: "krishna2023",
        url: "https://leetcode.com/u/krishna2023/",
        statsUrl: "https://leetcode-badge.fullstackclub.com/api/users/krishna2023?ext=heatmap",
    },
    {
        platform: "CodeForces",
        handle: "noobcoder9196",
        url: "https://codeforces.com/profile/noobcoder9196",
    },
    {
        platform: "HackerRank",
        handle: "krishna9196",
        url: "https://www.hackerrank.com/krishna9196",
    },
];
