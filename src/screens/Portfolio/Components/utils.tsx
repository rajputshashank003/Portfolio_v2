export const techStack = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Redis",
    "Go (Golang)",
    "SQL",
    "C",
    "C++",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "React.js",
    "Mongoose",
    "Prisma",
    "Three.js",
    "GSAP",
    "Framer Motion",
    "Locomotive Scroll",
    "Material UI",
    "Tailwind CSS",
    "Leaflet.js",
    "Pintura",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Git",
    "GitHub",
    "WebSocket",
    "WebRTC",
    "Object-Oriented Programming (OOP)"
];

export const wizcommerce_roles = [
    {
        title: 'Software Engineer',
        from: 'April 2026',
        to: 'I',
        projectLink: 'https://studio.wizcommerce.com',
        description: [
            'Building the WizStudio from scratch and developed AI-assisted line-drawing annotation tools by integrating AI-based coordinate extraction.',
            'Engineered a high-throughput bulk image processing system handling 100+ images concurrently, reducing GPU load via batched operations and parallel pipelines, and optimized resource management.'
        ],
        techStack: ['React', 'TypeScript', 'Material UI', 'Pintura', 'Git', 'GitHub', 'WebGL', 'FastAPI', 'PostgreSQL'],
    },
    {
        title: 'Software Engineer Intern',
        from: 'April 2025',
        to: 'March 2026',
        type: 'Internship',
        projectLink: 'https://studio.wizcommerce.com',
        description: [
            'Contributed to building the WizStudio frontend from scratch, using React.js, TypeScript, WebGL and Material UI with contributions to backend API development using FastAPI, PostgreSQL.',
            'Developed advanced WebGL-powered image editors, and a multiple multi-layer canvas editor.',
            'Integrated multi-parameter filtering (date range, category, tags) into existing WizStudio APIs using FastAPI and PostgreSQL, improving search efficiency.',
            'Collaborated with backend and design teams to ship features end-to-end.',
            'Improved website performance through modular, scalable component architecture and coordinated multi-API data flows, delivering 20%+ smoother interactions and highly responsive user experiences.',
        ],
        techStack: ['React', 'TypeScript', 'Material UI', 'Pintura', 'Git', 'GitHub'],
    }
];

export const freelance_roles = [
    {
        title: 'NGO Management System',
        from: 'Aug 2026',
        to: 'Aug 2026',
        type: 'Freelance',
        projectLink: 'https://sbefoundation.in',
        description: [
            'Designed relational database schemas and optimized queries in PostgreSQL for donor records, beneficiary data, and volunteer management.',
            'Implemented idempotent RESTful APIs in Go (Golang) with role-based access control (RBAC) and JWT authentication to manage coordinator and admin permissions.',
            'Integrated automated WhatsApp and Email alert pipelines for real-time admin notifications, status updates, and OTP-based verification.',
            'Containerized backend services using Docker to ensure consistent development and isolated production deployments.'
        ],
        techStack: ['Go (Golang)', 'Gin', 'PostgreSQL', 'Docker', 'REST APIs', 'JWT', 'React', 'TypeScript'],
        icon: (
            <div className="flex z-[1] mt-[2px] size-6 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 border border-zinc-300 ring-1 ring-edge ring-offset-1 ring-offset-background" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-heart size-4" aria-hidden="true">
                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
                    <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 15 6 6" />
                    <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.8 2.8 0 0 0 18.2 3c-1.4 0-2.3 1-2.7 1.7-.4-.7-1.3-1.7-2.7-1.7A2.8 2.8 0 0 0 10 5.8c0 1.1.8 2 1.5 2.7l4 3.9Z" />
                </svg>
            </div>
        )
    },
    {
        title: 'Bharapups',
        from: 'July 2025',
        to: 'Sept 2025',
        type: 'Part-time',
        projectLink: 'https://bharatpups.shop',
        description: [
            'Built BharatPups, a freelance project, a dog-selling platform with clean UI, advanced search, and explore features for seamless browsing, backed by lightweight microservice for faster data fetching.',
            'Integrated Google authentication, direct WhatsApp messaging, and call support to streamline buyer–seller communication, along with webhook - driven event handling and a responsive design.'
        ],
        techStack: ['React', 'TypeScript', 'Javascript', 'Node.js', 'MongoDB', 'Docker', 'Webhooks', 'framer-motion'],
        icon: (
            <div className="flex z-[1] mt-[2px] size-6 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 border border-zinc-300 ring-1 ring-edge ring-offset-1 ring-offset-background" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-drafting-compass size-4 __web-inspector-hide-shortcut__" aria-hidden="true"><path d="m12.99 6.74 1.93 3.44"></path><path d="M19.136 12a10 10 0 0 1-14.271 0"></path><path d="m21 21-2.16-3.84"></path><path d="m3 21 8.02-14.26"></path><circle cx="12" cy="5" r="2"></circle></svg>
            </div>
        )
    }
];

export const education_roles = [{
    title: 'Chitkara University - B.E Computer Science',
    from: 'Aug 2022', 
    to: 'June 2026',
    type: 'CGPA: 9.0/10',
    description: [
        'Maintained a 9.0/10 CGPA while gaining strong foundations in core Computer Science concepts, Object-Oriented Programming, and Data Structures & Algorithms.',
        'Learned multiple programming languages including C, C++, Java, JavaScript, and Go, developing practical problem-solving skills.',
        'Built practical experience through projects, labs, and self-learning, developing skills in full-stack web development (MERN, Go, PostgreSQL), debugging, teamwork, and real-world application design.'
    ],
    techStack: ['React', 'TypeScript', 'Javascript', 'DSA', 'Docker', 'AWS'],
    icon: (
        <div className="flex z-[1] mt-[2px] size-6 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-500 border border-zinc-300 ring-1 ring-edge ring-offset-1 ring-offset-background" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap size-4" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
        </div>
    )
}];