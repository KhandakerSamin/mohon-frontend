const projectsData = [

  {
    id: 1,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "Golpo",
      homepageDetail:
        "",
      keywords: ["Travel Planning", "AI Assistant"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "TripKing",
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
    id: 2,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/TripKing.png",
      projectTitle: "TripKing",
      homepageDetail:
        "",
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
    id: 3,
    // Homepage fields
    homepage: {
      homepageThumbnail: "/p2.png",
      projectTitle: "Fact watch",
      keywords: ["News Media", "Web App"],
    },

    // Details page fields
    detailPage: {
      projectTitle: "Fact watch",
      projectInfo: "Fact-Checking & Media Literacy Platform",
      detailPageThumbnail: "/FactWatch-1.png",
      headingtittle: "Goal",
      headindescription: "Strengthen audience trust, increase content consumption, and boost repeat visits through UX improvements.",
      projectSubtitles: [
        { label: "Client", value: "FactWatch" },
        { label: "Role", value: "Product Designer " },
        { label: "Industry", value: "News Media" },
        { label: "Timeline", value: "February 2025" }
      ],

      // Description sections
      descriptions: [
        {
          serialNumber: "01",
          title: "Challenge",
          text: "Fact-Watch Provided Credible Fact-Checking Content, But:",
          bulletPoints: [
            "Visitors Didn't Engage Deeply With Articles.",
            "Navigation Friction Limited Exploration.",
            "Content Presentation Lacked The Clarity And Structure Needed For Credibility And Retention."
          ],
          photo: {
            type: "full-width",
            src: "/FactWatch-2.png",
            alt: "Project overview visualization"
          },
        },
        {
          serialNumber: "02",
          title: "Research & Key Insights",
          text: "",
          bulletPoints: [
            "User Behavior Analysis: Bounce rate was high, session times were short.",
            "User Needs: Quick access to trending checks, better readability, and mobile-friendly access.",
            "Competitive Benchmarking: Global fact-checking platforms (e.g., Reuters, Boom) emphasized trust signals, structured layouts, and discovery features."
          ],
          photo: {
            type: "full-width2",
            photos: [
              {
                src: "/FactWatch-3.png",
                alt: "Project overview visualization 1"
              },
              {
                src: "/FactWatch-4.png",
                alt: "Project overview visualization 2"
              }
            ]
          }
        },
        {
          serialNumber: "03",
          title: "Solutions",
          text: "",
          bulletPoints: [
            "Enhance readability for long-form content.",
            "Provide seamless navigation and easy topic discovery.",
            "Build trustworthiness through design consistency.",
            "Encourage longer and repeated engagement."
          ],
          photo: {
            type: "three-grid",
            images: [
              { src: "/FactWatch-5.png", alt: "Research analysis" },
              { src: "/FactWatch-6.png", alt: "User journey mapping" },
              { src: "/FactWatch-7.png", alt: "User journey mapping" }
            ]
          },
        },
        {
          serialNumber: "04",
          title: "Outcomes & Impact",
          text: "In the First Month",
          bulletPoints: [
            "User Visits: Increased significantly (30–40% in the first months).",
            "Engagement: Average session time grew by 40%.",
            "Trust Factor: User Feedback Highlighted Stronger Perception of Reliability",
            "Bounce Rate: Reduced as visitors explored multiple articles."
          ],
          photo: {
            type: "statistics",
            cards: [
              {
                value: "35%",
                label: "Increased User Visits"
              },
              {
                value: "40%",
                label: "Average Session Time Grew"
              },
              {
                value: "Trust Factor",
                label: "Stronger Perception of Reliability"
              }
            ]
          }
        }
      ],
    }
  },

]

export default projectsData