const projectsData = [
  {
    id: 1,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "Golpo App",
      homepageDetail:
        "Your Audio Storytelling Experience - A user-centric mobile application designed to deliver immersive audio content, including audiobooks, podcasts, and storytelling sessions, with personalized recommendations and offline listening capabilities.",
      keywords: ["Audio Streaming", "Mobile App"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "Golpo App",
      projectInfo: "Your Audio Storytelling Experience",
      detailPageThumbnail: "/p2.png",
      projectSubtitles: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "February 2025" },
        { label: "Industry", value: "Music Industry" },
        { label: "Platform", value: "Mobile Application" }
      ],

      // Description sections
      descriptions: [
        {
          serialNumber: "01",
          title: "Project Overview",
          text: "The Primary Objective Was To Create An Intuitive And Reliable App That Integrates Seamlessly With Audio Content, Offering Functionalities Such As Genre-Based Discovery, Personalized Recommendations, And Offline Listening Capabilities. The Project Aimed To Enhance The Audio Experience By Providing Users With Ultimate Control Over Their Listening Journey.",
          photo: {
            type: "two-grid",
            images: [
              { src: "/p2.png", alt: "Research analysis" },
              { src: "/p1.png", alt: "User journey mapping" }
            ]
          },
        },
        {
          serialNumber: "01",
          title: "User Research & Analysis",
          text: "Conducted extensive user research to understand listening habits, preferences, and pain points in existing audiobook platforms. Analyzed competitor apps and identified opportunities for improvement in user experience and content discovery.",
          photo: {
            type: "full-width",
            src: "/p3.png",
            alt: "Project overview visualization"
          },
        },
        {
          serialNumber: "03",
          title: "Design Process",
          text: "Developed wireframes, prototypes, and high-fidelity designs focusing on intuitive navigation and seamless audio playback experience. Created a design system that ensures consistency across all app screens.",
          photo: {
            type: "carousel",
            images: [
              { src: "/p1.png", alt: "Wireframe design" },
              { src: "/p2.png", alt: "Prototype screens" },
              { src: "/p3.png", alt: "Design system" },
              { src: "/p1.png", alt: "Final designs" }
            ]
          },
        },
        {
          serialNumber: "04",
          title: "Final Solution",
          text: "The final app design features an elegant interface with genre-based browsing, smart recommendations, and seamless playback controls. Users can easily discover new content and manage their listening experience.",
          photo: {
            type: "endless-height",
            src: "/p1.png",
            alt: "Final app solution"
          },
        },
      ],
    }
  },

  {
    id: 2,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "TripLine",
      homepageDetail:
        "Smart Travel Companion - An intelligent travel planning app that helps users organize trips, track expenses, and discover local experiences with AI-powered recommendations.",
      keywords: ["Travel Planning", "AI Assistant"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "TripLine",
      projectInfo: "Smart Travel Companion",
      detailPageThumbnail: "/p1.png",
      projectSubtitles: [
        { label: "Role", value: "UX/UI Designer" },
        { label: "Timeline", value: "March 2025" },
        { label: "Industry", value: "Travel & Tourism" },
        { label: "Platform", value: "Cross-Platform App" }
      ],

      descriptions: [
        {
          serialNumber: "01",
          title: "Challenge & Opportunity",
          text: "Travel planning often involves juggling multiple apps, websites, and documents. TripLine was designed to consolidate the entire travel experience into one intelligent platform that learns from user preferences and provides personalized recommendations.",
          photo: {
            type: "two-grid",
            images: [
              { src: "/p1.png", alt: "Feature wireframes" },
              { src: "/p1.png", alt: "User flow diagrams" }
            ]
          },
        },
        {
          serialNumber: "02",
          title: "Feature Development",
          text: "Developed core features including itinerary planning, expense tracking, local discovery, and real-time travel updates. Each feature was designed with user-centric approach focusing on simplicity and efficiency.",
          photo: {
            type: "full-width",
            src: "/p1.png",
            alt: "Travel planning challenge"
          },
        },
        {
          serialNumber: "03",
          title: "User Interface Design",
          text: "Created a clean, modern interface that works seamlessly across different devices. The design emphasizes visual hierarchy and intuitive navigation to help users quickly access important travel information.",
          photo: {
            type: "carousel",
            images: [
              { src: "/p1.png", alt: "Mobile interface" },
              { src: "/p2.png", alt: "Desktop interface" },
              { src: "/p3.png", alt: "Tablet interface" },
              { src: "/p1.png", alt: "Component library" }
            ]
          },
        },
        {
          serialNumber: "04",
          title: "Impact & Results",
          text: "The app successfully streamlined the travel planning process, reducing planning time by 60% and increasing user satisfaction with personalized recommendations and seamless expense tracking.",
          photo: {
            type: "endless-height",
            src: "/p2.png",
            alt: "App impact metrics"
          },
        },
      ],
    }
  },

  {
    id: 3,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p2.png",
      projectTitle: "FactWatch",
      homepageDetail:
        "Truth Verification Platform - A comprehensive fact-checking application that helps users verify information authenticity using AI-powered analysis and trusted source verification.",
      keywords: ["Fact Checking", "Information Verification"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "FactWatch",
      projectInfo: "Truth Verification Platform",
      detailPageThumbnail: "/p2.png",
      projectSubtitles: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "January 2025" },
        { label: "Industry", value: "Media & Information" },
        { label: "Platform", value: "Web & Mobile Platform" }
      ],

      descriptions: [
        {
          serialNumber: "01",
          title: "Problem Statement",
          text: "In an era of information overload and misinformation, users need reliable tools to verify the authenticity of news and claims. FactWatch addresses this critical need by providing instant fact-checking capabilities with transparent source verification.",
          photo: {
            type: "two-grid",
            images: [
              { src: "/p2.png", alt: "Research findings" },
              { src: "/p2.png", alt: "Strategy framework" }
            ]
          },
        },
        {
          serialNumber: "02",
          title: "Research & Strategy",
          text: "Conducted thorough research on misinformation patterns, user verification behaviors, and existing fact-checking methodologies. Developed a strategy that balances automation with human oversight for maximum accuracy.",
          photo: {
            type: "full-width",
            src: "/p2.png",
            alt: "Problem identification"
          },
        },
        {
          serialNumber: "03",
          title: "Design System & Components",
          text: "Built a comprehensive design system focused on trust, transparency, and clarity. Created components that clearly communicate verification status, source credibility, and confidence levels to users.",
          photo: {
            type: "carousel",
            images: [
              { src: "/p2.png", alt: "Design system" },
              { src: "/p2.png", alt: "Component library" },
              { src: "/p2.png", alt: "UI patterns" }
            ]
          },
        },
        {
          serialNumber: "04",
          title: "Verification Interface",
          text: "Designed an intuitive interface that allows users to quickly submit claims for verification, view detailed analysis results, and access supporting evidence from trusted sources.",
          photo: {
            type: "endless-height",
            src: "/p3.png",
            alt: "Verification interface"
          },
        },
        {
          serialNumber: "05",
          title: "Mobile Experience",
          text: "Optimized the platform for mobile devices, ensuring users can verify information on-the-go with the same level of detail and accuracy as the desktop experience.",
          photo: {
            type: "full-width",
            src: "/p3.png",
            alt: "Mobile experience"
          },
        },
      ],
    }
  },

  {
    id: 4,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "SecureBank Pro",
      homepageDetail:
        "Next-Generation Banking Experience - A comprehensive digital banking platform that combines advanced security features with intuitive user experience for seamless financial management.",
      keywords: ["Digital Banking", "Financial Technology"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "SecureBank Pro",
      projectInfo: "Next-Generation Banking Experience",
      detailPageThumbnail: "/p3.png",
      projectSubtitles: [
        { label: "Role", value: "Senior UX Designer" },
        { label: "Timeline", value: "April 2025" },
        { label: "Industry", value: "Financial Services" },
        { label: "Platform", value: "Enterprise Application" }
      ],

      descriptions: [
        {
          serialNumber: "01",
          title: "Project Vision",
          text: "SecureBank Pro was envisioned as a revolutionary banking platform that would redefine digital banking standards. The goal was to create a secure, user-friendly interface that could handle complex financial operations while maintaining the highest security standards.",
          photo: {
            type: "two-grid",
            images: [
              { src: "/p2.png", alt: "Support interface" },
              { src: "/p1.png", alt: "Chat system" }
            ]
          },
        },
        {
          serialNumber: "02",
          title: "Security-First Design",
          text: "Implemented advanced security measures including biometric authentication, multi-factor verification, and encrypted transactions. The design ensures security without compromising user experience or accessibility.",
          photo: {
            type: "full-width",
            src: "/p3.png",
            alt: "Project vision"
          },
        },
        {
          serialNumber: "03",
          title: "Dashboard & Analytics",
          text: "Created comprehensive dashboards that provide users with clear insights into their financial health, spending patterns, and investment performance. The interface uses data visualization to make complex financial information easily understandable.",
          photo: {
            type: "carousel",
            images: [
              { src: "/p3.png", alt: "Main dashboard" },
              { src: "/p3.png", alt: "Analytics view" },
              { src: "/p3.png", alt: "Data visualization" },
              { src: "/p3.png", alt: "Reports interface" },
              { src: "/p1.png", alt: "Mobile dashboard" },
              { src: "/p2.png", alt: "Responsive design" }
            ]
          },
        },
        {
          serialNumber: "04",
          title: "Transaction Management",
          text: "Designed streamlined transaction flows that allow users to send money, pay bills, and manage accounts with minimal friction. The interface provides clear feedback and confirmation at every step.",
          photo: {
            type: "endless-height",
            src: "/p3.png",
            alt: "Transaction interface"
          },
        },
        {
          serialNumber: "05",
          title: "Investment Platform",
          text: "Integrated investment management tools that allow users to track portfolios, analyze market trends, and make informed investment decisions directly within the banking platform.",
          photo: {
            type: "two-grid",
            images: [
              { src: "/p2.png", alt: "Support interface" },
              { src: "/p1.png", alt: "Chat system" }
            ]
          },
        },
        
      ],
    }
  },
]

export default projectsData