import project1 from "../../images/project-1.webp";
import project2 from "../../images/project-2.png";
import alpha from "../../images/under-construction.webp";

export const cardData = {
    card1: {
        imageUrl: project1,
        linkUrl: "https://awanish-26.github.io/Tailwind/",
        Name: "Sweet Shop Project",
        discription: "Designed a sleek shop website using Tailwind CSS with an attractive UI.",
        techStck: ["Tailwind CSS", "HTML", "Javascript", "UI/UX"]
    },
    card2: {
        imageUrl: project2,
        linkUrl: "https://myblog-gold.vercel.app/",
        Name: "MultiUser Blog App",
        discription: "Full-stack blog web application with user registration and login functionality.",
        techStck: ["Django", "Javascript", "Python"]
    },
    card3: {
        imageUrl: alpha,
        linkUrl: "",
        Name: "Mixed ",
        discription: "A collection of various projects showcasing different technologies and skills.",
        techStck: ["Rainmeter", "Node", "Prisma"]
    }
};

export const smallProjects = [
    {
        name: "Rainmeter Skin",
        description: "A music visualizer skin for Rainmeter",
        techStack: ["Rainmeter", "Lua"],
        linkUrl: "https://github.com/Awanish-26/Rainmeter-visualizer",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Haffmann File Encoder CLI",
        description: "Command-line tool for file encoding using Haffmann algorithm",
        techStack: ["Python", "CLI"],
        linkUrl: "https://gist.github.com/Awanish-26/4e9399b7163fbffa98c3fccaf186c6f2",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        name: "Dynamic API",
        description: "Database schema and ORM configuration",
        techStack: ["Prisma", "Node"],
        linkUrl: "https://github.com/Awanish-26/DynAPI",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "API Wrapper",
        description: "Simple wrapper for third-party API integration",
        techStack: ["Node", "Javascript"],
        linkUrl: "https://github.com/yourusername/api-wrapper",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        name: "Config Manager",
        description: "Configuration management utility for projects",
        techStack: ["Node", "Javascript"],
        linkUrl: "https://github.com/yourusername/config-manager",
        color: "from-indigo-500/20 to-violet-500/20"
    },
    {
        name: "Loading . . .",
        description: "More Coming Soon!",
        techStack: ["Node", "Javascript"],
        linkUrl: "",
        color: "from-teal-500/20 to-cyan-500/20"
    }
];