import type {
    Project,
    Experience,
    Education,
    Achievement,
    Certification,
    Skill,
    ContactInfo,
    PersonalInfo,
} from "./types"

export const personalInfo: PersonalInfo = {
    name: "Ateeb Shahid",
    title: "Professional AI Automation Engineer",
    bio: "Automation specialist and Software engineer with 3+ years of experience building React-based front ends and n8n-driven back ends using JavaScript, Node.js, and Python. Strong RPA background with UiPath and Power Automate, plus deep CRM and enterprise integrations. Skilled in AI and ML workflows for automating complex, unstructured processes. Based in the UAE with relocation flexibility.",
    location: "Dubai, United Arab Emirates",
    education: "BSCS (Honors) Computer Science",
    interests: [
        "Intelligent Process Automation",
        "React & TypeScript",
        "n8n & RPA Workflows",
        "AI/ML Pipelines",
        "Enterprise CRM Integrations",
    ],
    resumeUrl: "https://drive.google.com/file/d/1c-gEoW7NgJ5IZSXaG-TscRB9WBWf-wRR/view?usp=sharing",
    profileImage: process.env.NODE_ENV === 'production' ? '/portfolio/pfp.jpeg' : '/pfp.jpeg',
}

export const aboutSections = [
    "I architect and deploy end-to-end automation systems that eliminate manual bottlenecks and scale business operations. With 3+ years of hands-on experience spanning React front ends, n8n-driven back ends, and enterprise RPA using UiPath and Power Automate, I build the infrastructure that lets teams focus on what matters while machines handle the rest.",
    "From Upwork (Top Rated) to on-site enterprise roles in the UAE, I've delivered production-grade workflows integrating CRMs like Salesforce, HubSpot, and Zoho with AI-powered pipelines using OpenAI, Docker, and custom LLM integrations. I've led RPA teams, managed full project lifecycles, and trained developers across SAP, finance, and procurement domains.",
    "When I'm not automating workflows, you can find me in the gym, at the swimming pool, pulling strings on a guitar, or exploring new tech and automation tools.",
]

export const experiences: Experience[] = [
    {
        id: "1xl-n8n-automation-expert",
        title: "n8n Automation Expert",
        company: "1XL Infra & Real Estate Development LLC",
        location: "Burj Khalifa, Dubai, UAE",
        startDate: "Dec 2025",
        endDate: "Present",
        duration: "Present",
        description:
            "Designed, deployed, and optimized end-to-end automation workflows using n8n to streamline business operations, integrate third-party systems, and eliminate manual processes across multiple departments in a high-demand enterprise environment.",
        achievements: [
            "Built and maintained production-grade automation workflows integrating APIs, databases, CRMs, and internal tools.",
            "Automated complex multi-step business processes, significantly reducing manual workload and operational bottlenecks.",
            "Debugged, optimized, and scaled live workflows to improve system reliability, performance, and data accuracy.",
        ],
        tools: [
            "n8n",
            "APIs & Databases",
            "CRMs & Internal Tools",
            "Workflow Optimization",
        ],
        languages: ["JavaScript", "Node.js", "Python"],
    },
    {
        id: "upwork-software-ai-automation",
        title: "Software & AI Automation Engineer",
        company: "Upwork (Top Rated)",
        location: "Remote - Full Time",
        startDate: "Jan 2025",
        endDate: "Dec 2025",
        duration: "12 months",
        description:
            "Worked on software engineering and automation projects delivered through Upwork, earning Top Rated status. Built React.js front ends using TypeScript and developed automation workflows using n8n, UiPath, and Make.com. Delivered production ready systems integrating complex APIs and business processes.",
        achievements: [
            "Built and delivered production-grade automation and software projects via Upwork, earning Top Rated status.",
            "Developed React.js TypeScript front ends and complex automation workflows using n8n, UiPath, and Make.com.",
            "Implemented enterprise CRM and AI-driven integrations across GoHighLevel, HubSpot, Zoho, Salesforce, and Pipedrive, managing full deployment lifecycle.",
        ],
        tools: [
            "React.js",
            "TypeScript",
            "n8n",
            "UiPath",
            "Make.com",
            "GoHighLevel",
            "HubSpot",
            "Zoho",
            "Salesforce",
            "Pipedrive",
        ],
        languages: ["JavaScript", "TypeScript", "Node.js", "Python"],
    },
    {
        id: "sybros-lead-dev",
        title: "Lead RPA Developer",
        company: "SYBROS TECH",
        location: "Lahore, Pakistan (On-Site - Full Time)",
        startDate: "Oct 2023",
        endDate: "Jan 2025",
        duration: "15 months",
        description:
            "Position of RPA Team Lead and presented enterprise-grade automations across SAP and non-SAP systems using UiPath, Power Automate, Python, and APIs that wiped out manual work and stabilized core finance and procurement workflows.",
        achievements: [
            "Led RPA team, delivering end-to-end automations for SAP Fiori/HANA and CRMs using UiPath, Python, and APIs.",
            "Built workflows that eliminated manual bottlenecks in finance, procurement, and sales, reducing errors and saving hours.",
            "Managed full project lifecycle, mentoring developers and providing client and university trainings.",
        ],
        tools: [
            "UiPath/Orchestrator",
            "Power Automate",
            "SAP Fiori/HANA",
            "Python",
            "APIs",
        ],
        languages: ["Python", "JavaScript", "VB.NET", "SQL"],
        recommendationLetterUrl: "https://drive.google.com/file/d/1WNQjBqon14Xk6qgpfdOJw9HBeVa9nRSm/view?usp=sharing",
    },
    {
        id: "samsung-ai-intern",
        title: "Artificial Intelligence Intern",
        company: "SAMSUNG INNOVATION CAMPUS",
        location: "Lahore, Pakistan (On-Site - Part Time)",
        startDate: "Sep 2022",
        endDate: "Dec 2023",
        duration: "4 months",
        description:
            "Applied core ML techniques with Python to preprocess data, build predictive models and extract insights from structured and unstructured datasets.",
        achievements: [
            "Solid ML fundamentals in linear algebra, probability, and statistics, with hands-on Python experience (NumPy, Pandas) for data preprocessing and analysis.",
            "Applied supervised, unsupervised, and NLP techniques to extract actionable insights from structured and unstructured datasets.",
            "Developed and presented a predictive model for Cytokine protein levels in blood, supporting early detection of inflammation-related conditions.",
        ],
        tools: ["Python", "NumPy", "Pandas", "Machine Learning", "NLP"],
        languages: ["Python"],
    },
]

