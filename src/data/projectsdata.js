const projectsData = [
  {
    id: 1,
    homepage: {
      homepageThumbnail: "/p1.png",
      projectTitle: "Golpo",
      homepageDetail: "",
      keywords: ["Audiobook", "Storytelling"],
    },

    detailPage: {
      projectTitle: "Golpo",
      projectInfo: "Audiobook & Storytelling App",
      
      projectSubtitles: [
        { label: "Client", value: "Golpo" },
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "Media & Entertainment" },
        { label: "Timeline", value: "Nov 2023" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false, 
          description: "Golpo is a mobile app that enables users to listen to their favorite books in audio format, share stories instantly through QR codes, support artists using stickers, take notes while listening, and organize audios into a personalized library.",
          images: [
            { src: "/cs1-1.png", alt: "Golpo app objective" }
          ]
        },
        {
          type: "text-grid",
          title: "Problem Statement",
          titleBreakLine: true,
          description: "Create an audiobook platform that is simple for listeners and empowering for creators.",
          images: [
            { src: "/cs1-2.png", alt: "Problem statement visualization" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Project Goals",
          titleBreakLine: true,
          description: [
            "Provide a smooth, distraction-free listening experience",
            "Create a frictionless sharing system using QR codes",
            "Enable users to emotionally support creators with stickers",
            "Offer personalized audio organization in a dedicated library",
            "Integrate note-taking while listening",
            "Build an interface that is modern, minimal, and accessible"
          ],
          images: [
            { src: "/cs1-3.png", alt: "Project goals overview" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Primary Users",
          titleBreakLine: true,
          description: [
            "Young professionals with limited reading time.",
            "Students who prefer listening to books on the go.",
            "Local artists/authors who want to publish audiobooks."
          ],
          images: [
            { src: "/cs1-4.png", alt: "User persona 1" },
            { src: "/cs1-5.png", alt: "User persona 2" },
            { src: "/cs1-6.png", alt: "User persona 3" }
          ]
        },
        {
          type: "text-grid-list",
          title: "User Flow",
          titleBreakLine: false,
          description: [
            "Onboarding: Splash Screen→ Sign In / Sign Up → Choose Interests → Home Screen",
            "Audio Player: Recommended→ Sign In / Sign Up → Choose Interests → Home Screen",
          ],
          images: [
            { src: "/cs1-7.png", alt: "User flow diagram" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Core Features",
          titleBreakLine: true,
         description: [
            "Modern Audio Player: Minimal layout, big controls, quick-access notes.",
            "QR Code Sharing: One scan → story shared instantly.",
            "Support Stickers:  Listeners can support artists with fun stickers + animations.",
            "Note-Taking: Take time-synced notes without leaving the player.",
          ],
          images: [
            { src: "/cs1-8.png", alt: "QR sharing feature" },
            { src: "/cs1-9.png", alt: "Sticker support feature" },
            { src: "/cs1-10.png", alt: "Note-taking feature" },
            { src: "/cs1-11.png", alt: "Library organization" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Typography: Clean, readable sans-serif",
            "Color Palette: Warm tones for storytelling, deep accents for controls",
            "Components: Cards, buttons, audio controls, sticky player",
            "Icons: Rounded, friendly, consistent"
          ],
          images: [
            { src: "/cs1-12.png", alt: "Design system colors" },
            { src: "/cs1-13.png", alt: "Design components" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "The final product reflects my goal to create an effortless audio-storytelling experience simple, human, and focused on meaningful engagement. Every interaction, from listening to sharing via QR, was shaped through continuous iteration and user-centric decision-making.",
          images: [
            { src: "/cs1-14.png", alt: "Final product showcase" }
          ]
        },
        {
          type: "text-only-list",
          title: "Outcomes & Impact",
          titleBreakLine: true,
          description: [
            "30% faster sharing flow",
            "Higher creator engagement via stickers",
            "Improved experience with note-taking"
          ]
        },
        {
          type: "text-only-list",
          title: "What I Learned",
          titleBreakLine: true,
          description: [
            "Balancing simplicity with feature-rich design",
            "Importance of micro-interactions in audio experiences",
            "QR sharing dramatically improves app virality",
            "Focus on both sides: creators & listeners",
            "Next improvements: Smart recommendations, collaborative playlists, creator dashboard"
          ]
        }
      ]
    }
  },

  {
    id: 2,
    homepage: {
      homepageThumbnail: "/TripKing.png",
      projectTitle: "TripKing",
      homepageDetail: "",
      keywords: ["Travel", "Planning"],
    },

    detailPage: {
      projectTitle: "TripKing",
      projectInfo: "AI-Powered Travel Planning Platform",
      
      projectSubtitles: [
        { label: "Client", value: "TripKing" },
        { label: "Role", value: "Lead Product Designer" },
        { label: "Industry", value: "Travel & Tourism" },
        { label: "Timeline", value: "Jan 2024" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false,
          description: "TripKing is an intelligent travel planning platform that consolidates itinerary creation, expense tracking, local discovery, and real-time updates into one seamless experience. The app learns from user preferences to provide personalized recommendations for every journey.",
          images: [
            { src: "/cs2-1.png", alt: "TripKing objective" }
          ]
        },
        {
          type: "text-grid",
          title: "Problem Statement",
          titleBreakLine: true,
          description: "Travel planning involves juggling multiple apps, websites, and documents. Travelers face fragmented experiences when booking flights, hotels, activities, and managing budgets. There's no unified platform that understands their preferences and adapts recommendations accordingly.",
          images: [
            { src: "/cs2-2.png", alt: "Travel planning challenges" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Project Goals",
          titleBreakLine: true,
          description: [
            "Consolidate all travel planning tools into one intelligent platform",
            "Implement AI-driven personalized recommendations based on user behavior",
            "Create intuitive expense tracking with multi-currency support",
            "Develop real-time travel updates and alerts system",
            "Build collaborative trip planning for group travelers",
            "Design offline-first architecture for international travelers"
          ],
          images: [
            { src: "/cs2-3.png", alt: "Project goals" }
          ]
        },
        {
          type: "text-grid-ordered",
          title: "Primary Users",
          titleBreakLine: true,
          description: [
            "Frequent business travelers needing efficient itinerary management",
            "Families planning vacations with multiple activities and budgets",
            "Solo adventurers seeking personalized local experiences"
          ],
          images: [
            { src: "/cs2-4.png", alt: "Business traveler persona" },
            { src: "/cs2-5.png", alt: "Family traveler persona" },
            { src: "/cs2-6.png", alt: "Solo traveler persona" }
          ]
        },
        {
          type: "text-grid",
          title: "User Flow",
          titleBreakLine: true,
          description: "Users create trips by entering destinations and dates. The AI suggests itineraries based on preferences, budget, and travel style. They can book services, track expenses in real-time, discover local experiences, and receive timely updates throughout their journey.",
          images: [
            { src: "/cs2-7.png", alt: "Complete user flow" }
          ]
        },
        {
          type: "text-grid",
          title: "Core Features",
          titleBreakLine: true,
          description: "Smart itinerary builder with drag-and-drop scheduling. Multi-currency expense tracker with receipt scanning. Local discovery engine powered by user reviews and AI recommendations. Real-time flight and weather alerts. Collaborative planning with shared access for travel companions.",
          images: [
            { src: "/cs2-8.png", alt: "Itinerary builder" },
            { src: "/cs2-9.png", alt: "Expense tracker" },
            { src: "/cs2-10.png", alt: "Discovery engine" },
            { src: "/cs2-11.png", alt: "Real-time alerts" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Vibrant color palette inspired by global destinations and travel imagery",
            "Clean typography with excellent readability across device sizes",
            "Card-based UI for easy scanning of trip details and recommendations",
            "Consistent iconography representing travel categories and actions"
          ],
          images: [
            { src: "/cs2-12.png", alt: "Design system overview" },
            { src: "/cs2-13.png", alt: "Component library" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "TripKing successfully streamlined the travel planning process into an intuitive, all-in-one platform. Users can now plan entire trips without switching between multiple apps, receive personalized recommendations, and manage expenses effortlessly while traveling.",
          images: [
            { src: "/cs2-14.png", alt: "Final product screens" }
          ]
        },
        {
          type: "text-only-list",
          title: "Outcomes & Impact",
          titleBreakLine: true,
          description: [
            "Reduced planning time by 60% compared to traditional multi-app approach",
            "Achieved 78% user retention rate within first 6 months",
            "Users saved average of $300 per trip through smart recommendations"
          ]
        },
        {
          type: "text-only-list",
          title: "What I Learned",
          titleBreakLine: true,
          description: [
            "Complex travel data requires careful information architecture",
            "AI recommendations need transparency to build user trust",
            "Offline functionality is critical for international travel apps",
            "Collaborative features increase engagement and app stickiness",
            "Real-time updates must be timely but not overwhelming"
          ]
        }
      ]
    }
  },

  {
    id: 3,
    homepage: {
      homepageThumbnail: "/p2.png",
      projectTitle: "FactWatch",
      homepageDetail: "",
      keywords: ["News Media", "Fact-Checking"],
    },

    detailPage: {
      projectTitle: "FactWatch",
      projectInfo: "Fact-Checking & Media Literacy Platform",
      
      projectSubtitles: [
        { label: "Client", value: "FactWatch" },
        { label: "Role", value: "Product Designer" },
        { label: "Industry", value: "News Media" },
        { label: "Timeline", value: "Feb 2025" }
      ],

      sections: [
        {
          type: "text-grid",
          title: "Objective",
          titleBreakLine: false,
          description: "FactWatch is a comprehensive fact-checking platform that verifies news claims, provides transparent source analysis, and educates users on media literacy. The platform aims to combat misinformation by making truth verification accessible, fast, and trustworthy for everyone.",
          images: [
            { src: "/cs3-1.png", alt: "FactWatch objective" }
          ]
        },
        {
          type: "text-grid",
          title: "Problem Statement",
          titleBreakLine: true,
          description: "FactWatch provided credible fact-checking content, but visitors didn't engage deeply with articles. Navigation friction limited exploration, and content presentation lacked the clarity and structure needed for credibility and retention. High bounce rates and short session times indicated poor user experience.",
          images: [
            { src: "/cs3-2.png", alt: "Problem analysis" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Project Goals",
          titleBreakLine: true,
          description: [
            "Enhance readability for long-form fact-checking content",
            "Provide seamless navigation and easy topic discovery",
            "Build trustworthiness through consistent design patterns",
            "Encourage longer and repeated user engagement",
            "Implement clear verification status indicators",
            "Create mobile-first responsive experience"
          ],
          images: [
            { src: "/cs3-3.png", alt: "Project goals framework" }
          ]
        },
        {
          type: "text-grid-ordered",
          title: "Primary Users",
          titleBreakLine: true,
          description: [
            "News consumers seeking to verify claims they encounter online",
            "Journalists and researchers requiring source verification tools",
            "Educators teaching media literacy and critical thinking skills"
          ],
          images: [
            { src: "/cs3-4.png", alt: "General user persona" },
            { src: "/cs3-5.png", alt: "Journalist persona" },
            { src: "/cs3-6.png", alt: "Educator persona" }
          ]
        },
        {
          type: "text-grid",
          title: "User Flow",
          titleBreakLine: true,
          description: "Users discover trending fact-checks on homepage, search for specific claims, or submit new claims for verification. They read detailed analysis with clear verdict indicators, explore source references, and can bookmark articles for later. The flow prioritizes quick access to verification results.",
          images: [
            { src: "/cs3-7.png", alt: "User journey map" }
          ]
        },
        {
          type: "text-grid",
          title: "Core Features",
          titleBreakLine: true,
          description: "Clear verdict system with color-coded indicators for true, false, misleading, and unverified claims. Transparent source linking with credibility ratings. Trending fact-checks section highlighting current topics. Advanced search with filters for topics and verification status. User submission system for crowdsourced claim verification.",
          images: [
            { src: "/cs3-8.png", alt: "Verdict system" },
            { src: "/cs3-9.png", alt: "Source verification" },
            { src: "/cs3-10.png", alt: "Search interface" },
            { src: "/cs3-11.png", alt: "Trending section" }
          ]
        },
        {
          type: "text-grid-list",
          title: "Design System",
          titleBreakLine: true,
          description: [
            "Trustworthy color palette emphasizing neutrality and credibility",
            "Clear typography hierarchy for scannable fact-checking content",
            "Consistent verification badges and trust indicators throughout",
            "Accessible design meeting WCAG AA standards for all users"
          ],
          images: [
            { src: "/cs3-12.png", alt: "Design system" },
            { src: "/cs3-13.png", alt: "UI components" }
          ]
        },
        {
          type: "text-grid",
          title: "Final Product",
          titleBreakLine: true,
          description: "The redesigned FactWatch platform successfully transformed user engagement through improved content structure, intuitive navigation, and clear trust signals. The platform now serves as a reliable resource for truth verification with significantly better user retention and satisfaction scores.",
          images: [
            { src: "/cs3-14.png", alt: "Final platform design" }
          ]
        },
        {
          type: "text-only-list",
          title: "Outcomes & Impact",
          titleBreakLine: true,
          description: [
            "User visits increased by 35% in the first month after redesign",
            "Average session time grew by 40% with improved content engagement",
            "Bounce rate reduced significantly as visitors explored multiple articles"
          ]
        },
        {
          type: "text-only-list",
          title: "What I Learned",
          titleBreakLine: true,
          description: [
            "Trust indicators must be prominent but not overwhelming in design",
            "Content structure directly impacts perceived credibility",
            "Mobile-first approach is essential for news consumption patterns",
            "Clear information hierarchy reduces cognitive load for complex topics",
            "User feedback loops are crucial for continuous platform improvement"
          ]
        }
      ]
    }
  }
];

export default projectsData;