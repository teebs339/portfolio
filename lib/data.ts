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
    title: "Automation Engineer | RPA / IPA Engineer",
    bio: "Passionate about creating intuitive and impactful digital experiences. Interest and focused on Automation, Data Science, machine learning and AI. Open to Work & collaborate with forward thinking organizations in UAE.",
    location: "Dubai, UAE",
    education: "B.S. Computer Science",
    interests: [
        "Intelligent Automation",
        "Data Science",
        "Machine Learning",
        "AI",
        "LLMs",
    ],
    resumeUrl: "https://drive.google.com/file/d/1nVSjdQVcGIQAtv2TtZajffxZmibRz8gm/view?usp=sharing",
    profileImage: process.env.NODE_ENV === 'production' ? '/portfolio/new-pfp.png' : '/new-pfp.png',
}

export const aboutSections = [
    "I'm an Automation and Machine Learning Engineer with a passion for building intelligent systems that simplify complex workflows. My journey in technology started with a curiosity for how automation and AI can enhance human productivity. Over time, I've developed expertise in RPA, process optimization, and intelligent automation using tools like UiPath, Power Automate, and n8n, combined with Python and Node.js to deliver innovative, data-driven solutions.",
    "I aim to leverage my technical skills to create impactful solutions that address real-world challenges. I'm particularly interested in the intersection of technology and healthcare, where I believe innovative software can make a significant difference.",
    "When I'm not coding, you can find me hiking in the mountains, in gym, swimming pool, pulling strings on a guitar or performing backflips on a trampoline.",
]

export const experiences: Experience[] = [
    {
        id: "upwork-ai-engineer",
        title: "AI Automation Engineer",
        company: "Upwork",
        location: "Hybrid",
        startDate: "Jan 2025",
        endDate: "Aug 2025",
        duration: "8 months",
        description:
            "Delivered AI-driven RPA/IPA solutions as a freelancer for global clients across SAP MM, SD, and FI/CO processes. Built end-to-end automations using UiPath, Power Automate, Blue Prism, Automation Anywhere, n8n, Zapier, Make.com, Python, Node.js, REST APIs, and CRMs (Zoho, GHL, Salesforce, HubSpot). Earned Upwork Top Rated badge with 100% Job Success, completing 20+ projects with consistent 5-star reviews.",
        achievements: [
            "Delivered tailored AI automation solutions for international clients across multiple industries, including SAP MM, SD and FI/CO processes.",
            "Used RPA tools such as UiPath, Power Automate, Blue Prism, Automation Anywhere and web tools such as N8N, Zapier, Make.com, Retools to develop custom automated solutions.",
            "Achieved Upwork Top Rated status with 100% Job Success and 5-star client reviews.",
            "Completed 20+ projects for clients all over the world including US, UK, EU and Middle East.",
            "Built bots and integrations using UiPath, Power Automate, Python (Selenium), Node.js (Puppeteer) and ML Model Qwen, Docker/Ollama, REST APIs and CRM platforms like Zoho, GoHighLevel (GHL), SalesForce and HubSpot.",
        ],
        tools: [
            "UiPath",
            "Automation Anywhere",
            "Power Automate",
            "Selenium",
            "Puppeteer",
            "n8n",
            "Make.com",
            "Zapier",
        ],
        languages: ["Python", "JavaScript", "VB.NET", "SQL"],
    },
    {
        id: "sybros-lead-dev",
        title: "Lead RPA/IPA Developer",
        company: "Sybros Tech",
        location: "Lahore, Pakistan (On-site)",
        startDate: "Oct 2023",
        endDate: "Jan 2025",
        duration: "15 months",
        description:
            "At Sybros Tech, a technology consulting firm specializing in Robotic Process Automation (RPA) and Intelligent Process Automation (IPA), I led the RPA team in designing and deploying automation solutions across SAP Fiori and HANA, streamlining finance, procurement, and sales operations. Oversaw developer training, guided project execution, and represented Sybros Tech as a speaker in university workshops. Delivered scalable automations using UiPath, Power Automate, Python, and API integrations, showcasing the company's leadership in enterprise automation.",
        achievements: [
            "Experienced in SAP Fiori and SAP HANA environments, including data extraction, reporting, and process automation.",
            "Led a team of 5 developers to deliver high-quality automation projects across all modules.",
            "Received a LinkedIn recommendation from the CEO of SybrosTech, recognizing professionalism, problem-solving, teamwork, and reliability.",
            "Designed and implemented end-to-end RPA solutions using UiPath, Power Automate, Python, and API integrations for SAP and non-SAP systems.",
            "Conducted process analysis, data mining, and workflow optimization leveraging SAP HANA's real-time processing capabilities.",
            "Automated SAP HANA data queries and reporting for finance, procurement, and sales operations, reducing manual effort and errors.",
            "Managed full project lifecycle, ensuring timely delivery and adherence to quality standards.",
            "Experienced with tools and platforms: Postman, Node.js (Puppeteer), Python (Selenium), Google Apps Script, Salesforce, HubSpot, Zapier, Make.com, n8n, MongoDB.",
            "Trained and mentored junior developers and conducted university workshops on RPA, automation, and SAP process integration.",
        ],
        tools: [
            "UiPath/Orchestrator",
            "Power Automate/Power Apps",
            "Selenium",
            "Twilio",
            "ML Models",
            "LLMs",
            "Postman",
            "BeautifulSoup",
            "MongoDB",
            "n8n",
        ],
        languages: ["Python", "JavaScript", "VB.NET", "SQL", "PHP"],
    },
]

