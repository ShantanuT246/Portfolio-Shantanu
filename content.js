const CONTENT = {
  name: "Shantanu Tapole",
  tagline: "Second Year Computer Science and Engineering Student @VIT Vellore",
  location: "Pune, India",
  email: "shantanutapole@gmail.com",
  phone: "+91 7756876701",
  github: "https://github.com/shantanutapole",
  linkedin: "https://linkedin.com/in/shantanutapole",

  about:
    "I'm a Second-year CS student at VIT Vellore (CGPA 8.77). I've shipped code across three internships — building a multi-feature deepfake detection pipeline at GenReal.AI, a chart generation backend at Scientiow, and ABAP data processing programs at ITTI.",

  education: [
    {
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu, India",
      degree: "Bachelor of Technology — Computer Science and Engineering",
      period: "July 2024 – July 2028",
      grade: "CGPA: 8.77",
    },
  ],

  experience: [
    {
      company: "ITTI PVT LTD",
      role: "SAP Advanced Business Application Programming Developer Intern",
      type: "Remote",
      period: "Oct 2025 – Present",
      bullets: [
        "Developed ABAP programs for structured data processing using internal tables and report generation.",
        "Debugged and optimized ABAP code using SAP debugging tools to identify logical and runtime errors.",
      ],
    },
    {
      company: "GenReal.AI",
      role: "AI Intern",
      type: "Remote",
      period: "June 2025 – Aug 2025",
      bullets: [
        "Developed two deepfake detection ML models: TrueBlink (eye dynamics-based) and DeltaFrame (multi-feature pipeline analyzing 12+ spatial and perceptual features).",
        "Built Python tools using MediaPipe Face Mesh for EAR-based blink analysis and MSE/PSNR/SSIM-based anomaly detection.",
      ],
    },
    {
      company: "Scientiflow",
      role: "Backend Developer Intern",
      type: "Remote",
      period: "May 2025 – July 2025",
      bullets: [
        "Built the backend for a data visualization service enabling users to upload datasets and generate customizable, downloadable charts.",
        "Implemented secure data handling, input validation, and dynamic chart rendering driven by client-side configurations.",
      ],
    },
  ],

  skills: {
    "Programming Languages": ["C", "C++", "Python", "Java", "Swift", "HTML", "CSS", "ABAP"],
    "Libraries / Frameworks": ["NumPy", "OpenCV", "MediaPipe"],
    "Tools / Platforms": ["Git", "GitHub", "VS Code", "XCode", "SAP"],
  },

  projects: [
    {
      title: "Deepfake Video Preprocessing",
      tech: ["Python", "OpenCV"],
      link: "#",
      description:
        "Comprehensive video preprocessing pipeline — frame extraction, face detection & cropping, blurring, histogram analysis, edge detection, and color channel separation for deepfake video analysis. Used a Kaggle-sourced video dataset.",
      badge: null,
    },
    {
      title: "Intelligent Street Lighting Framework",
      tech: ["IoT", "Machine Learning"],
      link: null,
      description:
        "Proposed an intelligent street lighting framework using IoT sensors and ML to dynamically adjust brightness. Designed a hybrid solar-wind energy model for sustainable, low-power, off-grid operation.",
      badge: "Patent Filed · University IPR Cell (Under Review)",
    },
  ],

  certifications: [
    { name: "Advanced Learning Algorithms",                             issuer: "DeepLearning.AI · Coursera",  date: "Jan 2026" },
    { name: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI · Coursera",  date: "Dec 2025" },
    { name: "Java (Basic)",                                             issuer: "HackerRank",                  date: "Nov 2025" },
    { name: "AWS Educate Introduction to Generative AI",                issuer: "Amazon Web Services",         date: "Jul 2025" },
    { name: "Problem Solving (Basic)",                                  issuer: "HackerRank",                  date: "May 2025" },
    { name: "Python (Basic)",                                           issuer: "HackerRank",                  date: "May 2025" },
    { name: "Web Developer Bootcamp with Flask and Python",             issuer: "Udemy",                      date: "Apr 2025" },
    { name: "Python Essentials 1",                                      issuer: "Cisco",                      date: "Jan 2025" },
    { name: "Microsoft Office Specialist: Excel (Office 2016)",         issuer: "Microsoft",                  date: "Apr 2022" },
  ],

  languages: [
    { name: "English",  level: "Fluent" },
    { name: "Marathi",  level: "Fluent" },
    { name: "Hindi",    level: "Fluent" },
    { name: "German",   level: "Beginner" },
  ],
};
