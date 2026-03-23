export const portfolioData = {
    info: {
        name: "Akurati Kaustiki",
        title: "Computer Science Engineer",
        subtitle: "M.Tech (AI & ML)",
        summary: "A Computer Science engineer with experience across machine learning and backend systems, motivated to learn by building and solve real-world problems."
    },
    
    contact: {
        address: "Flat F Ashok Elite Tamarai Homes, 1st Street Elcot Avenue, Sholinganallur, Chennai - 600119",
        email: "akuratikaustiki@gmail.com",
        phone: "7550169233",
        github: "github.com/akuratikaustiki",
        linkedin: "linkedin.com/in/akuratikaustiki"
    },
    
    highlights: [
        "Problem-solving",
        "Communication",
        "Time management",
        "Hard work and Dedication"
    ],
    
    skills: {
        "AI/ML": ["Machine Learning", "Deep Learning"],
        "Frameworks": ["Scikit-learn", "PyTorch"],
        "MLOps": ["FastAPI", "Docker", "MLflow", "GitHub Actions"],
        "Programming": ["Python", "Java", "C"],
        "Operating Systems": ["Mac", "Windows"]
    },
    
    experience: [
        {
            company: "DigiYosha",
            role: "Web Designer and Content Strategist",
            dates: "January 2024 - December 2026",
            details: [
                "Worked as a no-code Website Designer",
                "Worked on branding assets including banners, social media creatives, and visual identity elements",
                "Assisted in content strategy planning for marketing, across web and social platforms",
                "Collaborated directly with stakeholders to translate vague marketing requirements into concrete design and content solutions"
            ]
        },
        {
            company: "Tata Consultancy Services, Chennai, Tamil Nadu",
            role: "Assistant System Engineer",
            dates: "July 2022 - October 2023",
            details: [
                "Trained in Java, Networking Fundamentals",
                "Developed Code in Python based on project requirements",
                "Performed Machine Learning tasks (NLP) to classify text",
                "Worked on creating and Dockerising a FastAPI application that performs OCR on images",
                "Deployed solutions in a Development Environment on the AWS Cloud",
                "Worked on Database Connectivity",
                "Worked with ORM tools: SQLAlchemy",
                "Worked on creating Flask APIs and exposing them"
            ]
        }
    ],
    
    education: [
        {
            institution: "BITS Pilani WILP",
            degree: "M.Tech in Artificial Intelligence and Machine Learning",
            dates: "May 2024 - February 2026",
            cgpa: "9.51"
        },
        {
            institution: "MNM Jain Engineering College, Anna University",
            degree: "B.E. (Computer Science and Engineering)",
            dates: "June 2018 - April 2022",
            cgpa: "9.07"
        },
        {
            institution: "Vaels International School (Chennai, Tamil Nadu, India)",
            degree: "A Levels (Advanced Levels equivalent to 12th Std.)",
            dates: "June 2017 - May 2018",
            marks: "74.8%",
            board: "Cambridge Assessment International Education (CIE) - General Certificate of Education (GCE)"
        },
        {
            institution: "Vaels International School",
            degree: "IGCSE (10th Std.)",
            dates: "April 2015 - November 2015",
            marks: "83.25%",
            board: "Cambridge International General Certificate of Secondary Education (IGCSE)"
        }
    ],
    
    projects: [
        {
            title: "Violence Detection Using Deep Learning",
            subtitle: "Dissertation for M.Tech. AIML (BITS Pilani)",
            dates: "November 2024 - February 2026",
            description: "Developing a CCTV-based violence detection system using deep learning, combining object detection for weapon identification with CNN-LSTM models for temporal violence classification, focused on automated threat analysis for surveillance applications.",
            tech: ["Deep Learning", "CNN-LSTM", "Object Detection"],
            featured: true
        },
        {
            title: "Image Captioning",
            subtitle: "Capstone Project from IIIT Hyderabad and Talentsprint",
            dates: "November 2023 - February 2024",
            description: "Image Captioning using a multimodal model including pre-trained CNN as the encoder and LSTM with attention as the decoder.",
            tech: ["CNN", "LSTM", "Attention"],
            featured: false
        },
        {
            title: "Sentiment Analysis on Amazon Product Reviews",
            subtitle: "Mini Project",
            dates: "February 2021 - August 2021",
            description: "Machine Learning project on sentiment analysis on Amazon Product Reviews.",
            tech: ["Machine Learning", "NLP"],
            featured: false
        },
        {
            title: "Ageing Signs Detection",
            subtitle: "Project",
            dates: "April 2021 - May 2021",
            description: "Project on detecting Ageing Signs by using Object Detection in Machine Learning.",
            tech: ["Machine Learning", "Object Detection"],
            featured: false
        }
    ],
    
    certifications: [
        {
            title: "PG Certification in Artificial Intelligence and Machine Learning",
            issuer: "IIIT Hyderabad and Talentsprint",
            dates: "June 2023 - February 2024"
        }
    ],
    
    internships: [
        {
            title: "Machine Learning with Python",
            company: "Verzeo",
            dates: "April 2021 - May 2021"
        },
        {
            title: "Mastering Python Programming",
            company: "Futuro Focus",
            dates: "January 2021 - February 2021"
        }
    ],
    
    finearts: {
        "Dance": ["Kuchipudi", "Bharathanatyam"],
        "Music": ["Carnatic Vocal", "Veena"],
        "Other": ["Kalari (Indian Martial Art)", "Chess"]
    }
};

window.portfolioData = portfolioData;
