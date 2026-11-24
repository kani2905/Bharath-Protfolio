export const portfolioData = {
  personal: {
    name: "Bharath R",
    avatar: "/profile.jpg",
    title: "Information Technology Undergraduate & Full-Stack Developer",
    subtitle: "Java & Python • Full-Stack MERN & Spring Boot • IoT & Cloud Solutions",
    bio: "Information Technology undergraduate with a strong foundation in Java, Python, database management, and full-stack development. Interested in developing scalable software solutions and working with modern technologies. Eager to apply problem-solving skills, technical knowledge, and practical project experience while contributing to organizational goals.",
    location: "Salem, Tamil Nadu, India",
    college: "Sona College of Technology, Salem",
    phone: "+91 9629601950",
    email: "bharathrajkumar25@gmail.com",
    github: "https://github.com/BharathVijayRajkumar",
    linkedin: "https://linkedin.com/in/bharathr-it",
    availability: "Open to Full-time Opportunities & Internships",
    batch: "2023 - 2027",
    stats: [
      { label: "B.Tech CGPA", value: "7.42" },
      { label: "Certifications", value: "6+" },
      { label: "Core Technologies", value: "14+" },
      { label: "Academic Batch", value: "2023-27" }
    ]
  },

  about: {
    headline: "Developing scalable software solutions with strong algorithmic & full-stack fundamentals.",
    description: [
      "I am an Information Technology undergraduate at Sona College of Technology, Salem (CGPA: 7.42/10), passionate about solving real-world challenges through full-stack engineering and intelligent embedded systems.",
      "My technical journey bridges core backend development in Java, Spring Boot, and Node.js with modern, reactive frontends in React.js. I have also engineered assistive IoT solutions with ESP32 and computer vision to empower visually impaired users.",
      "With completed industry training from Infosys Springboard and multiple NPTEL Swayam & AWS certifications, I focus on clean object-oriented architecture, efficient database management, and scalable REST API development."
    ],
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Hands-on experience building end-to-end web apps with React.js, Node.js/Express, Spring Boot, MongoDB, and MySQL."
      },
      {
        title: "Core OOP & Data Structures",
        description: "Strong foundation in Java and Python, Object-Oriented Programming, and algorithmic problem-solving."
      },
      {
        title: "IoT & Assistive Systems",
        description: "Practical engineering with ESP32 microcontrollers, camera modules, sensors, and tactile haptic feedback."
      },
      {
        title: "CS Fundamentals & Cloud",
        description: "In-depth understanding of Operating Systems, DBMS, Computer Networks, and AWS Cloud Foundations."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming Languages",
        icon: "Cpu",
        skills: [
          { name: "Java", level: 90 },
          { name: "Python", level: 85 },
          { name: "JavaScript (ES6+)", level: 90 },
          { name: "SQL", level: 85 }
        ]
      },
      {
        name: "Frontend Development",
        icon: "Layout",
        skills: [
          { name: "React.js", level: 90 },
          { name: "HTML5 & CSS3", level: 95 },
          { name: "Tailwind CSS", level: 90 },
          { name: "JavaScript DOM", level: 92 },
          { name: "Responsive Web UI", level: 94 }
        ]
      },
      {
        name: "Backend & Frameworks",
        icon: "Server",
        skills: [
          { name: "Spring Boot (Java)", level: 85 },
          { name: "Node.js & Express.js", level: 90 },
          { name: "RESTful API Development", level: 92 },
          { name: "Role-Based Authentication", level: 88 }
        ]
      },
      {
        name: "Databases & Cloud / Tools",
        icon: "Database",
        skills: [
          { name: "MongoDB", level: 90 },
          { name: "MySQL", level: 88 },
          { name: "AWS Cloud Foundations", level: 82 },
          { name: "Git & GitHub", level: 92 },
          { name: "VS Code & Postman", level: 94 }
        ]
      }
    ],
    keyStrengths: [
      "Knowledge of Data Structures and Algorithms (DSA)",
      "Understanding of Object-Oriented Programming (OOP)",
      "Familiarity with REST API development",
      "Experience developing full-stack applications"
    ],
    areasOfInterest: [
      "Operating Systems",
      "Database Management Systems (DBMS)",
      "Computer Networks"
    ],
    softSkills: [
      "Adaptability",
      "Time Management",
      "Quick Learning",
      "Problem-Solving Skills"
    ]
  },

  certifications: [
    {
      title: "Programming in Java",
      issuer: "NPTEL - Swayam",
      type: "Academic Certification",
      badge: "NPTEL"
    },
    {
      title: "Design Thinking - A Primer",
      issuer: "NPTEL - Swayam",
      type: "Design & Product Thinking",
      badge: "NPTEL"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      type: "Cloud Architecture",
      badge: "AWS"
    },
    {
      title: "Introduction to Internet of Things (IoT)",
      issuer: "NPTEL - Swayam",
      type: "Embedded Systems",
      badge: "NPTEL"
    },
    {
      title: "Java Foundation",
      issuer: "Infosys SpringBoard",
      type: "Software Engineering",
      badge: "Infosys"
    },
    {
      title: "Data Processing and Visualization",
      issuer: "FutureSkills Prime",
      type: "Data Analytics",
      badge: "Govt / NASSCOM"
    }
  ],

  projects: [
    {
      id: "holoid",
      title: "Hospital Bed and Resource Management system (HOLOID)",
      subtitle: "Full-Stack MERN Healthcare Operations & Tracking Portal",
      description: "Developed HOLOID, a full-stack Hospital Bed and Resource Management System using React, Node.js/Express, and MongoDB, featuring role-based authentication, real-time resource tracking, and analytics dashboards.",
      category: "Full-Stack MERN",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Role-Based Auth", "Analytics Dashboard"],
      metrics: "Real-time bed allocation tracking & role-based dashboard",
      featured: true,
      demoUrl: "https://holoid-demo.example.com",
      githubUrl: "https://github.com/BharathVijayRajkumar",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      architectureNotes: "Engineered secure role-based access control (Admin, Doctor, Hospital Staff) to manage bed vacancies, emergency allocations, and patient transfers with MongoDB indexing for instantaneous query responses."
    },
    {
      id: "smart-wearable-glass",
      title: "Smart Wearable Glass with Emotion Detection",
      subtitle: "Assistive Haptic & Computer Vision System for Visually Impaired",
      description: "Developed a wearable assistive system for visually impaired users that converts facial emotions into distinct haptic feedback using ESP32, a camera module, and LRA motors for real-time social awareness.",
      category: "IoT & AI",
      tags: ["ESP32", "Computer Vision", "Python", "LRA Motors", "Haptic Feedback", "Embedded Systems", "Assistive Tech"],
      metrics: "Real-time facial emotion to tactile haptic mapping",
      featured: true,
      demoUrl: "https://github.com/BharathVijayRajkumar",
      githubUrl: "https://github.com/BharathVijayRajkumar",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
      architectureNotes: "Hardware pipeline built on an ESP32 microcontroller with a mini camera module streaming visual feeds to an emotion-classification model, triggering Linear Resonant Actuator (LRA) vibration sequences corresponding to detected facial emotions."
    },
    {
      id: "government-subsidy-tracking",
      title: "Government Subsidy & Grant Disbursement Tracking System",
      subtitle: "Infosys Springboard Internship Capstone • Enterprise Java Full Stack",
      badge: "Infosys Internship Project",
      description: "Developed during the Infosys Springboard Java Full Stack Internship 7.0: An enterprise-grade tracking and disbursement system designed to monitor government subsidies, verify beneficiary eligibility, manage fund allocations, and maintain transparent audit trails across public programs.",
      category: "Java Full Stack",
      tags: ["Java", "Spring Boot", "React.js", "MySQL", "Spring Data JPA", "Hibernate", "REST APIs"],
      metrics: "Layered enterprise architecture with JPA/Hibernate & MySQL",
      featured: true,
      githubUrl: "https://github.com/BharathVijayRajkumar/Government-Subsidy-Grant-Disbursement-Tracking-System",
      architectureNotes: "Engineered during the Infosys Springboard internship with a clean layered architecture (Controller, Service, Repository) powered by Java Spring Boot and Spring Data JPA. Includes database-level validations, MySQL transactions, and a reactive React.js frontend for transparent disbursement telemetry."
    },
    {
      id: "deepfake-forensics",
      title: "Multi-Pillar Deepfake Detection",
      subtitle: "AI-Powered Computer Vision Forensic Suite",
      description: "A multi-pillar forensic framework synthesizing Vision Transformers (ViT), shadow geometry analysis, semantic OCR, and Benford statistical law to spot synthetic media manipulations.",
      category: "AI & Full Stack",
      tags: ["Python", "PyTorch", "Transformers", "Computer Vision", "FastAPI"],
      metrics: "94.8% detection accuracy across cross-dataset benchmarks",
      featured: false,
      demoUrl: "https://deepfake-forensics.example.com",
      githubUrl: "https://github.com/BharathVijayRajkumar",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      architectureNotes: "Multi-model Python forensic engine assessing shadow geometry and transformer attention maps."
    }
  ],

  experience: [
    {
      role: "Java Full Stack Developer Virtual Intern",
      company: "Infosys Springboard",
      period: "Internship 7.0 (Completed)",
      location: "Virtual / Remote",
      description: "Completed comprehensive virtual internship training in Java Full Stack Development. Gained practical hands-on knowledge in building end-to-end web applications with Java, Spring Boot, React.js, and SQL.",
      achievements: [
        "Completed virtual internship training in Java Full Stack Development.",
        "Gained practical knowledge of Java, Spring Boot, React.js, REST APIs, SQL, HTML, CSS, and JavaScript.",
        "Engineered Capstone Project: Government Subsidy & Grant Disbursement Tracking System using React, Spring Boot, Hibernate, and MySQL."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sona College of Technology, Salem",
      period: "2023 - 2027",
      score: "CGPA: 7.42 / 10 (Upto 6th Sem)",
      description: "Comprehensive curriculum covering Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, and Computer Networks."
    },
    {
      degree: "HSC – Maths / Biology",
      institution: "SSRM Higher Secondary School, Salem, Karuppur",
      period: "2021 - 2022",
      score: "Percentage: 75.50%",
      description: "Higher Secondary Certificate with focus on Mathematics, Physics, Chemistry, and Biology."
    },
    {
      degree: "SSLC",
      institution: "SSRM Higher Secondary School, Salem, Karuppur",
      period: "2019 - 2020",
      score: "Percentage: 73.6%",
      description: "Secondary School Leaving Certificate."
    }
  ]
};