export const educations: Education[] = [
    {
        id: "ucp-bscs",
        institution: "University of Central Punjab",
        location: "Lahore, Pakistan",
        degree: "Bachelors in Computer Science - BSCS (Honors)",
        startDate: "Jun 2019",
        endDate: "Jul 2023",
        duration: "4 years",
        coursework: [
            "Data Structures & Algorithms (DSA)",
            "Data Analysis and Algorithms (DAA)",
            "Artificial Intelligence",
            "Data Science",
            "LLMs",
        ],
    },
    {
        id: "pgc-ics",
        institution: "Punjab Group of Colleges",
        location: "Lahore, Pakistan",
        degree: "Intermediate of Computer Science (ICS)",
        startDate: "May 2017",
        endDate: "Mar 2019",
        duration: "2 years",
        subjects: ["Computer Science", "Maths", "Physics"],
    },
]

export const projects: Project[] = [
    {
        id: "video-transcribe-rpa",
        title: "Video Transcribe RPA",
        description:
            "Built an RPA pipeline using OpenAI Whisper-1, Python, UiPath, and Miro.com to fetch videos, extract audio, generate transcripts, create freeze frames, and upload structured content to Miro Canvas. Presented in Python and UiPath, optimized for VM deployment.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/video-transcribe-rpa.png' : '/video-transcribe-rpa.png',
        technologies: [
            "OpenAI Whisper-1",
            "Python",
            "UiPath",
            "Miro.com",
            "Google Cloud",
        ],
        githubUrl: "https://github.com/teebs339/Video-Transcribe-RPA",
    },
    {
        id: "wedding-planner-pdf",
        title: "Event Planner PDF Generator",
        description:
            "Automated form-to-PDF workflow: processes submissions via n8n, structures data with GPT-5, fills Google Slides templates, exports PDFs, and emails them automatically. Built with JavaScript, OpenAI GPT-5, n8n, and Google APIs.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/wedding-planner-n8n-new-new.png' : '/wedding-planner-n8n-new-new.png',
        technologies: [
            "JavaScript",
            "OpenAI GPT-5",
            "n8n",
            "Google APIs",
        ],
        githubUrl: "https://github.com/teebs339/n8n-Wedding-Planner-PDF-generator",
    },
    {
        id: "free-flow-learning",
        title: "Free Flow Learning (FYP)",
        description:
            "Expanded an immersive VR educational app with interactive physics simulations, persistent user progress, and leaderboards for scalable learning experiences. Built with C#, Unity 3D, Meta Oculus Quest 2, and MySQL.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/unity-logo.png' : '/unity-logo.png',
        technologies: [
            "C#",
            "Unity 3D",
            "Meta Oculus Quest 2",
            "MySQL",
        ],
        githubUrl: "https://github.com/teebs339/Free-Flow-Learning",
    },
    {
        id: "fmcsa-extractor",
        title: "FMCSA Backend Data Extractor RPA",
        description:
            "Developed an RPA bot to automatically scrape and process FMCSA backend data, parse it into structured Excel reports using RegEx, and format outputs with VBA. Built a dynamic workflow driven by MX/US DOT numbers while ensuring compliance with public FMCSA datasets.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/FMCSA.png' : '/FMCSA.png',
        technologies: ["RPA", "UiPath", "Excel VBA", "RegEx"],
        githubUrl: "https://github.com/teebs339/FMCSA-Backend-Data-Extractor",
    },
]