export const educations: Education[] = [
    {
        id: "ucp-bs",
        institution: "University of Central Punjab (UCP)",
        location: "Lahore, Pakistan",
        degree: "Bachelor of Science in Computer Science",
        startDate: "Jun 2019",
        endDate: "Jul 2023",
        duration: "4 years",
        gpa: "2.91/4.0",
        coursework: [
            "Data Structures & Algorithms",
            "Data Analysis and Algorithms",
            "Generative AI",
            "Artificial Intelligence",
        ],
    },
    {
        id: "pgc-ics",
        institution: "Punjab Group of Colleges (PGC)",
        location: "Lahore, Pakistan",
        degree: "Intermediate in Computer Sciences (ICS)",
        startDate: "May 2017",
        endDate: "Mar 2019",
        duration: "2 years",
        subjects: ["Maths", "Physics", "Computer Science"],
    },
]

export const projects: Project[] = [
    {
        id: "free-flow-learning",
        title: "Final Year Project - Free Flow Learning",
        description:
            "Built an immersive Oculus Meta Quest VR app using Unity 3D based on C# programming language. Leveraged XR Libraries to simulate accurate in app interaction and collision physics. Connected MySQL database for score keeping properties.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/unity-logo.png' : '/unity-logo.png',
        technologies: [
            "Meta Quest 2",
            "C#",
            "MySQL",
            "XR",
            "Unity3D",
            "Oculus",
            "Rendering/Vizualization",
        ],
        githubUrl: "https://github.com/teebs339/FYP-Free-Flow-Learning",
    },
    {
        id: "wedding-planner-pdf",
        title: "Wedding Planner PDF Generator",
        description:
            "n8n workflow integrating APIs of Google Sheets, Slides, and Gmail to generate and deliver wedding planner PDFs. Uses GPT-5 Model for data structuring JSON and JavaScript nodes for formatting the JSON within n8n before automated export and email delivery.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/wedding-planner-n8n-new-new.png' : '/wedding-planner-n8n-new-new.png',
        technologies: [
            "n8n",
            "Google Sheets API",
            "Google Slides API",
            "Google Drive API",
            "Gmail API",
            "Wix Automations",
            "OpenAI API (GPT-5)",
            "JavaScript",
            "Node.js",
            "Webhooks",
            "JSON",
            "Google Workspace (GCC)",
        ],
        githubUrl: "https://github.com/teebs339/n8n-Wedding-Planner-PDF-generator",
    },
    {
        id: "video-transcribe-rpa",
        title: "Video Transcribe RPA",
        description:
            "Built an automated RPA pipeline using Python and UiPath/VB.NET to fetch videos from Google Sheets and MagicBrief, extract frames and audio, generate transcripts via Whisper API, and upload outputs to Miro, optimized for scalable, low-intervention VM deployment.",
        image: process.env.NODE_ENV === 'production' ? '/portfolio/video-transcribe-rpa.png' : '/video-transcribe-rpa.png',
        technologies: [
            "UiPath",
            "RPA",
            "Python",
            "VB.NET",
            "OpenAI Whisper",
            "Miro",
            "pandas",
            "moviepy",
            "Virtual Machine (VM)",
        ],
        githubUrl: "https://github.com/teebs339/Video-Transcribe-RPA",
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
        id: "rpa-team-lead",
        title: "RPA Team Lead",
        organization: "Sybros Tech, Lahore",
        description:
            "Led the RPA team to deliver enterprise automations across SAP platforms, optimizing workflows and boosting efficiency. Mentored developers and earned a formal LinkedIn recommendation from the CEO for leadership and technical excellence.",
        link: "https://www.linkedin.com/in/ateeb-shahid/",
        linkText: "LinkedIn Profile",
    },
    {
        id: "top-rated-freelancer",
        title: "Top Rated Freelancer",
        organization: "Upwork",
        description:
            "Delivered 20+ AI-driven automation projects globally using RPA/IPA, web automation, Python/Node.js, ML models, Docker, and CRMs. Achieved Top Rated freelancer badge in no time with 100% Job Success Score.",
        link: "https://www.upwork.com/freelancers/~018029074a06d605ab",
        linkText: "Upwork Profile",
    },
    {
        id: "rpa-workshop",
        title: "Conducted RPA Workshop at University of Management & Technology (UMT)",
        organization: "Representing SybrosTech as a TL",
        description:
            "UMT's Department of AI hosted an RPA workshop in collaboration with Sybros Tech. On May 3, 2024, an MoU was signed to offer student internships. Workshop led by CEO Maaz Tariq & TL Ateeb Shahid, Sybros Tech is a pioneering RPA company in Pakistan, aiming to drive impactful collaboration in automation.",
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
        category: "Programming Languages",
        items: ["Python", "VB.NET", "C#", "C/C++", "HTML/CSS", "SQL", "JavaScript", "PHP"],
    },
    {
        category: "Frameworks & Libraries",
        items: [
            "HuggingFace",
            "OpenAI",
            "Numpy",
            "moviepy",
            "Pandas",
            "Flask",
            "Selenium",
            "BeautifulSoup",
            "OpenCV",
            "Ollama",
        ],
    },
    {
        category: "Tools & Technologies",
        items: [
            "UiPath",
            "Power Automate",
            "Automation Anywhere",
            "n8n",
            "Make.com",
            "Zapier",
            "Retool",
            "HighLevel (GHL)",
            "SalesForce",
            "HubSpot",
            "ClickUp",
            "PhotoShop",
            "Cursor",
            "Git & GitHub",
            "AWS",
            "CI/CD",
            "Google Cloud",
            "Postman",
        ],
    },
    {
        category: "Databases",
        items: ["MongoDB", "MySQL"],
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

