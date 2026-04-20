const siteContent = {
  profile: {
    name: "Khushi Nilesh Ved",
    title: "Full-Stack Developer | Data & AI Enthusiast",
  },
  integrations: {
    github: {
      username: "khushived",
      profileUrl: "https://www.github.com/khushived/",
      featuredRepos: [
        "neighbour-node",
        "MMM-Modelling",
        "Marketing-Dashboard",
        "influencer_dashboard",
        "expense_tracker",
        "qr_code_generator",
      ],
    },
    leetcode: {
      username: "ved_khushi",
      profileUrl: "https://leetcode.com/u/ved_khushi/",
      solved: "Active Problem Solver",
      badge: "HackerRank C++ 4-Star",
    },
    visits: {
      namespace: "khushived-portfolio",
      key: "website-visits",
    },
  },
  hero: {
    greetingEmoji: "👋",
    headlinePrefix: "Hey! I am",
    name: "Khushi",
    subtitle:
      "I build practical software products across full-stack development, data systems, and AI workflows.",
    ctas: {
      contactHref: "/contact",
      contactLabel: "Get in Touch",
      projectsHref: "/projects",
      projectsLabel: "View Projects",
      resumeHref: "https://drive.google.com/file/d/1A6No-eP87pP6lrUEbM8GnMmJNfUPppiK/view?usp=sharing",
      resumeLabel: "View Resume",
    },
  },
  about: {
    title: "About Me",
    summary:
      "I am a Computer Science and Business Systems undergraduate at Government Model Engineering College, Kochi. I enjoy building production-ready applications with clean architecture, real-world impact, and strong problem-solving foundations. My work spans full-stack development, data-driven systems, and LLM-based automation.",
    focuses: [
      {
        title: "Product Development",
        description:
          "I build and ship full projects across frontend, backend, and deployment workflows with focus on usability and reliability.",
        icon: "🚀",
      },
      {
        title: "Data & AI Projects",
        description:
          "I work on analytics, automation, and model-driven solutions such as marketing dashboards and modelling experiments.",
        icon: "🔬",
      },
      {
        title: "Continuous Learning",
        description:
          "I actively improve my problem-solving through coding practice, hands-on project work, and fast experimentation across technologies.",
        icon: "📚",
      },
    ],
    education: [
      {
        institution: "Government Model Engineering College, Kochi",
        degree: "B.Tech in Computer Science and Business Systems",
        period: "Nov 2022 - Apr 2026 (Expected)",
        score: "8.8 CGPA",
      },
      {
        institution: "The Delta Study, Kochi",
        degree: "Higher Secondary - CBSE",
        period: "Jun 2020 - Apr 2022",
        score: "93%",
      },
    ],
    responsibilities: [
      "Tech Lead of FOSSMEC, The Free and Open-Source Cell of MEC.",
      "Sub Talks Lead of IEDCMEC, The Entrepreneurship Development Club of MEC.",
    ],
    hobbies: ["Dancing", "Reading", "Travelling", "Problem Solving"],
  },
  skills: [
    { title: "Languages", items: ["C++", "Golang", "Python", "R", "JavaScript", "HTML", "CSS", "SQL"] },
    { title: "Frameworks", items: ["React.js", "Next.js", "Node.js"] },
    { title: "Technologies", items: ["Git", "PostgreSQL", "Docker", "REST APIs", "OracleDB", "Redis", "Linux", "Full-Stack Development"] },
    { title: "Soft Skills", items: ["Problem Solving", "Collaboration", "Leadership", "Effective Communication", "Adaptability"] },
  ],
  projects: [
    {
      title: "OptiRAG",
      description:
        "Implemented a multi-modal RAG system with semantic caching to enable accurate, document-based LLM responses and significantly reduce cost and latency.",
      image: "🧠",
      category: "AI",
      tags: ["Python", "RabbitMQ", "Redis", "Ollama"],
    },
    {
      title: "ProxiHealth",
      description:
        "Developed a complete system to send user alerts based on API data and user location, with risk segmentation and expert monitoring integration.",
      image: "🏥",
      category: "Product",
      tags: ["Python", "React", "PostgreSQL"],
    },
    {
      title: "Neighbour-Node",
      description:
        "Full-stack app for local sharing where neighbours list tools, skills, or surplus for free/trade and broadcast urgent nearby needs.",
      image: "🏘️",
      category: "Product",
      tags: ["Python", "React", "Firebase"],
    },
  ],
  achievements: {
    items: [
      { title: "Hult Prize MEC 2023 - First Place", organization: "Hult Prize MEC", description: "Won first place and was invited to China to present the project.", image: "🥇" },
      { title: "Millennium Fellowship 2024", organization: "United Nations", description: "Awarded for leadership excellence and fostering social change.", image: "🌍" },
      { title: "GirlScript Summer of Code 2024", organization: "GSSoC", description: "Selected as a contributor for open-source development.", image: "💻" },
      { title: "Hult Prize MEC 2024 Finalist", organization: "Govt. Model Engineering College", description: "Finalist for WATERWISE, focused on water resource conservation.", image: "🏁" },
      { title: "HackerRank C++ Badge", organization: "HackerRank", description: "Earned 4-Star badge in C++ for DSA and problem solving.", image: "⭐" },
      { title: "Hackathon Participation", organization: "Excel MEC 2024 / TinkHack 2.0", description: "Participated in HackForTomorrow and Kerala's largest Gen AI hackathon.", image: "🚀" },
      { title: "Community & Open Source", organization: "FOSSMEC / Debian", description: "Volunteered for DebUtsav 2024, a Debian Conference organized by FOSS MEC.", image: "🤝" },
    ],
    certifications: [
      {
        name: "Artificial Intelligence: Knowledge Representation and Reasoning",
        issuer: "NPTEL in association with IIT Madras",
        year: "2024",
        icon: "📜",
      },
      {
        name: "Deep Learning",
        issuer: "NPTEL in association with IIT Ropar",
        year: "2024",
        icon: "📜",
      },
      {
        name: "SQL (Basic)",
        issuer: "HackerRank",
        year: "2024",
        icon: "📜",
      },
      {
        name: "Go (Basic)",
        issuer: "HackerRank",
        year: "2024",
        icon: "📜",
      },
    ],
  },
  experience: [
    {
      title: "Project Trainee",
      company: "BHEL Hyderabad",
      period: "Jul 2024 - Jul 2024",
      description: "Worked on datacenter information asset monitoring systems and infrastructure health tracking.",
      highlights: [
        "Developed a dashboard for monitoring, managing, and maintaining datacenter information assets using OracleDB and Java.",
        "Enabled ping monitoring and integrated Arduino sensors to monitor operational parameters.",
      ],
      tags: ["Java", "OracleDB", "Dashboard", "Monitoring"],
    },
    {
      title: "Technical Intern",
      company: "Zoko (YC'21) - Remote",
      period: "May 2024 - Jun 2024",
      description: "Built systems for real-time social media monitoring and intelligent topic-based alerting.",
      highlights: [
        "Engineered a real-time Twitter monitoring tool using Golang, Selenium, PostgreSQL, and Redis to track hashtag-specific tweets.",
        "Implemented topic modelling using LLMs and automated user alerts through RabbitMQ.",
      ],
      tags: ["Golang", "PostgreSQL", "Redis", "Selenium", "RabbitMQ"],
    },
  ],
  contact: {
    email: "khushived6@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushi-nilesh-ved/",
    github: "https://www.github.com/khushived/",
    resumeUrl: "https://drive.google.com/file/d/1A6No-eP87pP6lrUEbM8GnMmJNfUPppiK/view?usp=sharing",
    footerText: "© 2026 Khushi Nilesh Ved. All rights reserved.",
  },
};

export default siteContent;