export const achievements: Achievement[] = [
    {
        id: "team-leadership",
        title: "Team Leadership",
        organization: "Sybros Tech",
        description:
            "Led the RPA team at Sybros Tech to deliver enterprise automations, optimize workflows, and boost efficiency. Mentored developers, managed multiple projects using agile methodologies, and earned a LinkedIn recommendation from the CEO for leadership and technical excellence.",
        links: [
            {
                url: "https://www.linkedin.com/in/ateeb-shahid/",
                text: "LinkedIn Profile",
            },
            {
                url: "https://drive.google.com/file/d/1WNQjBqon14Xk6qgpfdOJw9HBeVa9nRSm/view?usp=sharing",
                text: "View Recommendation Letter",
            },
        ],
    },
    {
        id: "umt-workshop",
        title: "Conducted Workshops in UMT",
        organization: "Sybros Tech",
        description:
            "UMT's Department of AI hosted an RPA workshop in collaboration with Sybros Tech. On May 3, 2024, an MoU was signed to offer student internships. Workshop led by CEO Maaz Tariq & TL Ateeb Shahid.",
        links: [
            {
                url: "https://www.facebook.com/SSTUMTofficial/posts/pfbid0BqiUZLoGXsBh3EtbrmE4YTKzH5f7M5DoBKeYtMBCmkqMva9qpiNZzTWVAPyFPsdBl?rdid=zdE5DEPz1xLNUwBv#",
                text: "View Post 1",
            },
            {
                url: "https://www.facebook.com/SSTUMTofficial/posts/pfbid02P9CE7mTX1qCsrVoS8SPE6m2jm5B3teDnxhniXdepmyBv3scfnrKQMDfC5BbY8gpJl",
                text: "View Post 2",
            },
        ],
    },
    {
        id: "uae-work-experience",
        title: "UAE Work Experience",
        organization: "1XL Infra & Real Estate Development LLC",
        description:
            "Led AI-driven automation and software projects across the UAE, operating out of **Burj Khalifa, Dubai**. Built enterprise-grade solutions using RPA, n8n, Python, Node.js, machine learning models, Docker, and CRM integrations that optimized workflows, reduced manual effort, and improved operational efficiency for clients in multiple sectors.",
    },
]

export const certifications: Certification[] = [
    {
        id: "tensorflow-ml",
        title: "Machine Learning with TensorFlow on Google cloud",
        issuer: "Udemy",
        date: "Nov 2024",
        url: "http://ude.my/UC-95616298-c95a-4c29-80e4-cff99ad8a6c3",
    },
]

export const technicalSkills: Skill[] = [
    {
        category: "Programming & Scripting",
        items: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "C#", "C/C++", "VB.NET"],
    },
    {
        category: "RPA & Automation Platforms",
        items: ["UiPath", "Power Automate", "Blue Prism", "Automation Anywhere", "n8n"],
    },
    {
        category: "AI/ML & Workflow Tools",
        items: ["OpenAI Whisper", "Qwen", "Ollama", "Docker", "ML model integration", "LLM pipelines"],
    },
    {
        category: "Web & API Tools",
        items: ["REST APIs", "Postman", "Selenium", "Puppeteer", "API-driven architecture"],
    },
    {
        category: "Databases & Cloud",
        items: ["MySQL", "MongoDB", "Google Cloud", "CI/CD pipelines"],
    },
    {
        category: "Systems & Platforms",
        items: ["SAP Fiori/HANA (MM, SD, FI/CO)", "Salesforce", "HubSpot", "Zoho", "npm & CPanel deployments"],
    },
    {
        category: "IT Support & Infrastructure",
        items: ["Microsoft 365", "Teams", "SharePoint", "OneDrive", "Zoom", "Windows", "MacOS", "Exchange Server", "Active Directory", "hardware and software troubleshooting", "ITSM processes", "documentation", "user training", "customer support"],
    },
]

export const softSkills = [
    {
        title: "Communication",
        description:
            "Excellent written and verbal communication skills. Experienced in presenting technical concepts to both technical and non-technical audiences. Skilled in documentation and technical writing.",
    },
    {
        title: "Problem Solving",
        description:
            "Strong analytical thinking and creative problem-solving abilities. Capable of breaking down complex problems into manageable components and developing effective solutions.",
    },
    {
        title: "Teamwork",
        description:
            "Collaborative team player with experience working in diverse groups. Sharp leadership & decision making capabilities. Comfortable giving and receiving feedback, and adapting to different team dynamics and work styles.",
    },
    {
        title: "Leadership Qualities",
        description:
            "Excellent at prioritizing tasks and relegating to the team. Adept at meeting deadlines and managing multiple projects simultaneously. Experienced with agile methodologies and project management tools.",
    },
]

export const contactInfo: ContactInfo = {
    email: "teeb.shahid@gmail.com",
    location: "Dubai, United Arab Emirates",
    phone: "+971506771450",
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/ateeb-shahid/",
        github: "https://github.com/teebs339",
    },
}

